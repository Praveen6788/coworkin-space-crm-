import { useState } from "react";

import BranchSelector from "../../components/branchAnalytics/BranchSelector";
import BranchMetricCards from "../../components/branchAnalytics/BranchMetricCards";
import ResourceCalendar from "../../components/branchAnalytics/ResourceCalendar";
import BranchMembersTable from "../../components/branchAnalytics/BranchMembersTable";

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

    <div className="min-h-screen bg-[#020617] text-white px-4 sm:px-6 lg:px-8 py-6">

      {/* HEADER */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-6">

        <div>

          <p className="text-cyan-400 text-[11px] tracking-[0.25em] uppercase mb-2">

            Global Admin Panel

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Branch Analytics

          </h1>

          <p className="text-gray-400 text-sm">

            Real-time workspace intelligence and operational workflows.

          </p>

        </div>



        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

          <input
            type="text"
            placeholder="Search..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none placeholder:text-gray-500"
          />


          <BranchSelector
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
          />


          <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-cyan-400">

            Global Admin

          </div>

        </div>

      </div>



      {/* KPI + MANAGER */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">

        {/* KPI */}

        <div className="xl:col-span-4">

          <BranchMetricCards
            selectedBranch={selectedBranch}
          />

        </div>



        {/* MANAGER */}

        <GlassCard className="p-5 h-full">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-sm font-semibold text-cyan-400">

              {currentBranch.manager
                .split(" ")
                .map((word) => word[0])
                .join("")}

            </div>


            <div>

              <p className="text-xs text-gray-400 mb-1">

                Branch Manager

              </p>

              <h3 className="font-medium text-white">

                {currentBranch.manager}

              </h3>

              <p className="text-xs text-cyan-400">

                {selectedBranch}

              </p>

            </div>

          </div>



          <div className="space-y-3">

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-400">

                Occupancy

              </p>

              <p className="text-xs text-cyan-400">

                {currentBranch.occupancy}

              </p>

            </div>


            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-400">

                Team Members

              </p>

              <p className="text-xs text-white">

                {currentBranch.team}

              </p>

            </div>


            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-400">

                Pending Renewals

              </p>

              <p className="text-xs text-red-400">

                {currentBranch.renewals}

              </p>

            </div>


            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-400">

                Open Tickets

              </p>

              <p className="text-xs text-yellow-400">

                {currentBranch.tickets}

              </p>

            </div>

          </div>

        </GlassCard>

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">

        {/* LEFT */}

        <div className="xl:col-span-2">

          <ResourceCalendar
            selectedBranch={selectedBranch}
          />

        </div>



        {/* RIGHT */}

        <div>

          <GlassCard className="p-5 h-full">

            <div className="mb-5">

              <h2 className="text-lg font-semibold mb-1">

                Active Operations

              </h2>

              <p className="text-gray-400 text-sm">

                Live workspace operational metrics

              </p>

            </div>



            <div className="space-y-4">

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
                  className="bg-white/5 border border-white/5 rounded-xl p-4"
                >

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-sm text-gray-400">

                      {item.title}

                    </p>

                    <p className="text-cyan-400 text-sm font-medium">

                      {item.value}

                    </p>

                  </div>



                  <div className="h-2 rounded-full bg-black/40 overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
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

          </GlassCard>

        </div>

      </div>



      {/* MEMBERS TABLE */}

      <BranchMembersTable
        selectedBranch={selectedBranch}
      />

    </div>

  );
}

export default BranchAnalytics;