import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fetchLeads } from "../../Api/lead";

function Pipeline() {

  const [leads, setLeads] = useState([]);

  // LOAD LEADS
  const loadLeads = async () => {

    try {

      const response = await fetchLeads();

      console.log("API RESPONSE:", response);

      // HANDLE DIFFERENT API STRUCTURES
      const leadsData =
        Array.isArray(response)
          ? response
          : response?.leads ||
            response?.data ||
            [];

      setLeads(leadsData);

    } catch (error) {

      console.log("FETCH ERROR:", error);

      setLeads([]);

    }

  };

  useEffect(() => {

    loadLeads();

  }, []);

  // PIPELINE STAGES
  const pipelineStages = [

    {
      id: "new",
      title: "New Lead"
    },

    {
      id: "contacted",
      title: "Contacted"
    },

    {
      id: "proposal",
      title: "Proposal"
    },

    {
      id: "payment",
      title: "Payment"
    },

    {
      id: "movein",
      title: "Move-In"
    }

  ];

  return (

    <div className="min-h-screen bg-[#020617] p-6 mt-15">

      {/* HEADER */}
      <div className="mb-8">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">
          Branch CRM
        </p>

        <h1 className="text-[42px] font-semibold text-white mb-4">
          Lead Pipeline
        </h1>

      </div>

      {/* PIPELINE */}
      <div className="flex gap-5 overflow-x-auto pb-4">

        {pipelineStages.map((stage) => {

          // SAFE FILTER
          const stageLeads =
            Array.isArray(leads)
              ? leads.filter(
                  (lead) =>
                    lead.stage === stage.id
                )
              : [];

          return (

            <div
              key={stage.id}
              className="min-w-[320px] bg-[#0F172A] border border-white/10 rounded-[28px] p-4"
            >

              {/* STAGE HEADER */}
              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-[18px] font-semibold text-white mb-1">
                    {stage.title}
                  </h2>

                  <p className="text-slate-500 text-sm">
                    {stageLeads.length} Leads
                  </p>

                </div>

              </div>

              {/* LEADS */}
              <div className="space-y-4">

                {stageLeads.map((lead) => (

                  <div
                    key={lead._id}
                    className="bg-[#020617] border border-white/10 rounded-[24px] p-4"
                  >

                    {/* TOP */}
                    <div className="flex items-start justify-between mb-4">

                      <div>

                        <h3 className="text-[16px] font-semibold text-white mb-1">
                          {lead.name}
                        </h3>

                        <p className="text-slate-500 text-[12px]">
                          {lead.company || "Direct Booking"}
                        </p>

                      </div>

                      <div className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 text-[10px] font-medium">
                        {lead.priority}
                      </div>

                    </div>

                    {/* DETAILS */}
                    <div className="space-y-2 mb-4">

                      <div className="flex justify-between">

                        <p className="text-slate-500 text-[12px]">
                          Branch
                        </p>

                        <h3 className="text-white text-[12px] font-medium">
                          {lead.branch}
                        </h3>

                      </div>

                      <div className="flex justify-between">

                        <p className="text-slate-500 text-[12px]">
                          Workspace
                        </p>

                        <h3 className="text-white text-[12px] font-medium">
                          {lead.workspace}
                        </h3>

                      </div>

                      <div className="flex justify-between">

                        <p className="text-slate-500 text-[12px]">
                          Final Amount
                        </p>

                        <h3 className="text-sky-400 text-[13px] font-semibold">
                          {lead.finalAmount}
                        </h3>

                      </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="grid grid-cols-2 gap-2">

                      {/* FINANCE */}
                      <Link
                        to={`/branch-admin/finance/${lead._id}`}
                      >

                        <button className="w-full h-9 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[11px] font-medium">
                          Finance
                        </button>

                      </Link>

                      {/* CLIENT BILLING */}
                      <Link
                        to={`/client/billing/${lead._id}`}
                      >

                        <button className="w-full h-9 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-slate-300 text-[11px] font-medium">
                          Billing
                        </button>

                      </Link>

                      {/* NEW */}
                      {lead.stage === "new" && (

                        <>

                          <button className="h-9 rounded-2xl bg-violet-500 hover:bg-violet-600 transition text-white text-[11px] font-medium">
                            Contact
                          </button>

                          <button className="h-9 rounded-2xl border border-white/10 text-slate-300 text-[11px]">
                            Send Quote
                          </button>

                        </>

                      )}

                      {/* CONTACTED */}
                      {lead.stage === "contacted" && (

                        <button className="col-span-2 h-9 rounded-2xl bg-amber-500 hover:bg-amber-600 transition text-white text-[11px] font-medium">
                          Send Proposal
                        </button>

                      )}

                      {/* PROPOSAL */}
                      {lead.stage === "proposal" && (

                        <>

                          <button className="h-9 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-[11px] font-medium">
                            Approve Discount
                          </button>

                          <button className="h-9 rounded-2xl border border-white/10 text-slate-300 text-[11px]">
                            Generate Invoice
                          </button>

                        </>

                      )}

                      {/* PAYMENT */}
                      {lead.stage === "payment" && (

                        <>

                          <button className="h-9 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[11px] font-medium">
                            Mark Paid
                          </button>

                          <button className="h-9 rounded-2xl border border-white/10 text-slate-300 text-[11px]">
                            Send Invoice
                          </button>

                        </>

                      )}

                      {/* MOVE-IN */}
                      {lead.stage === "movein" && (

                        <>

                          <button className="h-9 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-[11px] font-medium">
                            Approve Access
                          </button>

                          <button className="h-9 rounded-2xl border border-white/10 text-slate-300 text-[11px]">
                            Complete Booking
                          </button>

                        </>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Pipeline;