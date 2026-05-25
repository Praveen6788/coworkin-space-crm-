import GlassCard
from "../../components/ui/GlassCard";

import {
  useApp
}
from "../../context/AppContext";

function LeadsPipeline() {

  const {
    leads,
    moveLead,
    notifications,
    activities
  } = useApp();


  const stages = [

    {
      title: "New Leads",
      key: "new",
      color: "cyan"
    },

    {
      title: "Contacted",
      key: "contacted",
      color: "yellow"
    },

    {
      title: "Proposal Sent",
      key: "proposal",
      color: "purple"
    },

    {
      title: "Converted",
      key: "converted",
      color: "green"
    }

  ];


  return (

    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase mb-2">

            CRM PIPELINE

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Interactive Lead Workflow

          </h1>

          <p className="text-gray-400 text-sm">

            Track and automate coworking lead lifecycle operations.

          </p>

        </div>



        <div className="flex items-center gap-3">

          <button className="px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-sm">

            + Add Lead

          </button>


          <button className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm">

            Export Pipeline

          </button>

        </div>

      </div>



      {/* KPI ROW */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        <GlassCard className="p-5">

          <p className="text-sm text-gray-400 mb-2">

            Total Leads

          </p>

          <h2 className="text-3xl font-semibold text-white mb-3">

            {
              leads.new.length +
              leads.contacted.length +
              leads.proposal.length +
              leads.converted.length
            }

          </h2>

          <p className="text-cyan-400 text-sm">

            Live pipeline tracking

          </p>

        </GlassCard>



        <GlassCard className="p-5">

          <p className="text-sm text-gray-400 mb-2">

            Conversion Rate

          </p>

          <h2 className="text-3xl font-semibold text-white mb-3">

            38%

          </h2>

          <p className="text-emerald-400 text-sm">

            +8.2% this month

          </p>

        </GlassCard>



        <GlassCard className="p-5">

          <p className="text-sm text-gray-400 mb-2">

            Active Proposals

          </p>

          <h2 className="text-3xl font-semibold text-white mb-3">

            {leads.proposal.length}

          </h2>

          <p className="text-purple-400 text-sm">

            Awaiting approval

          </p>

        </GlassCard>



        <GlassCard className="p-5">

          <p className="text-sm text-gray-400 mb-2">

            Converted Clients

          </p>

          <h2 className="text-3xl font-semibold text-white mb-3">

            {leads.converted.length}

          </h2>

          <p className="text-emerald-400 text-sm">

            Ready for onboarding

          </p>

        </GlassCard>

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-6">

        {/* PIPELINE */}

        <div className="xl:col-span-3">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {stages.map((stage) => (

              <GlassCard
                key={stage.key}
                className="p-5"
              >

                {/* HEADER */}

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h2 className="font-semibold mb-1">

                      {stage.title}

                    </h2>

                    <p className="text-xs text-gray-400">

                      {leads[stage.key].length} Leads

                    </p>

                  </div>



                  <div
                    className={`
                      w-3 h-3 rounded-full

                      ${stage.color === "cyan" && "bg-cyan-400"}
                      ${stage.color === "yellow" && "bg-yellow-400"}
                      ${stage.color === "purple" && "bg-purple-400"}
                      ${stage.color === "green" && "bg-emerald-400"}
                    `}
                  />

                </div>



                {/* LEAD CARDS */}

                <div className="space-y-4">

                  {leads[stage.key].map(
                    (lead) => (

                      <div
                        key={lead.id}
                        className="bg-white/5 border border-white/5 rounded-2xl p-4"
                      >

                        <div className="flex items-center justify-between mb-3">

                          <h3 className="font-medium text-sm">

                            {lead.company}

                          </h3>

                          <span className="text-cyan-400 text-xs">

                            {lead.value}

                          </span>

                        </div>



                        <p className="text-xs text-gray-400 mb-5">

                          {lead.contact}

                        </p>



                        <div className="flex items-center gap-2">

                          <button className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">

                            Details

                          </button>



                          {stage.key !== "converted" && (

                            <button
                              onClick={() =>
                                moveLead(
                                  lead.id,
                                  stage.key
                                )
                              }
                              className="flex-1 px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-xs"
                            >

                              Move

                            </button>

                          )}

                        </div>

                      </div>

                    )
                  )}

                </div>

              </GlassCard>

            ))}

          </div>

        </div>



        {/* RIGHT SIDEBAR */}

        <div className="space-y-5">

          {/* NOTIFICATIONS */}

          <GlassCard className="p-5">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Smart Alerts

              </h2>

              <p className="text-gray-400 text-sm">

                Automated workflow notifications

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

                Activity Feed

              </h2>

              <p className="text-gray-400 text-sm">

                Live pipeline operations

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



      {/* AUTOMATION FLOW */}

      <GlassCard className="p-5">

        <div className="mb-6">

          <h2 className="text-lg font-semibold mb-1">

            Automated Workflow Engine

          </h2>

          <p className="text-gray-400 text-sm">

            Connected coworking operational lifecycle.

          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {[
            "Lead Created",
            "Proposal Sent",
            "Client Approved",
            "Workspace Assigned",
            "Invoice Generated"
          ].map((step, index) => (

            <div
              key={index}
              className="relative bg-white/5 border border-white/5 rounded-2xl p-5 text-center"
            >

              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center mx-auto mb-4 text-cyan-400">

                ✓

              </div>

              <h3 className="text-sm font-medium">

                {step}

              </h3>



              {index !== 4 && (

                <div className="hidden md:block absolute top-1/2 -right-5 w-10 border-t border-dashed border-cyan-500/20"></div>

              )}

            </div>

          ))}

        </div>

      </GlassCard>

    </div>

  );
}

export default LeadsPipeline;