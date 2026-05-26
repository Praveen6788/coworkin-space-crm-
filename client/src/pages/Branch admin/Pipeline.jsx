import { useMemo, useState, useEffect } from "react";

import { fetchLeads } from "../../Api/lead";

import {

  Search,

  Filter,

  Phone,

  Mail,

  Building2,

  Users,



  Calendar,

  ArrowRight,

  CheckCircle2,

  CreditCard,

  FileText,

  BadgeCheck

} from "lucide-react";



function Pipeline() {



  /* ---------------------------------------------------

     PIPELINE STAGES

  --------------------------------------------------- */



  const pipelineStages = [

  {
    id: "new",
    title: "New Lead",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20"
  },

  {
    id: "contacted",
    title: "Contacted",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20"
  },

  {
    id: "proposal",
    title: "Proposal Sent",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20"
  },

  {
    id: "payment",
    title: "Payment Pending",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20"
  },

  {
    id: "movein",
    title: "Move-In Confirmed",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20"
  }

];


  /* ---------------------------------------------------

     STATES

  --------------------------------------------------- */



  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedBranch, setSelectedBranch] =

    useState("All Branches");



  /* ---------------------------------------------------

     FETCH LEADS

  --------------------------------------------------- */



  useEffect(() => {

    const loadLeads = async () => {

      try {

        const data =
          await fetchLeads();



        setLeads(data);

      } catch (error) {

        console.log(error);

      }

    };



    loadLeads();

  }, []);



  /* ---------------------------------------------------

     FILTER

  --------------------------------------------------- */



  const filteredLeads = useMemo(() => {

    return leads.filter((lead) => {



      const matchesSearch =

        lead.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||



        lead.company
          ?.toLowerCase()
          .includes(search.toLowerCase());



      const matchesBranch =

        selectedBranch ===
        "All Branches"

          ? true

          : lead.branch ===
            selectedBranch;



      return (
        matchesSearch &&
        matchesBranch
      );



    });

  }, [
    search,
    leads,
    selectedBranch
  ]);



  /* ---------------------------------------------------

     MOVE LEAD

  --------------------------------------------------- */



  const moveLead = (
    leadId,
    direction
  ) => {

    setLeads((prev) =>

      prev.map((lead) => {



        if (lead._id !== leadId)
          return lead;



        const currentIndex =
          pipelineStages.findIndex(
            (s) =>
              s.id === lead.stage
          );



        let nextIndex =
          currentIndex;



        if (
          direction === "next"
        ) {

          nextIndex = Math.min(
            currentIndex + 1,
            pipelineStages.length - 1
          );

        }



        if (
          direction === "prev"
        ) {

          nextIndex = Math.max(
            currentIndex - 1,
            0
          );

        }



        return {

          ...lead,

          stage:
            pipelineStages[nextIndex]
              .id

        };

      })

    );

  };



  return (

    <div className="min-h-screen bg-[#020617] p-6">



      {/* HEADER */}



      <div className="mb-7">

        <p className="text-sky-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">

          Branch CRM

        </p>



        <h1 className="text-[38px] font-semibold text-white mb-3">

          Lead Pipeline & Finance

        </h1>



        <p className="text-slate-400 text-[14px] max-w-2xl leading-[1.8]">

          Manage coworking enquiries,
          quotations, invoices,
          payments and move-ins.

        </p>

      </div>



      {/* FILTERS */}



      <div className="bg-[#0F172A] border border-white/10 rounded-[24px] p-4 mb-7">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">



          {/* SEARCH */}



          <div className="flex items-center gap-3 h-11 px-4 rounded-2xl bg-white/[0.03] border border-white/5">

            <Search
              size={16}
              className="text-slate-500"
            />



            <input
              type="text"
              placeholder="Search leads"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full bg-transparent outline-none text-white text-sm"
            />

          </div>



          {/* BRANCH */}



          <div className="flex items-center gap-3 h-11 px-4 rounded-2xl bg-white/[0.03] border border-white/5">

            <Filter
              size={15}
              className="text-slate-400"
            />



            <select
              value={
                selectedBranch
              }
              onChange={(e) =>
                setSelectedBranch(
                  e.target.value
                )
              }
              className="w-full bg-transparent outline-none text-white text-sm"
            >

              <option className="bg-slate-900">

                All Branches

              </option>



              <option className="bg-slate-900">

                Madhapur

              </option>



              <option className="bg-slate-900">

                Gachibowli

              </option>



              <option className="bg-slate-900">

                Kondapur

              </option>



              <option className="bg-slate-900">

                KPHB

              </option>

            </select>

          </div>



          {/* STATS */}



          <div className="flex items-center justify-end">

            <div className="h-11 px-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">

              <CheckCircle2
                size={16}
                className="text-emerald-400"
              />



              <div>

                <p className="text-[10px] text-slate-400">

                  Total Leads

                </p>



                <h3 className="text-sm font-semibold text-white">

                  {filteredLeads.length}

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* PIPELINE */}



      <div className="flex gap-4 overflow-x-auto pb-4">

        {pipelineStages.map(
          (stage) => {



            const stageLeads =
              filteredLeads.filter(
                (lead) =>
                  lead.stage ===
                  stage.id
              );



            return (

              <div
                key={stage.id}
                className={`min-w-[300px] rounded-[26px] border ${stage.border} bg-gradient-to-b ${stage.color} p-4`}
              >



                {/* HEADER */}



                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-[16px] font-semibold text-white mb-1">

                      {stage.title}

                    </h3>



                    <p className="text-[11px] text-slate-400">

                      {stageLeads.length} Leads

                    </p>

                  </div>



                  <div className="w-9 h-9 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white text-sm font-semibold">

                    {stageLeads.length}

                  </div>

                </div>



                {/* CARDS */}



                <div className="space-y-4">

                  {stageLeads.map(
                    (lead) => (

                      <div
                        key={lead._id}
                        className="bg-[#020617] border border-white/10 rounded-[24px] p-4"
                      >



                        {/* TOP */}



                        <div className="flex items-start justify-between mb-4">

                          <div>

                            <h3 className="text-[15px] font-semibold text-white mb-1">

                              {lead.name}

                            </h3>



                            <p className="text-[12px] text-slate-400">

                              {lead.company ||
                                "Direct Booking"}

                            </p>

                          </div>



                          <div className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                            lead.priority === "High"

                              ? "bg-red-500/10 text-red-300"

                              : lead.priority === "Medium"

                              ? "bg-amber-500/10 text-amber-300"

                              : "bg-emerald-500/10 text-emerald-300"
                          }`}>

                            {lead.priority}

                          </div>

                        </div>



                        {/* DETAILS */}



                        <div className="space-y-2 mb-4">

                          <div className="flex items-center gap-2 text-[12px] text-slate-300">

                            <Phone size={13} />

                            {lead.phone}

                          </div>



                          <div className="flex items-center gap-2 text-[12px] text-slate-300">

                            <Mail size={13} />

                            {lead.email ||
                              "Not Provided"}

                          </div>



                          <div className="flex items-center gap-2 text-[12px] text-slate-300">

                            <Building2 size={13} />

                            {lead.branch}

                          </div>



                          <div className="flex items-center gap-2 text-[12px] text-slate-300">

                            <Users size={13} />

                            {lead.workspace} • {lead.seats} Seats

                          </div>



                          <div className="flex items-center gap-2 text-[12px] text-slate-300">

                            <Calendar size={13} />

                            Move-In: {lead.moveIn || "Immediate"}

                          </div>

                        </div>



                        {/* FINANCE */}



                        <div className="grid grid-cols-2 gap-3 mb-4">

                          <div className="bg-white/[0.03] rounded-2xl p-3">

                            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500 mb-2">

                              Amount

                            </p>



                            <h3 className="text-white text-[13px] font-semibold">

                              {lead.finalAmount ||
                                lead.quotationAmount ||
                                "₹60,000"}

                            </h3>

                          </div>



                          <div className="bg-white/[0.03] rounded-2xl p-3">

                            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500 mb-2">

                              Payment

                            </p>



                            <h3 className={`text-[13px] font-semibold ${
                              lead.paymentStatus === "Paid"

                                ? "text-emerald-400"

                                : "text-amber-400"
                            }`}>

                              {lead.paymentStatus || "Pending"}

                            </h3>

                          </div>

                        </div>



                        {/* INVOICE */}



                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3 mb-4">

                          <div className="flex items-center justify-between mb-2">

                            <div className="flex items-center gap-2">

                              <FileText
                                size={13}
                                className="text-slate-400"
                              />



                              <p className="text-[10px] text-slate-400 uppercase tracking-[0.18em]">

                                Invoice

                              </p>

                            </div>



                            <p className="text-[11px] text-slate-500">

                              {lead.invoiceNumber ||
                                "INV-000"}

                            </p>

                          </div>



                          <h3 className="text-[12px] text-white font-medium">

                            {lead.invoiceStatus ||
                              "Not Generated"}

                          </h3>

                        </div>



                        {/* ACTIONS */}



                        <div className="grid grid-cols-2 gap-2 mb-3">

                          <button className="h-9 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[11px] font-medium">

                            Quote

                          </button>



                          <button className="h-9 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-slate-300 text-[11px] font-medium">

                            Invoice

                          </button>



                          <button className="h-9 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-[11px] font-medium flex items-center justify-center gap-2">

                            <CreditCard size={13} />

                            Paid

                          </button>



                          <button className="h-9 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-slate-300 text-[11px] font-medium flex items-center justify-center gap-2">

                            <BadgeCheck size={13} />

                            Move-In

                          </button>

                        </div>



                        {/* MOVE */}



                        <div className="flex items-center gap-2">

                          <button
                            onClick={() =>
                              moveLead(
                                lead._id,
                                "prev"
                              )
                            }
                            className="flex-1 h-9 rounded-2xl border border-white/10 text-slate-300 text-[11px]"
                          >

                            Back

                          </button>



                          <button
                            onClick={() =>
                              moveLead(
                                lead._id,
                                "next"
                              )
                            }
                            className="flex-1 h-9 rounded-2xl bg-white text-black text-[11px] font-medium flex items-center justify-center gap-2"
                          >

                            Move

                            <ArrowRight size={13} />

                          </button>

                        </div>

                      </div>

                    )

                  )}

                </div>

              </div>

            );

          }

        )}

      </div>

    </div>

  );

}



export default Pipeline;