import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {

  Phone,

  Mail,

  Building2,

  Users,

  Calendar,

  CircleDollarSign,

  FileText,

  BadgeCheck,

  CreditCard

} from "lucide-react";

import { fetchLeadById } from "../../Api/lead";



function Finance() {

  const { id } = useParams();



  const [lead, setLead] =
    useState(null);



  const [quotation,
    setQuotation] =
    useState({

      quotationAmount: "",

      discount: "",

      finalAmount: ""

    });



  /* ---------------------------------------
     FETCH LEAD
  --------------------------------------- */

  useEffect(() => {

    const loadLead =
      async () => {

        try {

          const data =
            await fetchLeadById(
              id
            );



          setLead(data);



          setQuotation({

            quotationAmount:
              data.quotationAmount ||
              "₹65,000",



            discount:
              data.discount ||
              "₹5,000",



            finalAmount:
              data.finalAmount ||
              "₹60,000"

          });

        } catch (error) {

          console.log(error);

        }

      };



    loadLead();

  }, [id]);



  /* ---------------------------------------
     LOADING
  --------------------------------------- */

  if (!lead) {

    return (

      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

        Loading Finance Details...

      </div>

    );

  }



  return (

    <div className="min-h-screen bg-[#020617] p-6">



      {/* HEADER */}



      <div className="mb-8">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          Branch Finance

        </p>



        <h1 className="text-[38px] leading-none font-semibold text-white mb-4">

          Finance & Billing

        </h1>



        <p className="text-slate-400 text-sm">

          Manage quotations,
          invoices, payment and
          workspace approvals.

        </p>

      </div>



      {/* MAIN GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">



        {/* LEFT SIDE */}



        <div className="xl:col-span-2 space-y-6">



          {/* CLIENT CARD */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Client Details

                </p>



                <h2 className="text-[24px] font-semibold text-white">

                  {lead.name}

                </h2>

              </div>



              <div className={`px-4 py-2 rounded-full text-[11px] font-medium ${
                lead.paymentStatus === "Paid"

                  ? "bg-emerald-500/10 text-emerald-300"

                  : "bg-amber-500/10 text-amber-300"
              }`}>

                {lead.paymentStatus ||
                  "Pending"}

              </div>

            </div>



            {/* DETAILS */}



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div className="flex items-center gap-2 mb-3">

                  <Phone
                    size={15}
                    className="text-sky-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Phone

                  </p>

                </div>



                <h3 className="text-white text-sm font-medium">

                  {lead.phone}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div className="flex items-center gap-2 mb-3">

                  <Mail
                    size={15}
                    className="text-violet-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Email

                  </p>

                </div>



                <h3 className="text-white text-sm font-medium">

                  {lead.email ||
                    "Not Provided"}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div className="flex items-center gap-2 mb-3">

                  <Building2
                    size={15}
                    className="text-emerald-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Branch

                  </p>

                </div>



                <h3 className="text-white text-sm font-medium">

                  {lead.branch}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <div className="flex items-center gap-2 mb-3">

                  <Users
                    size={15}
                    className="text-amber-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Workspace

                  </p>

                </div>



                <h3 className="text-white text-sm font-medium">

                  {lead.workspace}

                </h3>



                <p className="text-slate-500 text-xs mt-1">

                  {lead.seats} Seats

                </p>

              </div>

            </div>

          </div>



          {/* QUOTATION */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Quotation

                </p>



                <h2 className="text-[24px] font-semibold text-white">

                  Pricing Details

                </h2>

              </div>



              <CircleDollarSign
                size={22}
                className="text-sky-400"
              />

            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">



              <input
                type="text"
                placeholder="Quotation Amount"
                value={
                  quotation.quotationAmount
                }
                onChange={(e) =>
                  setQuotation({

                    ...quotation,

                    quotationAmount:
                      e.target.value

                  })
                }
                className="h-11 px-4 rounded-2xl bg-white/[0.03] border border-white/10 outline-none text-white text-sm"
              />



              <input
                type="text"
                placeholder="Discount"
                value={
                  quotation.discount
                }
                onChange={(e) =>
                  setQuotation({

                    ...quotation,

                    discount:
                      e.target.value

                  })
                }
                className="h-11 px-4 rounded-2xl bg-white/[0.03] border border-white/10 outline-none text-white text-sm"
              />



              <input
                type="text"
                placeholder="Final Amount"
                value={
                  quotation.finalAmount
                }
                onChange={(e) =>
                  setQuotation({

                    ...quotation,

                    finalAmount:
                      e.target.value

                  })
                }
                className="h-11 px-4 rounded-2xl bg-white/[0.03] border border-white/10 outline-none text-white text-sm"
              />

            </div>



            {/* ACTIONS */}



            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">



              <button className="h-10 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[12px] font-medium">

                Send Quote

              </button>



              <button className="h-10 rounded-2xl bg-violet-500 hover:bg-violet-600 transition text-white text-[12px] font-medium">

                Approve Discount

              </button>



              <button className="h-10 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-slate-300 text-[12px] font-medium">

                Generate Invoice

              </button>



              <button className="h-10 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-[12px] font-medium">

                Mark Paid

              </button>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}



        <div className="space-y-6">



          {/* INVOICE */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Invoice

                </p>



                <h2 className="text-[22px] font-semibold text-white">

                  Billing Status

                </h2>

              </div>



              <FileText
                size={20}
                className="text-pink-400"
              />

            </div>



            <div className="space-y-4">



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <p className="text-slate-500 text-[11px] uppercase mb-2">

                  Invoice Number

                </p>



                <h3 className="text-white text-sm font-medium">

                  {lead.invoiceNumber ||
                    "INV-000"}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <p className="text-slate-500 text-[11px] uppercase mb-2">

                  Invoice Status

                </p>



                <h3 className="text-white text-sm font-medium">

                  {lead.invoiceStatus ||
                    "Not Generated"}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <p className="text-slate-500 text-[11px] uppercase mb-2">

                  Final Amount

                </p>



                <h3 className="text-sky-400 text-xl font-semibold">

                  {quotation.finalAmount}

                </h3>

              </div>

            </div>



            <button className="w-full h-11 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-white text-sm font-medium mt-5">

              Send Invoice

            </button>

          </div>



          {/* MOVE IN */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Booking

                </p>



                <h2 className="text-[22px] font-semibold text-white">

                  Move-In Status

                </h2>

              </div>



              <BadgeCheck
                size={20}
                className="text-emerald-400"
              />

            </div>



            <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 mb-4">

              <div className="flex items-center justify-between mb-2">

                <p className="text-slate-500 text-[11px] uppercase">

                  Move-In Date

                </p>



                <Calendar
                  size={15}
                  className="text-slate-400"
                />

              </div>



              <h3 className="text-white text-sm font-medium">

                {lead.moveIn ||
                  "Immediate"}

              </h3>

            </div>



            <div className="grid grid-cols-2 gap-3">

              <button className="h-10 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-[12px] font-medium">

                Approve Access

              </button>



              <button className="h-10 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-slate-300 text-[12px] font-medium">

                Complete Booking

              </button>

            </div>

          </div>



          {/* PAYMENT */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Payment

                </p>



                <h2 className="text-[22px] font-semibold text-white">

                  Payment Status

                </h2>

              </div>



              <CreditCard
                size={20}
                className="text-emerald-400"
              />

            </div>



            <div className={`rounded-2xl p-5 border ${
              lead.paymentStatus ===
              "Paid"

                ? "bg-emerald-500/10 border-emerald-500/20"

                : "bg-amber-500/10 border-amber-500/20"
            }`}>

              <h3 className={`font-semibold mb-2 ${
                lead.paymentStatus ===
                "Paid"

                  ? "text-emerald-300"

                  : "text-amber-300"
              }`}>

                {lead.paymentStatus ||
                  "Pending"}

              </h3>



              <p className="text-sm text-slate-300">

                {lead.paymentStatus ===
                "Paid"

                  ? "Client payment completed successfully."

                  : "Waiting for client payment confirmation."}

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}



export default Finance;