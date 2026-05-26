import { useState } from "react";

import BranchSelector from "../../components/branchanalytics/BranchSelector";
import BranchMetricCards from "../../components/branchanalytics/BranchMetricCards";
import ResourceCalendar from "../../components/branchanalytics/ResourceCalendar";
import BranchMembersTable from "../../components/branchanalytics/BranchMembersTable";

import GlassCard from "../../components/ui/GlassCard";



const branchData = {

  Madhapur: {
    manager: "Rahul Verma",
    occupancy: "91%",
    renewals: 12,
    tickets: 4,
    roomUsage: "82%",
    team: 14
  },

  Gachibowli: {
    manager: "Sneha Reddy",
    occupancy: "86%",
    renewals: 8,
    tickets: 2,
    roomUsage: "78%",
    team: 10
  },

  KPHB: {
    manager: "Kiran Kumar",
    occupancy: "72%",
    renewals: 16,
    tickets: 7,
    roomUsage: "68%",
    team: 9
  },

  Kondapur: {
    manager: "Ananya Rao",
    occupancy: "88%",
    renewals: 5,
    tickets: 1,
    roomUsage: "81%",
    team: 11
  },

  Himayathnagar: {
    manager: "Vikram Joshi",
    occupancy: "63%",
    renewals: 19,
    tickets: 9,
    roomUsage: "59%",
    team: 7
  }

};



