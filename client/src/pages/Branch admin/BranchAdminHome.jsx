function BranchAdminHome() {

  const metrics = [

    {
      label: "Active Leads",
      value: "42",
      growth: "+12%",
      color: "text-sky-400",
    },

    {
      label: "Workspace Occupancy",
      value: "87%",
      growth: "+5%",
      color: "text-emerald-400",
    },

    {
      label: "Pending Payments",
      value: "9",
      growth: "-2%",
      color: "text-red-400",
    },

    {
      label: "Move-ins Today",
      value: "4",
      growth: "+1",
      color: "text-orange-400",
    },

  ];



  const tasks = [

    {
      title: "Approve Move-in Access",
      desc: "Workspace onboarding pending for 3 clients.",
      color: "border-orange-500/20 bg-orange-500/10",
      icon: "🏢",
    },

    {
      title: "Pending Invoice Collection",
      desc: "2 invoices require finance follow-up.",
      color: "border-red-500/20 bg-red-500/10",
      icon: "💳",
    },

    {
      title: "New Lead Assignment",
      desc: "Fresh enquiry received from Madhapur branch.",
      color: "border-sky-500/20 bg-sky-500/10",
      icon: "📈",
    },

  ];



  const activities = [

    {
      title: "New Lead Added",
      desc: "Private cabin enquiry submitted.",
      time: "5 mins ago",
      dot: "bg-sky-400",
    },

    {
      title: "Payment Approved",
      desc: "₹48,000 payment verified successfully.",
      time: "22 mins ago",
      dot: "bg-emerald-400",
    },

    {
      title: "Workspace Allocated",
      desc: "Dedicated desks assigned to StartupX.",
      time: "1 hour ago",
      dot: "bg-violet-400",
    },

  ];



  return (

    <div className="min-h-screen bg-[#020617] px-5 sm:px-6 lg:px-8 py-6 mt-14 text-white">



      {/* HERO */}



      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-emerald-500/10 p-6 sm:p-8 mb-6">

        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full"></div>



        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">



          {/* LEFT */}



          <div>

            <p className="text-sky-400 text-[10px] uppercase tracking-[0.28em] mb-3">

              Branch Operations

            </p>



            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">

              Welcome back,
              <span className="text-sky-400"> Branch Admin</span>

            </h1>



            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">

              Manage onboarding workflows,
              lead pipelines, workspace occupancy,
              billing operations and branch activity
              from one centralized dashboard.

            </p>

          </div>



          {/* RIGHT METRICS */}



          <div className="grid grid-cols-2 gap-3 w-full lg:w-[420px]">

            {metrics.map((item, index) => (

              <div
                key={index}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
              >

                <p className="text-slate-500 text-[11px] mb-2">

                  {item.label}

                </p>



                <div className="flex items-end justify-between">

                  <h3 className="text-2xl font-semibold">

                    {item.value}

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



      {/* MAIN GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">



        {/* LEFT */}



        <div className="xl:col-span-2 space-y-5">



          {/* TASKS */}



          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">

                  Branch Tasks

                </p>



                <h2 className="text-2xl font-semibold">

                  Priority Actions

                </h2>

              </div>



              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">

                📋

              </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {tasks.map((task, index) => (

                <div
                  key={index}
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



            {/* OCCUPANCY GRAPH */}



            <div className="mt-6 bg-[#020617] border border-white/5 rounded-2xl p-5">

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h3 className="text-sm font-semibold mb-1">

                    Workspace Occupancy

                  </h3>



                  <p className="text-slate-500 text-xs">

                    Weekly occupancy performance

                  </p>

                </div>



                <span className="text-emerald-400 text-xs">

                  +6.2%

                </span>

              </div>



              <div className="flex items-end justify-between gap-3 h-[180px]">

                {[
                  "45%",
                  "58%",
                  "72%",
                  "64%",
                  "80%",
                  "92%",
                ].map((height, index) => (

                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center justify-end gap-3"
                  >

                    <div
                      className="
                        w-full
                        rounded-t-xl

                        bg-gradient-to-t
                        from-sky-500
                        via-cyan-400
                        to-emerald-300

                        hover:opacity-80
                        transition
                      "
                      style={{
                        height,
                      }}
                    ></div>



                    <p className="text-[10px] text-slate-500">

                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>



        {/* RIGHT */}



        <div className="space-y-5">



          {/* RECENT ACTIVITY */}



          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">

                  Activity Feed

                </p>



                <h2 className="text-xl font-semibold">

                  Recent Activity

                </h2>

              </div>



              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">

                🔔

              </div>

            </div>



            <div className="space-y-4">

              {activities.map((item, index) => (

                <div
                  key={index}
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

            </div>

          </div>



          {/* QUICK STATUS */}



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

                ["Occupancy Rate", "87%"],

                ["Workspace Availability", "24 Seats"],

                ["Pending Renewals", "6"],

                ["Active Bookings", "128"],

              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-4"
                >

                  <p className="text-xs text-slate-500">

                    {item[0]}

                  </p>



                  <p className="text-xs text-white font-medium">

                    {item[1]}

                  </p>

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