import { useMemo, useState, useEffect } from "react";
import { getLeads } from "../../data/leadsStore";
import { Link } from "react-router-dom";
import {
  Building2,
  Phone,
  Mail,
  Calendar,
  CircleDollarSign,
  Filter,
  Search,
  ArrowRight,
  Clock3,
  User2,
  CheckCircle2,
  AlertCircle,
  XCircle
} from "lucide-react";

function Pipeline() {

  /* ---------------------------------------------------
     PIPELINE STAGES
  --------------------------------------------------- */

  const pipelineStages = [

    {
      id: "new",
      title: "New Leads",
      color:
        "from-sky-500/20 to-sky-500/5",
      border:
        "border-sky-500/20"
    },



    {
      id: "contacted",
      title: "Contacted",
      color:
        "from-violet-500/20 to-violet-500/5",
      border:
        "border-violet-500/20"
    },



    {
      id: "visit",
      title: "Site Visit",
      color:
        "from-amber-500/20 to-amber-500/5",
      border:
        "border-amber-500/20"
    },



    {
      id: "proposal",
      title: "Proposal Sent",
      color:
        "from-emerald-500/20 to-emerald-500/5",
      border:
        "border-emerald-500/20"
    },



    {
      id: "closed",
      title: "Closed Won",
      color:
        "from-green-500/20 to-green-500/5",
      border:
        "border-green-500/20"
    }

  ];



  /* ---------------------------------------------------
     LEADS DATA
  --------------------------------------------------- */

  const [leads, setLeads] = useState([]);

/* LOAD LEADS */

useEffect(() => {

  const storedLeads = getLeads();

  setLeads(storedLeads);

}, []);

const tempData = [

    {
      id: 1,

      name: "Rahul Verma",

      company: "TechNova",

      email: "rahul@technova.com",

      phone: "+91 9876543210",

      workspace: "Private Cabin",

      seats: 12,

      branch: "Madhapur",

      budget: "₹1.8L / month",

      moveIn: "24 May",

      stage: "new",

      priority: "High"
    },



    {
      id: 2,

      name: "Ananya Reddy",

      company: "PixelCraft",

      email: "ananya@pixelcraft.com",

      phone: "+91 9988776655",

      workspace: "Meeting Room",

      seats: 8,

      branch: "Gachibowli",

      budget: "₹45K / month",

      moveIn: "29 May",

      stage: "contacted",

      priority: "Medium"
    },



    {
      id: 3,

      name: "Vikram Singh",

      company: "CloudSync",

      email: "vikram@cloudsync.com",

      phone: "+91 9000011111",

      workspace: "Hot Desks",

      seats: 20,

      branch: "Kondapur",

      budget: "₹90K / month",

      moveIn: "2 June",

      stage: "visit",

      priority: "High"
    },



    {
      id: 4,

      name: "Sneha Kapoor",

      company: "Growthly",

      email: "sneha@growthly.com",

      phone: "+91 9555511111",

      workspace: "Private Cabin",

      seats: 15,

      branch: "Madhapur",

      budget: "₹2.2L / month",

      moveIn: "1 June",

      stage: "proposal",

      priority: "High"
    },



    {
      id: 5,

      name: "Arjun Kumar",

      company: "ScaleX",

      email: "arjun@scalex.com",

      phone: "+91 9111122222",

      workspace: "Day Pass",

      seats: 5,

      branch: "KPHB",

      budget: "₹15K / month",

      moveIn: "5 June",

      stage: "closed",

      priority: "Low"
    }

  ];



  const [search, setSearch] = useState("");



  /* ---------------------------------------------------
     FILTERED LEADS
  --------------------------------------------------- */

  const filteredLeads = useMemo(() => {

    return leads.filter((lead) => {

      return (
        lead.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        lead.company
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    });

  }, [search, leads]);



  /* ---------------------------------------------------
     MOVE LEAD
  --------------------------------------------------- */

  const moveLead = (leadId, direction) => {

    setLeads((prev) =>

      prev.map((lead) => {

        if (lead.id !== leadId)
          return lead;



        const currentIndex =
          pipelineStages.findIndex(
            (s) => s.id === lead.stage
          );



        let nextIndex = currentIndex;



        if (direction === "next") {

          nextIndex = Math.min(
            currentIndex + 1,
            pipelineStages.length - 1
          );

        }



        if (direction === "prev") {

          nextIndex = Math.max(
            currentIndex - 1,
            0
          );

        }



        return {

          ...lead,

          stage:
            pipelineStages[nextIndex].id
        };

      })

    );

  };



  /* ---------------------------------------------------
     PRIORITY BADGE
  --------------------------------------------------- */

  const priorityStyle = (priority) => {

    switch (priority) {

      case "High":

        return "bg-red-500/10 text-red-300 border-red-500/20";



      case "Medium":

        return "bg-amber-500/10 text-amber-300 border-amber-500/20";



      default:

        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
    }

  };



  return (

    <div className="min-h-screen bg-[#020617] p-7">

      {/* ---------------------------------------------------
         HEADER
      --------------------------------------------------- */}

      <div className="flex items-start justify-between mb-8">

        <div>

          <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

            Sales Pipeline

          </p>



          <h1 className="text-[42px] font-semibold text-white leading-tight mb-3">

            Workspace Lead Pipeline

          </h1>



          <p className="text-slate-400 text-[15px] leading-[1.8] max-w-2xl">

            Manage workspace enquiries, site visits,
            proposals and bookings across all branches.

          </p>

        </div>



       <Link
  to="/branch-admin/add-lead"
  className="h-12 px-6 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium flex items-center justify-center"
>

  + Add Lead

</Link>

      </div>



      {/* ---------------------------------------------------
         FILTER BAR
      --------------------------------------------------- */}

      <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-4 mb-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* SEARCH */}

          <div className="flex items-center gap-3 h-12 px-5 rounded-2xl bg-white/[0.03] border border-white/5">

            <Search
              size={18}
              className="text-slate-500"
            />



            <input
              type="text"
              placeholder="Search leads"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-transparent outline-none text-white text-sm"
            />

          </div>



          {/* FILTER */}

          <div className="flex items-center gap-3 h-12 px-5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300 text-sm">

            <Filter size={16} />

            All Branches

          </div>



          {/* STATS */}

          <div className="flex items-center justify-end gap-4">

            <div className="h-12 px-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-emerald-300"
              />



              <div>

                <p className="text-[11px] text-slate-400">

                  Closed Revenue

                </p>



                <h3 className="text-sm font-semibold text-white">

                  ₹12.4L

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* ---------------------------------------------------
         PIPELINE
      --------------------------------------------------- */}

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">

        {pipelineStages.map((stage) => {

          const stageLeads =
            filteredLeads.filter(
              (lead) =>
                lead.stage === stage.id
            );



          return (

            <div
              key={stage.id}
              className={`rounded-[30px] border ${stage.border} bg-gradient-to-b ${stage.color} p-4`}
            >

              {/* COLUMN HEADER */}

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h3 className="text-[18px] font-semibold text-white mb-1">

                    {stage.title}

                  </h3>



                  <p className="text-[12px] text-slate-400">

                    {stageLeads.length} Leads

                  </p>

                </div>



                <div className="w-10 h-10 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white text-sm font-semibold">

                  {stageLeads.length}

                </div>

              </div>



              {/* LEADS */}

              <div className="space-y-4">

                {stageLeads.map((lead) => (

                  <div
                    key={lead.id}
                    className="bg-[#020617] border border-white/10 rounded-[26px] p-5 hover:border-sky-500/30 transition"
                  >

                    {/* TOP */}

                    <div className="flex items-start justify-between mb-4">

                      <div>

                        <h3 className="text-[17px] font-semibold text-white mb-1">

                          {lead.name}

                        </h3>



                        <div className="flex items-center gap-2 text-slate-400 text-[13px]">

                          <Building2 size={14} />

                          {lead.company}

                        </div>

                      </div>



                      <div
                        className={`px-3 py-1 rounded-full border text-[11px] font-medium ${priorityStyle(
                          lead.priority
                        )}`}
                      >

                        {lead.priority}

                      </div>

                    </div>



                    {/* DETAILS */}

                    <div className="space-y-3 mb-5">

                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <Phone size={14} />

                        {lead.phone}

                      </div>



                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <Mail size={14} />

                        {lead.email}

                      </div>



                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <User2 size={14} />

                        {lead.workspace} • {lead.seats} Seats

                      </div>



                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <CircleDollarSign size={14} />

                        {lead.budget}

                      </div>



                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <Calendar size={14} />

                        Move-in: {lead.moveIn}

                      </div>



                      <div className="flex items-center gap-3 text-[13px] text-slate-300">

                        <Clock3 size={14} />

                        {lead.branch}

                      </div>

                    </div>



                    {/* ACTIONS */}

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          moveLead(
                            lead.id,
                            "prev"
                          )
                        }
                        className="flex-1 h-10 rounded-2xl border border-white/10 text-slate-300 text-sm hover:bg-white/[0.03] transition"
                      >

                        Back

                      </button>



                      <button
                        onClick={() =>
                          moveLead(
                            lead.id,
                            "next"
                          )
                        }
                        className="flex-1 h-10 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium flex items-center justify-center gap-2"
                      >

                        Move

                        <ArrowRight size={15} />

                      </button>

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
