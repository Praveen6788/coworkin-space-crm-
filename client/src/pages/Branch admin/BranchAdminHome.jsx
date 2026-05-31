import { useEffect, useMemo, useState } from "react";

import { fetchBranches } from "../../Api/branchApi";
import { getBranchDashboard } from "../../Api/dashboardApi";

function BranchAdminHome() {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] =
    useState(localStorage.getItem("branchId") || "");
  const [dashboard, setDashboard] = useState(null);
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

    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getBranchDashboard(selectedBranchId);

        if (!ignore) {
          setDashboard(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load branch dashboard"
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadDashboard();

    return () => {
      ignore = true;
    };
  }, [selectedBranchId]);

  const metrics = [
    {
      label: "Active Leads",
      value: dashboard?.newLeads || 0,
      growth: "Live",
      color: "text-sky-400",
    },
    {
      label: "Workspace Occupancy",
      value: `${dashboard?.occupancyRate || 0}%`,
      growth: `${dashboard?.availableSeats || 0} available`,
      color: "text-emerald-400",
    },
    {
      label: "Pending Payments",
      value: dashboard?.pendingInvoices || 0,
      growth: `${dashboard?.overdueInvoices || 0} overdue`,
      color: "text-red-400",
    },
    {
      label: "Bookings",
      value: dashboard?.todaysBookings?.length || 0,
      growth: "Scheduled",
      color: "text-orange-400",
    },
  ];

  const tasks = [
    {
      title: "Approve Move-in Access",
      desc: `${dashboard?.renewalsDue || 0} renewals need branch attention.`,
      color: "border-orange-500/20 bg-orange-500/10",
      icon: "A",
    },
    {
      title: "Pending Invoice Collection",
      desc: `${dashboard?.pendingInvoices || 0} invoices require finance follow-up.`,
      color: "border-red-500/20 bg-red-500/10",
      icon: "P",
    },
    {
      title: "New Lead Assignment",
      desc: `${dashboard?.newLeads || 0} fresh enquiries received.`,
      color: "border-sky-500/20 bg-sky-500/10",
      icon: "L",
    },
  ];

  const activities = useMemo(
    () =>
      (dashboard?.recentActivities || []).map((item) => ({
        title: item.title,
        desc: item.description,
        time: item.time,
        dot: "bg-sky-400",
      })),
    [dashboard]
  );

  const handleBranchChange = (event) => {
    const branchId = event.target.value;
    setSelectedBranchId(branchId);
    localStorage.setItem("branchId", branchId);
  };

  return (
    <div className="min-h-screen bg-[#020617] px-5 sm:px-6 lg:px-8 py-6 mt-14 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-emerald-500/10 p-6 sm:p-8 mb-6">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-sky-400 text-[10px] uppercase tracking-[0.28em] mb-3">
              Branch Operations
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
              Welcome back,
              <span className="text-sky-400"> Branch Admin</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Manage onboarding workflows, lead pipelines, workspace occupancy, billing operations and branch activity from one centralized dashboard.
            </p>
          </div>

          <div className="w-full lg:w-[420px] space-y-3">
            <select
              value={selectedBranchId}
              onChange={handleBranchChange}
              className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white outline-none"
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

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
                >
                  <p className="text-slate-500 text-[11px] mb-2">
                    {item.label}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-semibold">
                      {loading ? "..." : item.value}
                    </h3>
                    <span className={`text-xs ${item.color}`}>
                      {item.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 space-y-5">
          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">
            <div className="mb-6">
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                Branch Tasks
              </p>
              <h2 className="text-2xl font-semibold">
                Priority Actions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className={`rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-1 ${task.color}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm mb-4">
                    {task.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-2">
                    {task.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#020617] border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    Workspace Occupancy
                  </h3>
                  <p className="text-slate-500 text-xs">
                    Current live branch utilization
                  </p>
                </div>
                <span className="text-emerald-400 text-xs">
                  {dashboard?.occupancyRate || 0}%
                </span>
              </div>
              <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-300"
                  style={{
                    width: `${dashboard?.occupancyRate || 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">
            <div className="mb-6">
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                Activity Feed
              </p>
              <h2 className="text-xl font-semibold">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-4">
              {activities.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition"
                >
                  <div className={`w-2.5 h-2.5 rounded-full mt-2 ${item.dot}`} />
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-2">
                      {item.desc}
                    </p>
                    <span className="text-slate-600 text-[10px]">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}

              {!loading && activities.length === 0 && (
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-500">
                  No recent activity.
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold">
                Branch Status
              </h3>
              <span className="text-emerald-400 text-[10px]">
                Active
              </span>
            </div>

            <div className="space-y-3">
              {[
                ["Occupancy Rate", `${dashboard?.occupancyRate || 0}%`],
                ["Workspace Availability", `${dashboard?.availableSeats || 0} Seats`],
                ["Pending Renewals", dashboard?.renewalsDue || 0],
                ["Active Bookings", dashboard?.todaysBookings?.length || 0],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-xs text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchAdminHome;
