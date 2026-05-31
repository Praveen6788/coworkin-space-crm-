import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import GlassCard from "../../components/ui/GlassCard";
import KPIStatCard from "../../components/cards/KPIStatCard";
import { getAdminDashboard } from "../../Api/dashboardApi";
import { fetchClients } from "../../Api/clientApi";
import { fetchInvoices } from "../../Api/invoiceApi";

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

const daysUntil = (date) => {
  if (!date) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

function FinanceOverview() {
  const [dashboard, setDashboard] = useState(null);
  const [clients, setClients] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [dashboardData, clientData, invoiceData] =
          await Promise.all([
            getAdminDashboard(),
            fetchClients(),
            fetchInvoices(),
          ]);

        if (!ignore) {
          setDashboard(dashboardData);
          setClients(clientData);
          setInvoices(invoiceData);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load finance overview"
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, []);

  const unpaidInvoices = useMemo(
    () =>
      invoices
        .filter((invoice) =>
          ["PENDING", "OVERDUE"].includes(invoice.status)
        )
        .slice(0, 8),
    [invoices]
  );

  const expiringClients = useMemo(
    () =>
      clients
        .map((client) => ({
          ...client,
          daysLeft: daysUntil(client.contractEndDate),
        }))
        .filter(
          (client) =>
            client.status === "RENEWAL_DUE" ||
            (client.daysLeft !== null &&
              client.daysLeft <= 30)
        )
        .sort(
          (a, b) =>
            (a.daysLeft ?? 999) -
            (b.daysLeft ?? 999)
        )
        .slice(0, 8),
    [clients]
  );

  const revenueAtRisk = unpaidInvoices.reduce(
    (sum, invoice) =>
      sum + (invoice.totalAmount || 0),
    0
  );
  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "PAID"
  );
  const collectionRate = invoices.length
    ? Math.round((paidInvoices.length / invoices.length) * 100)
    : 0;

  const highestRiskBranch =
    dashboard?.branchPerformance
      ?.slice()
      .sort(
        (a, b) =>
          (b.renewalsDue || 0) -
          (a.renewalsDue || 0)
      )[0]?.name || "-";

  const mostOverdue =
    unpaidInvoices[0]?.clientId?.companyName ||
    unpaidInvoices[0]?.invoiceNumber ||
    "-";

  return (
    <div className="min-h-screen bg-[#020617] text-white px-5 sm:px-6 lg:px-8 py-6 mt-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
        <div>
          <p className="text-red-400 text-[10px] tracking-[0.25em] uppercase mb-2">
            Finance Intelligence
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            Revenue Leakage Monitoring
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl">
            Monitor unpaid invoices, expiring contracts, branch revenue risk and collection performance in real time.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <KPIStatCard
          title="Revenue At Risk"
          value={loading ? "Loading..." : formatCurrency(revenueAtRisk)}
          growth={`${unpaidInvoices.length} unpaid invoices`}
          color="red"
          icon="!"
        />
        <KPIStatCard
          title="Expiring Clients"
          value={loading ? "Loading..." : expiringClients.length}
          growth="Renewal required"
          color="yellow"
          icon="R"
        />
        <KPIStatCard
          title="Unpaid Invoices"
          value={loading ? "Loading..." : unpaidInvoices.length}
          growth="Pending collections"
          color="purple"
          icon="I"
        />
        <KPIStatCard
          title="Collection Rate"
          value={loading ? "Loading..." : `${collectionRate}%`}
          growth={`${paidInvoices.length} paid invoices`}
          color="green"
          icon="%"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
        <div className="xl:col-span-2 space-y-5">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base font-semibold mb-1">
                  Revenue Trend Analytics
                </h2>
                <p className="text-gray-400 text-xs">
                  Monthly financial performance
                </p>
              </div>
              <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                Live
              </div>
            </div>

            <div className="h-[260px] rounded-2xl bg-[#0B1120] border border-white/5 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dashboard?.monthlyRevenue || []}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="label" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", color: "white" }} />
                  <Area type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="p-5 overflow-x-auto">
            <div className="mb-5">
              <h2 className="text-base font-semibold mb-1">
                Unpaid Invoices
              </h2>
              <p className="text-gray-400 text-xs">
                Pending payment tracking
              </p>
            </div>

            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-white/5 text-left text-gray-400 text-xs">
                  <th className="pb-3">Invoice</th>
                  <th className="pb-3">Company</th>
                  <th className="pb-3">Due Status</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {unpaidInvoices.map((invoice) => (
                  <tr key={invoice._id} className="border-b border-white/5 hover:bg-white/[0.02] transition">
                    <td className="py-4 text-sm">{invoice.invoiceNumber}</td>
                    <td className="py-4 text-sm">{invoice.clientId?.companyName || "-"}</td>
                    <td className="py-4 text-red-400 text-sm">{invoice.status}</td>
                    <td className="py-4 text-sm">{formatCurrency(invoice.totalAmount)}</td>
                    <td className="py-4">
                      <button className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] hover:bg-red-500/15 transition">
                        Send Reminder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>

        <div className="space-y-5">
          <GlassCard className="p-5">
            <div className="mb-5">
              <h2 className="text-base font-semibold mb-1">
                Expiring Clients
              </h2>
              <p className="text-gray-400 text-xs">
                Contracts nearing expiry
              </p>
            </div>

            <div className="space-y-3">
              {expiringClients.map((client) => (
                <div key={client._id} className="bg-white/[0.04] border border-white/5 rounded-xl p-4 hover:border-red-500/20 transition">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{client.companyName}</h3>
                    <span className="text-red-400 text-[10px]">
                      {client.daysLeft === null ? "Renewal Due" : `${client.daysLeft} Days Left`}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-3">{client.branch}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">{formatCurrency(client.monthlyRent)}</p>
                    <button className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] hover:bg-red-500/15 transition">
                      Renew
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="mb-5">
              <h2 className="text-base font-semibold mb-1">
                Financial Insights
              </h2>
              <p className="text-gray-400 text-xs">
                Operational finance indicators
              </p>
            </div>

            <div className="space-y-3">
              {[
                ["Highest Risk Branch", highestRiskBranch],
                ["Most Overdue", mostOverdue],
                ["Collection Efficiency", `${collectionRate}%`],
                ["Revenue Recovery", formatCurrency(dashboard?.totalRevenue || 0)],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between bg-white/[0.04] border border-white/5 rounded-xl p-4 hover:border-white/10 transition">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

export default FinanceOverview;
