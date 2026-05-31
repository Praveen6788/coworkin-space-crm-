import { useEffect, useMemo, useState } from "react";
import {
  Armchair,
  Building2,
  CheckCircle2,
  Coffee,
  DoorOpen,
  Layers3,
  Presentation,
  RefreshCw,
  Users,
} from "lucide-react";

import { fetchBranches } from "../../Api/branchApi";
import { fetchBranchWorkspaces } from "../../Api/workspaceApi";
import { getBranchDashboard } from "../../Api/dashboardApi";

const statusStyles = {
  AVAILABLE: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  PARTIALLY_OCCUPIED: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
  FULLY_OCCUPIED: "border-red-500/20 bg-red-500/10 text-red-300",
  MAINTENANCE: "border-slate-500/20 bg-slate-500/10 text-slate-300",
};

const formatStatus = (status = "") =>
  status.replace(/_/g, " ").toLowerCase();

const getUsage = (workspace) => {
  const total = workspace.totalSeats || 0;
  const occupied = workspace.occupiedSeats || 0;

  return total > 0
    ? Math.min(Math.round((occupied / total) * 100), 100)
    : 0;
};

function WorkspaceTile({ workspace }) {
  const usage = getUsage(workspace);
  const style =
    statusStyles[workspace.status] ||
    statusStyles.AVAILABLE;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-white">
            {workspace.workspaceName}
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            {workspace.workspaceType}
          </p>
        </div>

        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] capitalize ${style}`}
        >
          {formatStatus(workspace.status)}
        </span>
      </div>

      <div className="flex items-end justify-between mb-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Seats
          </p>
          <p className="text-2xl font-semibold text-white">
            {workspace.occupiedSeats || 0}/{workspace.totalSeats || 0}
          </p>
        </div>
        <p className="text-sm text-slate-400">
          {workspace.availableSeats || 0} free
        </p>
      </div>

      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-sky-400"
          style={{ width: `${usage}%` }}
        />
      </div>
    </div>
  );
}

function FloorMap() {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] =
    useState(localStorage.getItem("branchId") || "");
  const [dashboard, setDashboard] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadBranches = async () => {
      try {
        const data = await fetchBranches();

        if (ignore) return;

        setBranches(data);

        if (!selectedBranchId && data.length) {
          setSelectedBranchId(data[0]._id);
          localStorage.setItem("branchId", data[0]._id);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load branches"
          );
          setLoading(false);
        }
      }
    };

    loadBranches();

    return () => {
      ignore = true;
    };
  }, [selectedBranchId]);

  useEffect(() => {
    if (!selectedBranchId) return;

    let ignore = false;

    const loadBranchData = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getBranchDashboard(selectedBranchId);
        const workspaceData =
          await fetchBranchWorkspaces(data.branchName);

        if (!ignore) {
          setDashboard(data);
          setWorkspaces(workspaceData);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load floor map"
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadBranchData();

    return () => {
      ignore = true;
    };
  }, [selectedBranchId]);

  const groupedWorkspaces = useMemo(() => {
    const isType = (workspace, type) =>
      workspace.workspaceType
        ?.toLowerCase()
        .includes(type);

    return {
      cabins: workspaces.filter((workspace) =>
        isType(workspace, "cabin")
      ),
      meetingRooms: workspaces.filter((workspace) =>
        isType(workspace, "meeting")
      ),
      desks: workspaces.filter(
        (workspace) =>
          isType(workspace, "desk") ||
          isType(workspace, "day pass")
      ),
    };
  }, [workspaces]);

  const handleBranchChange = (event) => {
    const branchId = event.target.value;
    setSelectedBranchId(branchId);
    localStorage.setItem("branchId", branchId);
  };

  if (!selectedBranchId && !loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white px-4 py-10 mt-15">
        <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-10 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            No Branch Found
          </h3>
          <p className="text-slate-400 text-sm">
            Create a branch to view floor analytics.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6 mt-15">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-7">
        <div>
          <p className="text-sky-400 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
            Workspace Layout
          </p>
          <h1 className="text-3xl font-semibold mb-2">
            {dashboard?.branchName || "Branch"} Floor Map
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Seat availability updates after payment confirmation, keeping the
            floor map aligned with paid allocations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedBranchId}
            onChange={handleBranchChange}
            className="h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white outline-none"
          >
            {branches.map((branch) => (
              <option
                key={branch._id}
                value={branch._id}
                className="bg-[#020617]"
              >
                {branch.branchName}
              </option>
            ))}
          </select>

          <div className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <RefreshCw size={15} className="text-emerald-300" />
            <span className="text-sm text-emerald-300">
              Payment synced
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          ["Total Seats", dashboard?.totalSeats || 0, Layers3],
          ["Occupied", dashboard?.occupiedSeats || 0, Users],
          ["Available", dashboard?.availableSeats || 0, Armchair],
          ["Occupancy", `${dashboard?.occupancyRate || 0}%`, CheckCircle2],
        ].map(([label, value, Icon]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-[#0F172A] p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-500 text-[11px] uppercase tracking-[0.16em]">
                {label}
              </p>
              <Icon size={18} className="text-sky-300" />
            </div>
            <h3 className="text-3xl font-semibold">
              {loading ? "..." : value}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">
        <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-xl font-semibold">
                Live Workspace Zones
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Clean capacity view by zone and workspace type.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="rounded-full bg-white/5 px-3 py-1">
                Cabins
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                Meeting rooms
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                Desks
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="rounded-2xl border border-white/10 bg-[#020617] p-5 min-h-[150px] flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <DoorOpen size={24} className="text-sky-300" />
              </div>
              <div>
                <h3 className="font-semibold">Reception</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Visitor check-in and front desk flow.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#020617] p-5 min-h-[150px] flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Coffee size={24} className="text-amber-300" />
              </div>
              <div>
                <h3 className="font-semibold">Lounge Area</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Breakout and informal collaboration area.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={18} className="text-sky-300" />
              <h3 className="font-semibold">Private Cabins</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedWorkspaces.cabins.map((workspace) => (
                <WorkspaceTile
                  key={workspace._id}
                  workspace={workspace}
                />
              ))}
              {!loading && groupedWorkspaces.cabins.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-500">
                  No cabin workspaces configured.
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Armchair size={18} className="text-emerald-300" />
              <h3 className="font-semibold">Desk Seating</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedWorkspaces.desks.map((workspace) => (
                <WorkspaceTile
                  key={workspace._id}
                  workspace={workspace}
                />
              ))}
              {!loading && groupedWorkspaces.desks.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-500">
                  No desk workspaces configured.
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="flex items-center gap-2 mb-5">
              <Presentation size={20} className="text-violet-300" />
              <h2 className="text-lg font-semibold">Meeting Rooms</h2>
            </div>

            <div className="space-y-3">
              {groupedWorkspaces.meetingRooms.map((room) => (
                <WorkspaceTile key={room._id} workspace={room} />
              ))}
              {!loading && groupedWorkspaces.meetingRooms.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-500">
                  No meeting rooms configured.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <h2 className="text-lg font-semibold mb-5">
              Allocation Rules
            </h2>

            <div className="space-y-4 text-sm">
              {[
                "Invoice generation reserves intent only.",
                "Successful payment creates the active allocation.",
                "Workspace occupied and available seats update after payment.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 mt-0.5"
                  />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <h2 className="text-lg font-semibold mb-5">
              Branch Snapshot
            </h2>

            <div className="space-y-4">
              {[
                ["Active Clients", dashboard?.activeClients || 0],
                ["Renewals Due", dashboard?.renewalsDue || 0],
                ["Pending Invoices", dashboard?.pendingInvoices || 0],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-lg font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorMap;
