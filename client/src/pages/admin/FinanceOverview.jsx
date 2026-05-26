import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid
} from "recharts";

import GlassCard from "../../components/ui/GlassCard";
import KPIStatCard from "../../components/cards/KPIStatCard";



function FinanceOverview() {



  const revenueTrend = [

    { month: "Jan", value: 32 },

    { month: "Feb", value: 41 },

    { month: "Mar", value: 36 },

    { month: "Apr", value: 52 },

    { month: "May", value: 49 },

    { month: "Jun", value: 68 },

  ];



  const expiringClients = [

    {
      company: "TechNova",
      branch: "Madhapur",
      expiry: "2 Days Left",
      amount: "₹1.2L"
    },

    {
      company: "ScaleX Labs",
      branch: "Gachibowli",
      expiry: "5 Days Left",
      amount: "₹84K"
    },

    {
      company: "CloudMint",
      branch: "KPHB",
      expiry: "7 Days Left",
      amount: "₹62K"
    }

  ];



  const unpaidInvoices = [

    {
      invoice: "#INV-2041",
      company: "ByteBridge",
      due: "Overdue by 8 Days",
      amount: "₹48K"
    },

    {
      invoice: "#INV-1982",
      company: "NovaEdge",
      due: "Overdue by 14 Days",
      amount: "₹76K"
    },

    {
      invoice: "#INV-2104",
      company: "CloudPeak",
      due: "Due Tomorrow",
      amount: "₹21K"
    }

  ];



  return (

    <div className="min-h-screen bg-[#020617] text-white px-5 sm:px-6 lg:px-8 py-6 mt-14">



      {/* HEADER */}



      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-red-400 text-[10px] tracking-[0.25em] uppercase mb-2">

            Finance Intelligence

          </p>



          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">

            Revenue Leakage Monitoring

          </h1>



          <p className="text-gray-400 text-sm max-w-2xl">

            Monitor unpaid invoices,
            expiring contracts, branch
            revenue risk and collection
            performance in real time.

          </p>

        </div>



        <button className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs hover:bg-red-500/15 transition">

          Export Finance Report

        </button>

      </div>



      {/* KPI GRID */}



      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        <KPIStatCard
          title="Revenue At Risk"
          value="₹14.2L"
          growth="+8% this week"
          color="red"
          icon="⚠️"
        />



        <KPIStatCard
          title="Expiring Clients"
          value="12"
          growth="Renewal required"
          color="yellow"
          icon="📄"
        />



        <KPIStatCard
          title="Unpaid Invoices"
          value="18"
          growth="Pending collections"
          color="purple"
          icon="💳"
        />



        <KPIStatCard
          title="Collection Rate"
          value="91%"
          growth="+4.3% improvement"
          color="green"
          icon="📈"
        />

      </div>



      {/* MAIN GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">



        {/* LEFT */}



        <div className="xl:col-span-2 space-y-5">



          {/* INTERACTIVE GRAPH */}



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

                +18% Growth

              </div>

            </div>



            <div className="h-[260px] rounded-2xl bg-[#0B1120] border border-white/5 p-4">

              <ResponsiveContainer width="100%" height="100%">

                <AreaChart data={revenueTrend}>

                  <defs>

                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />

                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />

                    </linearGradient>

                  </defs>



                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                  />



                  <XAxis
                    dataKey="month"
                    tick={{
                      fill: "#94A3B8",
                      fontSize: 11
                    }}
                    axisLine={false}
                    tickLine={false}
                  />



                  <Tooltip
                    contentStyle={{
                      background: "#020617",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      color: "white"
                    }}
                  />



                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </GlassCard>



          {/* INVOICES */}



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

                {unpaidInvoices.map((invoice, index) => (

                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition"
                  >

                    <td className="py-4 text-sm">

                      {invoice.invoice}

                    </td>



                    <td className="py-4 text-sm">

                      {invoice.company}

                    </td>



                    <td className="py-4 text-red-400 text-sm">

                      {invoice.due}

                    </td>



                    <td className="py-4 text-sm">

                      {invoice.amount}

                    </td>



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



        {/* RIGHT */}



        <div className="space-y-5">



          {/* EXPIRING CLIENTS */}



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

              {expiringClients.map((client, index) => (

                <div
                  key={index}
                  className="bg-white/[0.04] border border-white/5 rounded-xl p-4 hover:border-red-500/20 transition"
                >

                  <div className="flex items-center justify-between mb-2">

                    <h3 className="font-medium text-sm">

                      {client.company}

                    </h3>



                    <span className="text-red-400 text-[10px]">

                      {client.expiry}

                    </span>

                  </div>



                  <p className="text-[11px] text-gray-400 mb-3">

                    {client.branch}

                  </p>



                  <div className="flex items-center justify-between">

                    <p className="text-sm text-white">

                      {client.amount}

                    </p>



                    <button className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] hover:bg-red-500/15 transition">

                      Renew

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </GlassCard>



          {/* METRICS */}



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

                {
                  label: "Highest Risk Branch",
                  value: "Himayathnagar"
                },

                {
                  label: "Most Overdue",
                  value: "NovaEdge"
                },

                {
                  label: "Collection Efficiency",
                  value: "91%"
                },

                {
                  label: "Revenue Recovery",
                  value: "₹4.8L"
                }

              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-white/[0.04] border border-white/5 rounded-xl p-4 hover:border-white/10 transition"
                >

                  <p className="text-xs text-gray-400">

                    {item.label}

                  </p>



                  <p className="text-sm text-white font-medium">

                    {item.value}

                  </p>

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