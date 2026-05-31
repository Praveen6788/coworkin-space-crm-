import { useEffect, useMemo, useState } from "react";

import { getAdminDashboard } from "../../Api/dashboardApi";

const formatCurrency = (amount = 0) => {
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

function AdminHome() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getAdminDashboard();

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

  const alerts = useMemo(
    () => [
      {
        title: `${dashboard?.pendingInvoices || 0} Payments Pending`,
        desc: "Invoice clearance pending for finance approvals.",
        color: "red",
        icon: "!",
      },
      {
        title: `${dashboard?.totalBookings || 0} Bookings Logged`,
        desc: "Workspace reservations recorded across branches.",
        color: "amber",
        icon: "B",
      },
      {
        title: `${dashboard?.totalLeads || 0} Leads Added`,
        desc: "Fresh enquiries from all branches.",
        color: "sky",
        icon: "L",
      },
    ],
    [dashboard]
  );

  const notifications = useMemo(() => {
    const payments =
      dashboard?.recentPayments?.map((payment) => ({
        title: "Payment Received",
        desc: `${formatCurrency(payment.amount)} payment completed successfully.`,
        time: new Date(payment.createdAt).toLocaleString("en-IN"),
        dot: "bg-emerald-400",
      })) || [];

    const leads =
      dashboard?.recentLeads?.map((lead) => ({
        title: "New Lead Added",
        desc: `${lead.workspace} enquiry from ${lead.name}.`,
        time: new Date(lead.createdAt).toLocaleString("en-IN"),
        dot: "bg-sky-400",
      })) || [];

    return [...payments, ...leads].slice(0, 5);
  }, [dashboard]);

  const metrics = [
    {
      label: "Revenue",
      value: formatCurrency(dashboard?.totalRevenue || 0),
      growth: `${dashboard?.totalBranches || 0} branches`,
      color: "text-emerald-400",
    },
    {
      label: "Occupancy",
      value: `${dashboard?.occupancyRate || 0}%`,
      growth: `${dashboard?.totalBookings || 0} bookings`,
      color: "text-sky-400",
    },
    {
      label: "Active Leads",
      value: dashboard?.totalLeads || 0,
      growth: `${dashboard?.totalClients || 0} clients`,
      color: "text-orange-400",
    },
    {
      label: "Pending Payments",
      value: dashboard?.pendingInvoices || 0,
      growth: `${dashboard?.overdueInvoices || 0} overdue`,
      color: "text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] px-5 sm:px-6 lg:px-8 py-6 mt-14 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-violet-500/5 to-emerald-500/10 p-6 sm:p-8 mb-6">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-sky-400 text-[10px] uppercase tracking-[0.28em] mb-3">
              Admin Dashboard
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
              Welcome back, <span className="text-sky-400">Admin</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Monitor branch operations, revenue insights, alerts, onboarding workflows and workspace activities from one centralized dashboard.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full lg:w-[420px]">
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

      {error && (
        <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 bg-[#0F172A] border border-white/10 rounded-3xl p-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                Alerts Center
              </p>
              <h2 className="text-2xl font-semibold">
                Operational Alerts
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className={`
                  rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-1
                  ${alert.color === "red" && "bg-red-500/10 border-red-500/20"}
                  ${alert.color === "amber" && "bg-amber-500/10 border-amber-500/20"}
                  ${alert.color === "sky" && "bg-sky-500/10 border-sky-500/20"}
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm">
                    {alert.icon}
                  </div>
                  <span className="text-[10px] text-white/60">Live</span>
                </div>
                <h3 className="text-sm font-semibold mb-2">
                  {alert.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {alert.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#020617] border border-white/5 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-sm font-semibold mb-1">
                  Revenue Activity
                </h3>
                <p className="text-slate-500 text-xs">
                  Monthly collection trend
                </p>
              </div>
              <span className="text-emerald-400 text-xs">
                {formatCurrency(dashboard?.totalRevenue || 0)}
              </span>
            </div>

            <div className="flex items-end justify-between gap-3 h-[180px]">
              {(dashboard?.monthlyRevenue || []).map((item) => {
                const max = Math.max(
                  ...(dashboard?.monthlyRevenue || []).map(
                    (point) => point.revenue
                  ),
                  1
                );
                const height = `${Math.max((item.revenue / max) * 100, 8)}%`;

                return (
                  <div
                    key={item.label}
                    className="flex-1 flex flex-col items-center justify-end gap-3"
                  >
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-sky-500 via-blue-400 to-cyan-300"
                      style={{ height }}
                    />
                    <p className="text-[10px] text-slate-500">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">
          <div className="mb-6">
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">
              Notification Center
            </p>
            <h2 className="text-xl font-semibold">Recent Updates</h2>
          </div>

          <div className="space-y-4">
            {notifications.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition"
              >
                <div className={`w-2.5 h-2.5 rounded-full mt-2 ${item.dot}`} />
                <div>
                  <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <span className="text-slate-600 text-[10px]">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}

            {!loading && notifications.length === 0 && (
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-500">
                No recent updates.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
