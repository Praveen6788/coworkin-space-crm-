import GlassCard from "../../components/ui/GlassCard";
import KPIStatCard from "../../components/cards/KPIStatCard";

function FinanceOverview() {

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

    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-red-400 text-[11px] tracking-[0.25em] uppercase mb-2">

            Finance Intelligence

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Revenue Leakage Monitoring

          </h1>

          <p className="text-gray-400 text-sm">

            Identify revenue risks, unpaid invoices,
            expiring contracts and operational financial leakage.

          </p>

        </div>



        <button className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/10 text-red-400 text-sm w-fit">

          Export Finance Report

        </button>

      </div>



      {/* KPI SECTION */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

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

          {/* REVENUE RISK */}

          <GlassCard className="p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="text-lg font-semibold mb-1">

                  Revenue Risk Overview

                </h2>

                <p className="text-gray-400 text-sm">

                  Branch-wise financial risk distribution

                </p>

              </div>


              <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/10 text-red-400 text-xs">

                High Attention

              </div>

            </div>



            {/* CHART */}

            <div className="relative h-[260px] rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden p-5">

              {/* GRID */}

              <div className="absolute inset-0 opacity-20">

                {[...Array(6)].map((_, i) => (

                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-red-500/10"
                    style={{
                      top: `${i * 20}%`
                    }}
                  />

                ))}

              </div>



              {/* BARS */}

              <div className="absolute inset-0 flex items-end justify-around px-10 pb-10">

                {[
                  {
                    branch: "Madhapur",
                    value: "70%"
                  },

                  {
                    branch: "Gachibowli",
                    value: "55%"
                  },

                  {
                    branch: "KPHB",
                    value: "82%"
                  },

                  {
                    branch: "Kondapur",
                    value: "48%"
                  },

                  {
                    branch: "HN",
                    value: "91%"
                  }

                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex flex-col items-center gap-3"
                  >

                    <div
                      className="w-14 rounded-t-xl bg-gradient-to-t from-red-500 to-orange-400"
                      style={{
                        height: item.value
                      }}
                    ></div>

                    <p className="text-xs text-gray-400">

                      {item.branch}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </GlassCard>



          {/* UNPAID INVOICES */}

          <GlassCard className="p-5 overflow-x-auto">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Unpaid Invoices

              </h2>

              <p className="text-gray-400 text-sm">

                Pending payment tracking

              </p>

            </div>



            <table className="w-full min-w-[700px]">

              <thead>

                <tr className="border-b border-white/5 text-left text-gray-400 text-sm">

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
                    className="border-b border-white/5"
                  >

                    <td className="py-3">
                      {invoice.invoice}
                    </td>

                    <td className="py-3">
                      {invoice.company}
                    </td>

                    <td className="py-3 text-red-400">
                      {invoice.due}
                    </td>

                    <td className="py-3">
                      {invoice.amount}
                    </td>

                    <td className="py-3">

                      <button className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/10 text-red-400 text-xs">

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

              <h2 className="text-lg font-semibold mb-1">

                Expiring Clients

              </h2>

              <p className="text-gray-400 text-sm">

                Contracts nearing expiry

              </p>

            </div>



            <div className="space-y-4">

              {expiringClients.map((client, index) => (

                <div
                  key={index}
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <div className="flex items-center justify-between mb-2">

                    <h3 className="font-medium text-sm">

                      {client.company}

                    </h3>

                    <span className="text-red-400 text-xs">

                      {client.expiry}

                    </span>

                  </div>


                  <p className="text-xs text-gray-400 mb-3">

                    {client.branch}

                  </p>


                  <div className="flex items-center justify-between">

                    <p className="text-sm text-white">

                      {client.amount}

                    </p>

                    <button className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/10 text-red-400 text-xs">

                      Renew

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </GlassCard>



          {/* HIGHLIGHT METRICS */}

          <GlassCard className="p-5">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Highlight Metrics

              </h2>

              <p className="text-gray-400 text-sm">

                Financial risk indicators

              </p>

            </div>



            <div className="space-y-4">

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
                  className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <p className="text-sm text-gray-400">

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