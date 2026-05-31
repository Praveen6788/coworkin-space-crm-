import { useEffect, useMemo, useState } from "react";

import KPIStatCard from "../../components/cards/KPIStatCard";
import GlassCard from "../../components/ui/GlassCard";
import AIInsightsPanel from "../../components/dashboard/AIInsightsPanel";
import { getAdminDashboard } from "../../Api/dashboardApi";

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

const getChartPath = (points, width, height) => {
  if (!points.length) return "";

  const maxRevenue =
    Math.max(...points.map((point) => point.revenue), 1);
  const step =
    points.length > 1
      ? width / (points.length - 1)
      : width;

  return points
    .map((point, index) => {
      const x = index * step;
      const y =
        height -
        (point.revenue / maxRevenue) * (height - 30) -
        15;

      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
};

function Dashboard() {
  const [dashboard, setDashboard] =
    useState(null);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");

  useEffect(() => {
    let ignore = false;

    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await getAdminDashboard();

        if (!ignore) {
          setDashboard(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load dashboard data"
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
  }, []);

  const chartData = useMemo(() => {
    const liveData =
      dashboard?.monthlyRevenue || [];

    if (liveData.length) {
      return liveData;
    }

    return [
      { label: "Jan", revenue: 0 },
      { label: "Feb", revenue: 0 },
      { label: "Mar", revenue: 0 },
      { label: "Apr", revenue: 0 },
      { label: "May", revenue: 0 },
      { label: "Jun", revenue: 0 },
    ];
  }, [dashboard]);

  const branchPerformance =
    dashboard?.branchPerformance || [];

  const chartPath =
    getChartPath(chartData, 620, 220);

  const maxRevenue =
    Math.max(
      ...chartData.map((point) => point.revenue),
      1
    );

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6 mt-15">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">
            Global Admin Dashboard
          </p>

          <h1 className="text-3xl font-semibold text-white mb-2">
            Operational Intelligence
          </h1>

          <p className="text-gray-400 text-sm">
            Monitor branch performance, occupancy,
            finances and operational growth.
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-sm w-fit">
          Export Report
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <KPIStatCard
          title="Revenue"
          value={
            loading
              ? "Loading..."
              : formatCurrency(dashboard?.totalRevenue)
          }
          growth={`${dashboard?.pendingInvoices || 0} pending invoices`}
          color="green"
          icon="Rs"
        />

        <KPIStatCard
          title="Occupancy"
          value={
            loading
              ? "Loading..."
              : `${dashboard?.occupancyRate || 0}%`
          }
          growth={`${dashboard?.totalBookings || 0} total bookings`}
          color="blue"
          icon="%"
        />

        <KPIStatCard
          title="Clients"
          value={
            loading
              ? "Loading..."
              : dashboard?.totalClients || 0
          }
          growth={`${dashboard?.totalLeads || 0} total leads`}
          color="purple"
          icon="C"
        />

        <KPIStatCard
          title="Alerts"
          value={
            loading
              ? "Loading..."
              : (dashboard?.pendingInvoices || 0) +
                (dashboard?.overdueInvoices || 0) +
                (dashboard?.renewalsDue || 0)
          }
          growth={`${dashboard?.renewalsDue || 0} renewals due`}
          color="red"
          icon="!"
        />
      </div>

      <AIInsightsPanel
        insights={dashboard?.aiInsights}
        loading={loading}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
        <GlassCard className="xl:col-span-2 p-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Revenue Analytics
              </h2>
              <p className="text-gray-400 text-sm">
                Collections from received payments
              </p>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-xs">
              Live
            </div>
          </div>

          <div className="relative h-[280px] rounded-2xl border border-white/5 bg-[#020617] overflow-hidden p-6">
            <div className="absolute inset-0 opacity-20">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="absolute left-0 right-0 border-t border-cyan-500/10"
                  style={{
                    top: `${index * 20}%`,
                  }}
                />
              ))}
            </div>

            <div className="absolute left-4 top-6 bottom-6 flex flex-col justify-between text-[10px] text-gray-500 z-10">
              <span>{formatCurrency(maxRevenue)}</span>
              <span>
                {formatCurrency(maxRevenue * 0.75)}
              </span>
              <span>
                {formatCurrency(maxRevenue * 0.5)}
              </span>
              <span>
                {formatCurrency(maxRevenue * 0.25)}
              </span>
              <span>Rs 0</span>
            </div>

            <div className="absolute bottom-3 left-16 right-6 flex justify-between text-[10px] text-gray-500 z-10">
              {chartData.map((point) => (
                <span key={point.label}>
                  {point.label}
                </span>
              ))}
            </div>

            <svg
              viewBox="0 0 700 300"
              className="absolute inset-0 w-full h-full px-16 py-8"
            >
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#00F5D4"
                    stopOpacity="0.35"
                  />
                  <stop
                    offset="100%"
                    stopColor="#00F5D4"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {chartPath && (
                <>
                  <path
                    d={`${chartPath} L 620 250 L 0 250 Z`}
                    fill="url(#revenueGradient)"
                    transform="translate(40 20)"
                  />
                  <path
                    d={chartPath}
                    fill="none"
                    stroke="#00F5D4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(40 20)"
                  />
                </>
              )}
            </svg>

            <div className="absolute top-5 right-5 z-10">
              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/10 backdrop-blur-xl">
                <p className="text-[10px] text-gray-400 mb-1">
                  Total Revenue
                </p>
                <h3 className="text-cyan-400 text-lg font-semibold">
                  {formatCurrency(dashboard?.totalRevenue)}
                </h3>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-1">
              Quick Access
            </h2>
            <p className="text-gray-400 text-sm">
              Administrative modules
            </p>
          </div>

          <div className="space-y-3">
            {[
              ["Branch Analytics", "/global-admin/branch-analytics"],
              ["Finance Overview", "/global-admin/finance"],
              ["Workspace Monitoring", "/global-admin/branch-analytics"],
              ["Client Renewals", "/global-admin/dashboard"],
              ["Notifications Center", "/global-admin/home"],
            ].map(([item, href]) => (
              <a
                key={item}
                href={href}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/10 transition text-sm"
              >
                {item}
                <span>-&gt;</span>
              </a>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-5 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">
              Branch Performance
            </h2>
            <p className="text-gray-400 text-sm">
              Live operational metrics from backend
            </p>
          </div>
        </div>

        <table className="w-full min-w-[750px]">
          <thead>
            <tr className="border-b border-white/5 text-left text-gray-400 text-sm">
              <th className="pb-4">Branch</th>
              <th className="pb-4">Occupancy</th>
              <th className="pb-4">Revenue</th>
              <th className="pb-4">Clients</th>
              <th className="pb-4">Renewals</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {branchPerformance.map((branch) => (
              <tr
                key={branch.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="py-4 font-medium">
                  <div>{branch.name}</div>
                  <div className="text-xs text-gray-500">
                    {branch.city}
                  </div>
                </td>

                <td className="py-4">
                  {branch.occupancy}%
                </td>

                <td className="py-4 text-cyan-400">
                  {formatCurrency(branch.revenue)}
                </td>

                <td className="py-4">
                  {branch.activeClients}
                </td>

                <td className="py-4">
                  {branch.renewalsDue}
                </td>

                <td className="py-4">
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-xs">
                    {branch.status}
                  </span>
                </td>
              </tr>
            ))}

            {!loading && branchPerformance.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="py-8 text-center text-sm text-gray-500"
                >
                  No branch data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </GlassCard>
    </div>
  );
}

export default Dashboard;
