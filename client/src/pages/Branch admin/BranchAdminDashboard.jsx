
import GlassCard from "../../components/ui/GlassCard";
import KPIStatCard from "../../components/cards/KPIStatCard";

const BranchAdminDashboard = () => {
   const activities = [

    {
      title: "Client Onboarded",
      description: "TechNova assigned to Desk A12",
      time: "09:15 AM"
    },

    {
      title: "Meeting Room Booked",
      description: "Room 2 reserved by ScaleX",
      time: "10:20 AM"
    },

    {
      title: "Renewal Reminder Sent",
      description: "CloudMint contract expires in 5 days",
      time: "11:00 AM"
    },

    {
      title: "Invoice Generated",
      description: "Invoice #INV-2104 sent",
      time: "11:45 AM"
    }

  ];


  const expiringClients = [

    {
      company: "CloudMint",
      days: "5 Days Left",
      amount: "₹62K"
    },

    {
      company: "ScaleX",
      days: "2 Days Left",
      amount: "₹84K"
    }

  ];


  const visitors = [

    {
      name: "Rahul Sharma",
      host: "TechNova"
    },

    {
      name: "Priya Nair",
      host: "CloudMint"
    },

    {
      name: "Vikram Rao",
      host: "ScaleX"
    }

  ];


  return (

    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6 mt-15">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-emerald-400 text-[11px] tracking-[0.25em] uppercase mb-2">

            Branch Operations

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Madhapur Workspace Dashboard

          </h1>

          <p className="text-gray-400 text-sm">

            Manage workspace operations, onboarding,
            bookings and client renewals.

          </p>

        </div>



        <div className="flex items-center gap-3">

          <button className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm">

            + New Booking

          </button>


          <button className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm">

            Export Report

          </button>

        </div>

      </div>



      {/* KPI SECTION */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        <KPIStatCard
          title="Occupancy"
          value="91%"
          growth="+4.2% this week"
          color="green"
          icon="🏢"
        />

        <KPIStatCard
          title="Active Clients"
          value="58"
          growth="+12 onboarded"
          color="blue"
          icon="👥"
        />

        <KPIStatCard
          title="Renewals Due"
          value="12"
          growth="Needs attention"
          color="red"
          icon="⚠️"
        />

        <KPIStatCard
          title="Revenue"
          value="₹9.4L"
          growth="+18.4% growth"
          color="purple"
          icon="💰"
        />

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">

        {/* LEFT */}

        <div className="xl:col-span-2 space-y-5">

          {/* WORKSPACE SCHEDULE */}

          <GlassCard className="p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="text-lg font-semibold mb-1">

                  Workspace Schedule

                </h2>

                <p className="text-gray-400 text-sm">

                  Today's room bookings & operations

                </p>

              </div>


              <button className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm">

                Quick Allocate

              </button>

            </div>



            {/* SCHEDULE */}

            <div className="relative h-[320px] rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">

              <div className="grid grid-cols-6 h-full">

                {/* LABELS */}

                <div className="border-r border-white/5">

                  {["Room 1", "Room 2", "Desk Area"].map((item, index) => (

                    <div
                      key={index}
                      className="h-1/3 border-b border-white/5 flex items-center justify-center text-sm text-gray-400"
                    >

                      {item}

                    </div>

                  ))}

                </div>



                {/* DAYS */}

                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (

                  <div
                    key={index}
                    className="border-r border-white/5"
                  >

                    <div className="h-12 border-b border-white/5 flex items-center justify-center text-xs text-gray-500">

                      {day}

                    </div>

                  </div>

                ))}

              </div>



              {/* BOOKINGS */}

              {[
                {
                  title: "Investor Call",
                  position: "top-16 left-40"
                },

                {
                  title: "Client Demo",
                  position: "top-24 left-[260px]"
                },

                {
                  title: "Design Sprint",
                  position: "top-36 left-[420px]"
                }

              ].map((booking, index) => (

                <div
                  key={index}
                  className={`absolute ${booking.position} w-36 rounded-xl bg-emerald-500/10 border border-emerald-500/10 p-3`}
                >

                  <h3 className="text-xs font-medium text-emerald-400 mb-1">

                    {booking.title}

                  </h3>

                  <p className="text-[10px] text-gray-400">

                    Workspace Booking

                  </p>

                </div>

              ))}

            </div>

          </GlassCard>



          {/* ACTIVITY FEED */}

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
                  key={index}
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

            </div>

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

                Renewal monitoring

              </p>

            </div>



            <div className="space-y-4">

              {expiringClients.map((client, index) => (

                <div
                  key={index}
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <div className="flex items-center justify-between mb-2">

                    <h3 className="text-sm font-medium">

                      {client.company}

                    </h3>

                    <span className="text-red-400 text-xs">

                      {client.days}

                    </span>

                  </div>


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



          {/* TODAY'S VISITORS */}

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

              {visitors.map((visitor, index) => (

                <div
                  key={index}
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

                    Checked In

                  </span>

                </div>

              ))}

            </div>

          </GlassCard>

        </div>

      </div>

    </div>

  )
}

export default BranchAdminDashboard