import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import GlassCard from "../../components/ui/GlassCard";
import KPIStatCard from "../../components/cards/KPIStatCard";
import AIInsightsPanel from "../../components/dashboard/AIInsightsPanel";
import { fetchBranches } from "../../Api/branchApi";
import { getBranchDashboard } from "../../Api/dashboardApi";

const formatCurrency = (amount = 0) => {
  if (amount >= 10000000) {
    return `Rs ${(amount / 10000000).toFixed(1)}Cr`;
  }

  if (amount >= 100000) {
    return `Rs ${(amount / 100000).toFixed(1)}L`;
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace("₹", "Rs ");
};

const formatDayLabel = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    weekday: "short",
  });

const formatDaysLeft = (daysLeft) => {
  if (daysLeft === null || daysLeft === undefined) {
    return "Renewal Due";
  }

  if (daysLeft < 0) {
    return `${Math.abs(daysLeft)} Days Overdue`;
  }

  if (daysLeft === 0) {
    return "Due Today";
  }

  return `${daysLeft} Days Left`;
};

const BranchAdminDashboard = () => {
  const [branches, setBranches] =
    useState([]);
  const [selectedBranchId, setSelectedBranchId] =
    useState(
      localStorage.getItem("branchId") || ""
    );
  const [dashboard, setDashboard] =
    useState(null);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  useEffect(() => {
    let ignore = false;

    const loadBranches = async () => {
      try {
        const data = await fetchBranches();

        if (ignore) return;

        setBranches(data);

        if (!selectedBranchId && data.length) {
          setSelectedBranchId(data[0]._id);
          localStorage.setItem(
            "branchId",
            data[0]._id
          );
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

        const data =
          await getBranchDashboard(
            selectedBranchId
          );

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

  const bookings = useMemo(
    () => dashboard?.todaysBookings || [],
    [dashboard]
  );
  const activities =
    dashboard?.recentActivities || [];
  const expiringClients =
    dashboard?.expiringClients || [];
  const visitors =
    dashboard?.visitors || [];

  const scheduleRows = useMemo(() => {
    const rows = bookings.map((booking) => ({
      label:
        booking.workspaceName ||
        booking.bookingType,
      day: booking.bookingDate
        ? formatDayLabel(booking.bookingDate)
        : "Today",
      time:
        booking.startTime && booking.endTime
          ? `${booking.startTime} - ${booking.endTime}`
          : booking.startTime || "Scheduled",
      title:
        booking.title || booking.bookingType,
      customerName:
        booking.customerName,
    }));

    return rows.slice(0, 5);
  }, [bookings]);

  const handleBranchChange = (event) => {
    const branchId = event.target.value;
    setSelectedBranchId(branchId);
    localStorage.setItem("branchId", branchId);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6 mt-15">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
        <div>
          <p className="text-emerald-400 text-[11px] tracking-[0.25em] uppercase mb-2">
            Branch Operations
          </p>

          <h1 className="text-3xl font-semibold mb-2">
            {dashboard?.branchName || "Branch"} Workspace Dashboard
          </h1>

          <p className="text-gray-400 text-sm">
            Manage workspace operations, onboarding,
            bookings and client renewals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <select
            value={selectedBranchId}
            onChange={handleBranchChange}
            className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white outline-none"
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

          <Link
            to="/client/locations"
            className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm"
          >
            + New Booking
          </Link>

          <button className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm">
            Export Report
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <KPIStatCard
          title="Occupancy"
          value={
            loading
              ? "Loading..."
              : `${dashboard?.occupancyRate || 0}%`
          }
          growth={`${dashboard?.availableSeats || 0} seats available`}
          color="green"
          icon="%"
        />

        <KPIStatCard
          title="Active Clients"
          value={
            loading
              ? "Loading..."
              : dashboard?.activeClients || 0
          }
          growth={`${dashboard?.newLeads || 0} new leads`}
          color="blue"
          icon="C"
        />

        <KPIStatCard
          title="Renewals Due"
          value={
            loading
              ? "Loading..."
              : dashboard?.renewalsDue || 0
          }
          growth="Needs attention"
          color="red"
          icon="!"
        />

        <KPIStatCard
          title="Revenue"
          value={
            loading
              ? "Loading..."
              : formatCurrency(dashboard?.revenue)
          }
          growth={`${dashboard?.pendingInvoices || 0} pending invoices`}
          color="purple"
          icon="Rs"
        />
      </div>

      <AIInsightsPanel
        insights={dashboard?.aiInsights}
        loading={loading}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
        <div className="xl:col-span-2 space-y-5">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  Workspace Schedule
                </h2>
                <p className="text-gray-400 text-sm">
                  Room bookings and workspace operations
                </p>
              </div>

              <Link
                to="/branch-admin/floor-map"
                className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm"
              >
                Quick Allocate
              </Link>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
              <div className="grid grid-cols-[1.2fr_1fr_1fr_1.5fr] border-b border-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-gray-500">
                <span>Workspace</span>
                <span>Day</span>
                <span>Time</span>
                <span>Booking</span>
              </div>

              {scheduleRows.map((booking, index) => (
                <div
                  key={`${booking.label}-${index}`}
                  className="grid grid-cols-[1.2fr_1fr_1fr_1.5fr] items-center border-b border-white/5 px-4 py-4 text-sm last:border-b-0"
                >
                  <span className="text-gray-300">
                    {booking.label}
                  </span>
                  <span className="text-gray-400">
                    {booking.day}
                  </span>
                  <span className="text-emerald-400">
                    {booking.time}
                  </span>
                  <div>
                    <p className="font-medium">
                      {booking.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {booking.customerName}
                    </p>
                  </div>
                </div>
              ))}

              {!loading && scheduleRows.length === 0 && (
                <div className="px-4 py-10 text-center text-sm text-gray-500">
                  No bookings found for this branch.
                </div>
              )}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold mb-1">
                Recent Activity
              </h2>
              <p className="text-gray-400 text-sm">
                Live operational events
              </p>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={`${activity.title}-${index}`}
                  className="flex items-start justify-between bg-white/5 border border-white/5 rounded-xl p-4"
                >
                  <div>
                    <h3 className="font-medium text-sm mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {activity.description}
                    </p>
                  </div>

                  <span className="text-[10px] text-gray-500">
                    {activity.time}
                  </span>
                </div>
              ))}

              {!loading && activities.length === 0 && (
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-gray-500">
                  No recent activity yet.
                </div>
              )}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-5">
          <GlassCard className="p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold mb-1">
                Expiring Clients
              </h2>
              <p className="text-gray-400 text-sm">
                Renewal monitoring
              </p>
            </div>

            <div className="space-y-4">
              {expiringClients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">
                      {client.company}
                    </h3>
                    <span className="text-red-400 text-xs">
                      {formatDaysLeft(client.daysLeft)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">
                      {formatCurrency(client.amount)}
                    </p>

                    <button className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/10 text-red-400 text-xs">
                      Renew
                    </button>
                  </div>
                </div>
              ))}

              {!loading && expiringClients.length === 0 && (
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-gray-500">
                  No renewals due in the next 30 days.
                </div>
              )}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold mb-1">
                Today's Visitors
              </h2>
              <p className="text-gray-400 text-sm">
                Visitor management logs
              </p>
            </div>

            <div className="space-y-4">
              {visitors.map((visitor) => (
                <div
                  key={visitor.id}
                  className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-4"
                >
                  <div>
                    <h3 className="text-sm font-medium mb-1">
                      {visitor.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      Visiting {visitor.host}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-xs">
                    {visitor.status}
                  </span>
                </div>
              ))}

              {!loading && visitors.length === 0 && (
                <div className="rounded-xl border border-white/5 bg-white/5 p-4 text-sm text-gray-500">
                  No visitor logs for this branch.
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default BranchAdminDashboard;
