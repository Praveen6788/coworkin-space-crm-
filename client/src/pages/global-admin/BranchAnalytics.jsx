import { useState } from "react";

import BranchSelector from "../../components/branchAnalytics/BranchSelector";
import BranchMetricCards from "../../components/branchAnalytics/BranchMetricCards";
import ResourceCalendar from "../../components/branchAnalytics/ResourceCalendar";
import BranchMembersTable from "../../components/branchAnalytics/BranchMembersTable";

function BranchAnalytics() {

  const [selectedBranch, setSelectedBranch] =
    useState("Madhapur");

  return (

    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">

            Branch Operations

          </p>

          <h1 className="text-3xl font-semibold mb-2">

            Multi-Branch Workspace Intelligence

          </h1>

          <p className="text-gray-400 text-sm">

            Monitor occupancy, bookings and workspace workflows.

          </p>

        </div>

        <BranchSelector
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
        />

      </div>

      <BranchMetricCards />

      <ResourceCalendar />

      <BranchMembersTable />

    </div>

  );
}

export default BranchAnalytics;
