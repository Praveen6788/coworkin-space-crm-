import { useState } from "react";

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



function FinancePage() {



  /* ---------------------------------------
     FAKE DATA
  --------------------------------------- */



  const [lead] = useState({

    name: "Rahul Sharma",

    phone: "+91 9876543210",

    email: "rahul@startupx.com",

    company: "StartupX Labs",

    branch: "Madhapur",

    workspace: "Private Cabin",

    seats: 8,

    moveIn: "2025-08-10",



    quotationAmount: "₹75,000",

    discount: "₹5,000",

    finalAmount: "₹70,000",



    quotationStatus: "Sent",



    paymentStatus: "Pending",



    invoiceNumber: "INV-2039",



    invoiceStatus: "Generated"

  });



  const [quotation,
    setQuotation] =
    useState({

      quotationAmount:
        lead.quotationAmount,



      discount:
        lead.discount,



      finalAmount:
        lead.finalAmount

    });



  return (

    <div className="min-h-screen bg-[#020617] p-6">



      {/* HEADER */}



      <div className="mb-8">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          Branch Finance

        </p>



        <h1 className="text-[40px] font-semibold text-white mb-4">

          Finance & Billing

        </h1>



        <p className="text-slate-400 text-sm">

          Manage quotations,
          invoices, payment
          approvals and move-ins.

        </p>

      </div>



      {/* GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">



        {/* LEFT */}



        <div className="xl:col-span-2 space-y-6">



          {/* CLIENT DETAILS */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Client Details

                </p>



                <h2 className="text-[26px] font-semibold text-white">

                  {lead.name}

                </h2>

              </div>



              <div className={`px-4 py-2 rounded-full text-[11px] font-medium ${
                lead.paymentStatus ===
                "Paid"

                  ? "bg-emerald-500/10 text-emerald-300"

                  : "bg-amber-500/10 text-amber-300"
              }`}>

                {lead.paymentStatus}

              </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

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



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

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

                  {lead.email}

                </h3>

              </div>



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

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



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

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



        {/* RIGHT */}



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

                  {lead.invoiceNumber}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <p className="text-slate-500 text-[11px] uppercase mb-2">

                  Invoice Status

                </p>



                <h3 className="text-white text-sm font-medium">

                  {lead.invoiceStatus}

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

                  Move-In

                </p>



                <h2 className="text-[22px] font-semibold text-white">

                  Access Control

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

                {lead.moveIn}

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



            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">

              <h3 className="text-amber-300 font-semibold mb-2">

                Payment Pending

              </h3>



              <p className="text-sm text-slate-300">

                Waiting for client
                payment confirmation.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}



export default FinancePage;