import { useState }
from "react";

import GlassCard
from "../../components/ui/GlassCard";

import {
  useApp
}
from "../../context/AppContext";

function ClientOnboarding() {

  const {
    leads,
    activities,
    notifications
  } = useApp();


  const [assignedSeats, setAssignedSeats] =
    useState({});


  const seats = [

    "Desk A12",
    "Desk B07",
    "Desk C04",
    "Cabin D02",
    "Desk E18"

  ];


  const convertedLeads =
    leads.converted || [];


  const handleAssign = (
    company,
    seat
  ) => {

    setAssignedSeats((prev) => ({
      ...prev,
      [company]: seat
    }));

  };


  return (

    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-emerald-400 text-[11px] tracking-[0.25em] uppercase mb-2">

            Client Operations

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Client Onboarding Workflow

          </h1>

          <p className="text-gray-400 text-sm">

            Convert approved leads into active workspace clients.

          </p>

        </div>



        <button className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-sm w-fit">

          Export Client List

        </button>

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* LEFT */}

        <div className="xl:col-span-2">

          <GlassCard className="p-5">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Converted Leads

              </h2>

              <p className="text-gray-400 text-sm">

                Workspace assignment & onboarding activation

              </p>

            </div>



            <div className="space-y-5">

              {convertedLeads.length === 0 && (

                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">

                  <p className="text-gray-400 text-sm">

                    No converted leads available.

                  </p>

                </div>

              )}



              {convertedLeads.map((lead) => (

                <div
                  key={lead.id}
                  className="bg-white/5 border border-white/5 rounded-2xl p-5"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* CLIENT INFO */}

                    <div>

                      <h3 className="text-lg font-semibold mb-2">

                        {lead.company}

                      </h3>

                      <p className="text-sm text-gray-400 mb-1">

                        Contact: {lead.contact}

                      </p>

                      <p className="text-sm text-cyan-400">

                        Estimated Value: {lead.value}

                      </p>

                    </div>



                    {/* WORKSPACE ASSIGN */}

                    <div className="flex flex-col gap-3 min-w-[220px]">

                      <select
                        onChange={(e) =>
                          handleAssign(
                            lead.company,
                            e.target.value
                          )
                        }
                        className="bg-[#0B1120] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
                      >

                        <option>

                          Select Workspace

                        </option>

                        {seats.map((seat, index) => (

                          <option
                            key={index}
                            value={seat}
                          >

                            {seat}

                          </option>

                        ))}

                      </select>



                      {assignedSeats[lead.company] && (

                        <div className="bg-emerald-500/10 border border-emerald-500/10 rounded-xl p-3">

                          <p className="text-xs text-emerald-400 mb-1">

                            Workspace Assigned

                          </p>

                          <p className="text-sm font-medium">

                            {assignedSeats[lead.company]}

                          </p>

                        </div>

                      )}

                    </div>

                  </div>



                  {/* WORKFLOW STATUS */}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">

                    {[
                      "Client Approved",
                      "Workspace Assigned",
                      "Invoice Generated",
                      "Portal Activated"
                    ].map((step, index) => (

                      <div
                        key={index}
                        className="bg-[#0B1120] border border-white/5 rounded-xl p-4 text-center"
                      >

                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center mx-auto mb-3 text-emerald-400 text-xs">

                          ?

                        </div>

                        <p className="text-xs text-gray-300">

                          {step}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </GlassCard>

        </div>



        {/* RIGHT */}

        <div className="space-y-5">

          {/* LIVE NOTIFICATIONS */}

          <GlassCard className="p-5">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Smart Notifications

              </h2>

              <p className="text-gray-400 text-sm">

                Automated operational alerts

              </p>

            </div>



            <div className="space-y-4">

              {notifications.map((notification) => (

                <div
                  key={notification.id}
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <p className="text-sm text-gray-300">

                    {notification.message}

                  </p>

                </div>

              ))}

            </div>

          </GlassCard>



          {/* ACTIVITY FEED */}

          <GlassCard className="p-5">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Live Activity Feed

              </h2>

              <p className="text-gray-400 text-sm">

                Real-time onboarding actions

              </p>

            </div>



            <div className="space-y-4">

              {activities.map((activity, index) => (

                <div
                  key={index}
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <div className="flex items-start justify-between mb-2">

                    <h3 className="text-sm font-medium">

                      {activity.title}

                    </h3>

                    <span className="text-[10px] text-gray-500">

                      {activity.time}

                    </span>

                  </div>

                  <p className="text-xs text-gray-400">

                    {activity.description}

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

export default ClientOnboarding;
