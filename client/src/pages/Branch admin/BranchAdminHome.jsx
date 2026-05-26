function BranchAdminHome() {

  return (

    <div className="min-h-screen bg-[#020617] p-6 lg:p-8 mt-15">



      {/* HEADER */}



      <div className="mb-10">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          Branch Dashboard

        </p>



        <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-4">

          Hi Branch Admin 👋

        </h1>



        <p className="text-slate-400 text-lg">

          Monitor branch operations,
          workspace bookings and
          daily activity updates.

        </p>

      </div>



      {/* GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">



        {/* ALERTS */}



        <div className="xl:col-span-2 bg-[#0F172A] border border-white/10 rounded-[32px] p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-slate-500 text-[11px] uppercase tracking-[0.18em] mb-2">

                Branch Alerts

              </p>



              <h2 className="text-3xl font-semibold text-white">

                Daily Operations

              </h2>

            </div>



            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl">

              ⚠

            </div>

          </div>



          <div className="space-y-4">



            <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl p-5">

              <h3 className="text-sky-300 font-semibold mb-2">

                6 New Workspace Enquiries

              </h3>



              <p className="text-slate-300 text-sm">

                New private cabin and
                hot desk enquiries received
                today.

              </p>

            </div>



            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">

              <h3 className="text-amber-300 font-semibold mb-2">

                Meeting Rooms Fully Booked

              </h3>



              <p className="text-slate-300 text-sm">

                Meeting rooms occupancy
                reached maximum capacity
                for today.

              </p>

            </div>



            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">

              <h3 className="text-emerald-300 font-semibold mb-2">

                2 Move-ins Approved

              </h3>



              <p className="text-slate-300 text-sm">

                Client access approved for
                newly confirmed workspace
                bookings.

              </p>

            </div>

          </div>

        </div>



        {/* NOTIFICATIONS */}



        <div className="bg-[#0F172A] border border-white/10 rounded-[32px] p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-slate-500 text-[11px] uppercase tracking-[0.18em] mb-2">

                Notification Center

              </p>



              <h2 className="text-2xl font-semibold text-white">

                Recent Activity

              </h2>

            </div>



            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 text-xl">

              🔔

            </div>

          </div>



          <div className="space-y-5">



            <div className="flex items-start gap-4">

              <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2" />



              <div>

                <h3 className="text-white font-medium mb-1">

                  Booking Confirmed

                </h3>



                <p className="text-slate-500 text-sm">

                  Private Cabin booking
                  confirmed successfully.

                </p>



                <span className="text-slate-600 text-xs">

                  10 mins ago

                </span>

              </div>

            </div>



            <div className="flex items-start gap-4">

              <div className="w-3 h-3 rounded-full bg-sky-400 mt-2" />



              <div>

                <h3 className="text-white font-medium mb-1">

                  New Lead Assigned

                </h3>



                <p className="text-slate-500 text-sm">

                  New enquiry assigned to
                  Madhapur branch.

                </p>



                <span className="text-slate-600 text-xs">

                  22 mins ago

                </span>

              </div>

            </div>



            <div className="flex items-start gap-4">

              <div className="w-3 h-3 rounded-full bg-violet-400 mt-2" />



              <div>

                <h3 className="text-white font-medium mb-1">

                  Invoice Generated

                </h3>



                <p className="text-slate-500 text-sm">

                  Invoice shared with
                  StartupX Labs.

                </p>



                <span className="text-slate-600 text-xs">

                  1 hour ago

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BranchAdminHome;