function BranchAnalytics() {

  const [selectedBranch, setSelectedBranch] =
    useState("Madhapur");



  const currentBranch =
    branchData[selectedBranch];



  return (

    <div className="min-h-screen bg-[#020617] text-white py-4 mt-14">



      <div className="max-w-[1500px] mx-auto px-4">



        {/* HERO */}



        <div
          className="
            relative
            overflow-hidden

            rounded-2xl

            border border-white/10

            bg-gradient-to-br
            from-cyan-500/10
            via-blue-500/5
            to-emerald-500/10

            p-4 lg:p-5

            mb-3
          "
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>



          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">



            {/* LEFT */}



            <div className="max-w-2xl">

              <p className="text-cyan-400 text-[10px] uppercase tracking-[0.28em] mb-2">

                Workspace Intelligence

              </p>



              <h1 className="text-3xl sm:text-4xl font-semibold mb-3 leading-tight">

                Branch Analytics

              </h1>



              <p className="text-slate-400 text-sm leading-relaxed">

                Monitor occupancy,
                workspace utilization,
                renewals and operational
                performance in real time.

              </p>

            </div>



            {/* HERO METRICS */}



            <div className="grid grid-cols-2 gap-2 w-full xl:w-[400px]">

              {[

                {
                  label: "Occupancy",
                  value: currentBranch.occupancy,
                  color: "text-emerald-400"
                },

                {
                  label: "Team",
                  value: currentBranch.team,
                  color: "text-cyan-400"
                },

                {
                  label: "Renewals",
                  value: currentBranch.renewals,
                  color: "text-orange-400"
                },

                {
                  label: "Tickets",
                  value: currentBranch.tickets,
                  color: "text-red-400"
                }

              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white/[0.04]
                    border border-white/10

                    rounded-xl

                    px-3 py-2.5

                    backdrop-blur-xl

                    hover:border-cyan-500/20
                    transition
                  "
                >

                  <p className="text-slate-500 text-[10px] mb-1">

                    {item.label}

                  </p>



                  <div className="flex items-end justify-between">

                    <h3 className="text-lg font-semibold leading-none">

                      {item.value}

                    </h3>



                    <span className={`text-[10px] ${item.color}`}>

                      Live

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* TOP CONTROLS */}



        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 mb-3">



          <div className="flex items-center gap-2 flex-wrap">

            <input
              type="text"
              placeholder="Search branch metrics..."
              className="
                bg-[#0F172A]
                border border-white/10

                rounded-xl

                px-4 py-2.5

                text-sm

                outline-none

                placeholder:text-slate-500

                w-full sm:w-[240px]

                focus:border-cyan-500/30
                transition
              "
            />



            <BranchSelector
              selectedBranch={selectedBranch}
              setSelectedBranch={setSelectedBranch}
            />

          </div>



          <div
            className="
              px-4 py-2.5

              rounded-xl

              bg-[#0F172A]
              border border-white/10

              text-xs text-cyan-400
            "
          >

            Global Workspace Admin

          </div>

        </div>



        {/* KPI + MANAGER */}



        <div className="grid grid-cols-1 xl:grid-cols-[1.65fr_0.7fr] gap-3 mb-3">



          {/* KPI */}



          <div>

            <BranchMetricCards
              selectedBranch={selectedBranch}
            />

          </div>



          {/* MANAGER */}



          <GlassCard className="p-4 relative overflow-hidden rounded-2xl h-full">

            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full"></div>



            <div className="relative z-10">



              <div className="flex items-center gap-3 mb-4">

                <div
                  className="
                    w-11 h-11

                    rounded-xl

                    bg-cyan-500/10
                    border border-cyan-500/20

                    flex items-center justify-center

                    text-sm
                    font-semibold

                    text-cyan-400
                  "
                >

                  {currentBranch.manager
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}

                </div>



                <div>

                  <p className="text-[10px] text-slate-500 mb-1">

                    Branch Manager

                  </p>



                  <h3 className="text-sm font-medium text-white">

                    {currentBranch.manager}

                  </h3>



                  <p className="text-[10px] text-cyan-400 mt-1">

                    {selectedBranch}

                  </p>

                </div>

              </div>



              <div className="space-y-2.5">

                {[

                  {
                    label: "Occupancy",
                    value: currentBranch.occupancy,
                    color: "text-cyan-400"
                  },

                  {
                    label: "Team Members",
                    value: currentBranch.team,
                    color: "text-white"
                  },

                  {
                    label: "Pending Renewals",
                    value: currentBranch.renewals,
                    color: "text-orange-400"
                  },

                  {
                    label: "Open Tickets",
                    value: currentBranch.tickets,
                    color: "text-red-400"
                  }

                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex items-center justify-between

                      bg-white/[0.03]
                      border border-white/5

                      rounded-xl

                      px-3 py-2.5
                    "
                  >

                    <p className="text-[11px] text-slate-400">

                      {item.label}

                    </p>



                    <p className={`text-[11px] font-medium ${item.color}`}>

                      {item.value}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </GlassCard>

        </div>



        {/* MAIN GRID */}



        <div className="grid grid-cols-1 2xl:grid-cols-[1.7fr_0.8fr] gap-3 mb-3">



          {/* CALENDAR */}



          <div>

            <ResourceCalendar
              selectedBranch={selectedBranch}
            />

          </div>



          {/* OPERATIONS */}



          <div>

            <GlassCard className="p-4 h-full relative overflow-hidden rounded-2xl">

              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 blur-[70px] rounded-full"></div>



              <div className="relative z-10">



                <div className="mb-4">

                  <p className="text-cyan-400 text-[10px] uppercase tracking-[0.2em] mb-2">

                    Live Metrics

                  </p>



                  <h2 className="text-base font-semibold mb-1">

                    Active Operations

                  </h2>



                  <p className="text-slate-400 text-xs">

                    Workspace operational analytics

                  </p>

                </div>



                <div className="space-y-2.5">

                  {[

                    {
                      title: "Meeting Room Usage",
                      value: currentBranch.roomUsage
                    },

                    {
                      title: "Desk Occupancy",
                      value: currentBranch.occupancy
                    },

                    {
                      title: "Renewals Due",
                      value: `${currentBranch.renewals}`
                    },

                    {
                      title: "Open Tickets",
                      value: `${currentBranch.tickets}`
                    }

                  ].map((item, index) => (

                    <div
                      key={index}
                      className="
                        bg-white/[0.03]
                        border border-white/5

                        rounded-lg

                        px-3 py-2.5

                        hover:border-cyan-500/20
                        transition
                      "
                    >

                      <div className="flex items-center justify-between mb-2">

                        <p className="text-xs text-slate-400">

                          {item.title}

                        </p>



                        <p className="text-cyan-400 text-xs font-medium">

                          {item.value}

                        </p>

                      </div>



                      <div className="h-1.5 rounded-full bg-black/40 overflow-hidden">

                        <div
                          className="
                            h-full
                            rounded-full

                            bg-gradient-to-r
                            from-cyan-400
                            to-emerald-400
                          "
                          style={{
                            width:
                              item.value.includes("%")
                                ? item.value
                                : "70%"
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </GlassCard>

          </div>

        </div>



        {/* TABLE */}



        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-3.5">

          <div className="flex items-center justify-between mb-4">

            <div>

              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2">

                Team & Occupancy

              </p>



              <h2 className="text-base font-semibold">

                Branch Members

              </h2>

            </div>



            <div className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px]">

              Live Sync

            </div>

          </div>



          <BranchMembersTable
            selectedBranch={selectedBranch}
          />

        </div>

      </div>

    </div>

  );

}



export default BranchAnalytics;