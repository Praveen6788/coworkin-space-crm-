function AdminHome() {

  return (

    <div className="min-h-screen bg-[#020617] p-6 lg:p-8 mt-15">



      {/* HEADER */}



      <div className="mb-10">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          Admin Dashboard

        </p>



        <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-4">

          Hi Admin 👋

        </h1>



        <p className="text-slate-400 text-lg">

          Check alerts, notifications and
          workspace operations updates.

        </p>

      </div>



      {/* GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">



        {/* ALERTS */}



        <div className="xl:col-span-2 bg-[#0F172A] border border-white/10 rounded-[32px] p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-slate-500 text-[11px] uppercase tracking-[0.18em] mb-2">

                Alerts Center

              </p>



              <h2 className="text-3xl font-semibold text-white">

                Important Alerts

              </h2>

            </div>



            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl">

              ⚠

            </div>

          </div>



          <div className="space-y-4">



            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">

              <h3 className="text-red-300 font-semibold mb-2">

                5 Payments Pending

              </h3>



              <p className="text-slate-300 text-sm">

                Clients are waiting for
                invoice clearance and payment
                approval.

              </p>

            </div>



            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">

              <h3 className="text-amber-300 font-semibold mb-2">

                3 Move-ins Scheduled Today

              </h3>



              <p className="text-slate-300 text-sm">

                Workspace access approvals
                pending for today’s bookings.

              </p>

            </div>



            <div className="bg-sky-500/10 border border-sky-500/20 rounded-2xl p-5">

              <h3 className="text-sky-300 font-semibold mb-2">

                8 New Leads Added

              </h3>



              <p className="text-slate-300 text-sm">

                Fresh enquiries received from
                Madhapur and Gachibowli branches.

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

                Recent Updates

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

                  Payment Received

                </h3>



                <p className="text-slate-500 text-sm">

                  ₹70,000 payment completed
                  successfully.

                </p>



                <span className="text-slate-600 text-xs">

                  5 mins ago

                </span>

              </div>

            </div>



            <div className="flex items-start gap-4">

              <div className="w-3 h-3 rounded-full bg-sky-400 mt-2" />



              <div>

                <h3 className="text-white font-medium mb-1">

                  New Lead Added

                </h3>



                <p className="text-slate-500 text-sm">

                  Private Cabin enquiry from
                  Rahul Sharma.

                </p>



                <span className="text-slate-600 text-xs">

                  18 mins ago

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

                  Invoice INV-2039 sent to
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

export default AdminHome;