function AdminHome() {

  const alerts = [

    {
      title: "5 Payments Pending",
      desc: "Invoice clearance pending for finance approvals.",
      color: "red",
      icon: "⚠️",
    },

    {
      title: "3 Move-ins Scheduled",
      desc: "Workspace onboarding approvals pending today.",
      color: "amber",
      icon: "🏢",
    },

    {
      title: "8 New Leads Added",
      desc: "Fresh enquiries from Madhapur & Gachibowli.",
      color: "sky",
      icon: "📈",
    },

  ];



  const notifications = [

    {
      title: "Payment Received",
      desc: "₹70,000 payment completed successfully.",
      time: "5 mins ago",
      dot: "bg-emerald-400",
    },

    {
      title: "New Lead Added",
      desc: "Private Cabin enquiry from Rahul Sharma.",
      time: "18 mins ago",
      dot: "bg-sky-400",
    },

    {
      title: "Invoice Generated",
      desc: "Invoice INV-2039 sent to StartupX Labs.",
      time: "1 hour ago",
      dot: "bg-violet-400",
    },

  ];



  const metrics = [

    {
      label: "Revenue",
      value: "₹18.4L",
      growth: "+12%",
      color: "text-emerald-400",
    },

    {
      label: "Occupancy",
      value: "91%",
      growth: "+4%",
      color: "text-sky-400",
    },

    {
      label: "Active Leads",
      value: "128",
      growth: "+18%",
      color: "text-orange-400",
    },

    {
      label: "Pending Payments",
      value: "18",
      growth: "-2%",
      color: "text-red-400",
    },

  ];



  return (

    <div className="min-h-screen bg-[#020617] px-5 sm:px-6 lg:px-8 py-6 mt-14 text-white">



      {/* HERO */}



      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-violet-500/5 to-emerald-500/10 p-6 sm:p-8 mb-6">

        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full"></div>



        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">



          {/* LEFT */}



          <div>

            <p className="text-sky-400 text-[10px] uppercase tracking-[0.28em] mb-3">

              Admin Dashboard

            </p>



            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">

              Welcome back,
              <span className="text-sky-400"> Admin</span>

            </h1>



            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">

              Monitor branch operations,
              revenue insights, alerts,
              onboarding workflows and
              workspace activities from
              one centralized dashboard.

            </p>

          </div>



          {/* RIGHT */}



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



        {/* ALERTS */}



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



            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">

              ⚠️

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {alerts.map((alert, index) => (

              <div
                key={index}
                className={`
                  rounded-2xl
                  p-4
                  border
                  transition-all duration-300
                  hover:-translate-y-1

                  ${alert.color === "red" && "bg-red-500/10 border-red-500/20"}
                  ${alert.color === "amber" && "bg-amber-500/10 border-amber-500/20"}
                  ${alert.color === "sky" && "bg-sky-500/10 border-sky-500/20"}
                `}
              >

                <div className="flex items-center justify-between mb-4">

                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm">

                    {alert.icon}

                  </div>



                  <span className="text-[10px] text-white/60">

                    Active

                  </span>

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



          {/* MINI GRAPH */}



          <div className="mt-6 bg-[#020617] border border-white/5 rounded-2xl p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h3 className="text-sm font-semibold mb-1">

                  Revenue Activity

                </h3>



                <p className="text-slate-500 text-xs">

                  Last 6 months collection trend

                </p>

              </div>



              <span className="text-emerald-400 text-xs">

                +18.4%

              </span>

            </div>



            <div className="flex items-end justify-between gap-3 h-[180px]">

              {[
                "35%",
                "48%",
                "41%",
                "68%",
                "72%",
                "91%",
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
                      via-blue-400
                      to-cyan-300

                      hover:opacity-80
                      transition
                    "
                    style={{
                      height,
                    }}
                  ></div>



                  <p className="text-[10px] text-slate-500">

                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* NOTIFICATIONS */}



        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-5">



          <div className="flex items-center justify-between mb-6">

            <div>

              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">

                Notification Center

              </p>



              <h2 className="text-xl font-semibold">

                Recent Updates

              </h2>

            </div>



            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">

              🔔

            </div>

          </div>



          <div className="space-y-4">

            {notifications.map((item, index) => (

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



          {/* QUICK STATUS */}



          <div className="mt-6 bg-[#020617] border border-white/5 rounded-2xl p-4">

            <div className="flex items-center justify-between mb-4">

              <h3 className="text-sm font-semibold">

                Quick Status

              </h3>



              <span className="text-emerald-400 text-[10px]">

                Stable

              </span>

            </div>



            <div className="space-y-3">

              {[

                ["Workspace Occupancy", "91%"],

                ["Collection Efficiency", "94%"],

                ["Branch Activity", "High"],

              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between"
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



export default AdminHome;