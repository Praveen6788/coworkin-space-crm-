import KPIStatCard from "../../components/cards/KPIStatCard";
import GlassCard from "../../components/ui/GlassCard";

import {
  branches
} from "../../data/branches";

function Dashboard() {

  return (

    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6">

      {/* HEADER */}

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



      {/* KPI GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        <KPIStatCard
          title="Revenue"
          value="₹35.3L"
          growth="+12.4%"
          color="green"
          icon="💰"
        />

        <KPIStatCard
          title="Occupancy"
          value="81%"
          growth="+6.2%"
          color="blue"
          icon="📊"
        />

        <KPIStatCard
          title="Clients"
          value="226"
          growth="+18 this week"
          color="purple"
          icon="👥"
        />

        <KPIStatCard
          title="Alerts"
          value="12"
          growth="Needs Attention"
          color="red"
          icon="🚨"
        />

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">

        {/* ANALYTICS */}

        <GlassCard className="xl:col-span-2 p-5">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-lg font-semibold mb-1">

                Revenue Analytics

              </h2>

              <p className="text-gray-400 text-sm">

                

              </p>

            </div>


            <div className="flex gap-2">

              <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs">

                Monthly

              </button>

              <button className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-xs">

                Weekly

              </button>

            </div>

          </div>



          {/* GRAPH */}

        <div className="relative h-[280px] rounded-2xl border border-white/5 bg-[#020617] overflow-hidden p-6">

  {/* GRID LINES */}

  <div className="absolute inset-0 opacity-20">

    {[...Array(6)].map((_, i) => (

      <div
        key={i}
        className="absolute left-0 right-0 border-t border-cyan-500/10"
        style={{
          top: `${i * 20}%`
        }}
      />

    ))}

  </div>



  {/* LEFT LABELS */}

  <div className="absolute left-4 top-6 bottom-6 flex flex-col justify-between text-[10px] text-gray-500 z-10">

    <span>₹40L</span>
    <span>₹30L</span>
    <span>₹20L</span>
    <span>₹10L</span>
    <span>₹0</span>

  </div>



  {/* BOTTOM MONTHS */}

  <div className="absolute bottom-3 left-16 right-6 flex justify-between text-[10px] text-gray-500 z-10">

    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
    <span>Jul</span>

  </div>



  {/* SVG CHART */}

  <svg
    viewBox="0 0 700 300"
    className="absolute inset-0 w-full h-full"
  >

    {/* AREA GLOW */}

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
          stopOpacity="0.4"
        />

        <stop
          offset="100%"
          stopColor="#00F5D4"
          stopOpacity="0"
        />

      </linearGradient>

    </defs>



    {/* AREA */}

    <path
      d="
      M70 240
      C130 210 160 200 220 170
      C280 140 320 150 380 110
      C440 70 500 120 560 80
      C610 50 650 60 680 40
      L680 300
      L70 300
      Z
      "
      fill="url(#revenueGradient)"
    />



    {/* MAIN LINE */}

    <path
      d="
      M70 240
      C130 210 160 200 220 170
      C280 140 320 150 380 110
      C440 70 500 120 560 80
      C610 50 650 60 680 40
      "
      fill="none"
      stroke="#00F5D4"
      strokeWidth="4"
      strokeLinecap="round"
    />



    {/* SECONDARY LINE */}

    <path
      d="
      M70 260
      C130 230 180 220 240 190
      C300 170 350 180 420 140
      C470 110 530 160 590 120
      C630 100 660 110 680 90
      "
      fill="none"
      stroke="#4ADE80"
      strokeWidth="3"
      opacity="0.5"
      strokeLinecap="round"
    />



    {/* DATA POINTS */}

    {[
      [70, 240],
      [220, 170],
      [380, 110],
      [560, 80],
      [680, 40]
    ].map((point, index) => (

      <g key={index}>

        <circle
          cx={point[0]}
          cy={point[1]}
          r="6"
          fill="#00F5D4"
        />

        <circle
          cx={point[0]}
          cy={point[1]}
          r="14"
          fill="#00F5D4"
          opacity="0.15"
        />

      </g>

    ))}

  </svg>



  {/* TOP RIGHT METRIC */}

  <div className="absolute top-5 right-5 z-10">

    <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/10 backdrop-blur-xl">

      <p className="text-[10px] text-gray-400 mb-1">
        Revenue Growth
      </p>

      <h3 className="text-cyan-400 text-lg font-semibold">
        +18.4%
      </h3>

    </div>

  </div>

</div>

        </GlassCard>



        {/* QUICK ACTIONS */}

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
              "Branch Analytics",
              "Finance Overview",
              "Workspace Monitoring",
              "Client Renewals",
              "Notifications Center"
            ].map((item, index) => (

              <button
                key={index}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/10 transition text-sm"
              >

                {item}

                <span>→</span>

              </button>

            ))}

          </div>

        </GlassCard>

      </div>



      {/* BRANCH TABLE */}

      <GlassCard className="p-5 overflow-x-auto">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-lg font-semibold mb-1">

              Branch Performance

            </h2>

            <p className="text-gray-400 text-sm">

              Real-time operational metrics

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

            {branches.map((branch) => (

              <tr
                key={branch.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="py-4 font-medium">
                  {branch.name}
                </td>

                <td className="py-4">
                  {branch.occupancy}%
                </td>

                <td className="py-4 text-cyan-400">
                  {branch.revenue}
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

          </tbody>

        </table>

      </GlassCard>

    </div>
  );
}

export default Dashboard;