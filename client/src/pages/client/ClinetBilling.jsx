import { useState } from "react";

import {

  Building2,

  Users,

  Calendar,

  CreditCard,

  FileText,

  BadgeCheck,

  CircleDollarSign

} from "lucide-react";



function ClientBillingPage() {



  /* ---------------------------------------
     FAKE CLIENT DATA
  --------------------------------------- */



  const [lead] = useState({

    name: "Rahul Sharma",

    company: "StartupX Labs",

    branch: "Madhapur",

    workspace: "Private Cabin",

    seats: 8,

    moveIn: "2025-08-10",



    quotationAmount: "₹75,000",

    discount: "₹5,000",

    finalAmount: "₹70,000",



    quotationStatus: "Accepted",



    paymentStatus: "Pending",



    invoiceNumber: "INV-2039",



    invoiceStatus: "Generated"

  });



  const [paymentDone,
    setPaymentDone] =
    useState(false);



  return (

    <div className="min-h-screen bg-[#020617] p-6">



      {/* HEADER */}



      <div className="mb-8">

        <p className="text-sky-400 text-[11px] uppercase tracking-[0.3em] font-medium mb-3">

          Client Portal

        </p>



        <h1 className="text-[40px] font-semibold text-white mb-4">

          Billing & Payments

        </h1>



        <p className="text-slate-400 text-sm">

          View quotation,
          invoices and complete
          workspace payment.

        </p>

      </div>



      {/* GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">



        {/* LEFT SIDE */}



        <div className="xl:col-span-2 space-y-6">



          {/* BOOKING DETAILS */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Booking Details

                </p>



                <h2 className="text-[26px] font-semibold text-white">

                  {lead.name}

                </h2>

              </div>



              <div className={`px-4 py-2 rounded-full text-[11px] font-medium ${
                paymentDone

                  ? "bg-emerald-500/10 text-emerald-300"

                  : "bg-amber-500/10 text-amber-300"
              }`}>

                {paymentDone
                  ? "Paid"
                  : "Pending"}

              </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

                <div className="flex items-center gap-2 mb-3">

                  <Building2
                    size={15}
                    className="text-sky-400"
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
                    className="text-violet-400"
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



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

                <div className="flex items-center gap-2 mb-3">

                  <Calendar
                    size={15}
                    className="text-emerald-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Move-In

                  </p>

                </div>



                <h3 className="text-white text-sm font-medium">

                  {lead.moveIn}

                </h3>

              </div>



              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">

                <div className="flex items-center gap-2 mb-3">

                  <CircleDollarSign
                    size={15}
                    className="text-amber-400"
                  />



                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">

                    Final Amount

                  </p>

                </div>



                <h3 className="text-sky-400 text-lg font-semibold">

                  {lead.finalAmount}

                </h3>

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

                  Pricing Summary

                </h2>

              </div>



              <BadgeCheck
                size={20}
                className="text-emerald-400"
              />

            </div>



            <div className="space-y-4">



              <div className="flex items-center justify-between">

                <p className="text-slate-500 text-sm">

                  Workspace Price

                </p>



                <h3 className="text-white font-medium">

                  {lead.quotationAmount}

                </h3>

              </div>



              <div className="flex items-center justify-between">

                <p className="text-slate-500 text-sm">

                  Discount

                </p>



                <h3 className="text-emerald-400 font-medium">

                  - {lead.discount}

                </h3>

              </div>



              <div className="pt-4 border-t border-white/10 flex items-center justify-between">

                <p className="text-white font-medium">

                  Final Amount

                </p>



                <h3 className="text-[24px] font-semibold text-sky-400">

                  {lead.finalAmount}

                </h3>

              </div>

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

                  Invoice Details

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

            </div>



            <button className="w-full h-11 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-white text-sm font-medium mt-5">

              Download Invoice

            </button>

          </div>



          {/* PAYMENT */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Payment

                </p>



                <h2 className="text-[22px] font-semibold text-white">

                  Complete Payment

                </h2>

              </div>



              <CreditCard
                size={20}
                className="text-emerald-400"
              />

            </div>



            {!paymentDone ? (

              <>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 mb-5">

                  <h3 className="text-amber-300 font-semibold mb-2">

                    Payment Pending

                  </h3>



                  <p className="text-sm text-slate-300">

                    Your workspace
                    booking is awaiting
                    payment confirmation.

                  </p>

                </div>



                <button
                  onClick={() =>
                    setPaymentDone(true)
                  }
                  className="w-full h-12 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium"
                >

                  Pay Now

                </button>

              </>

            ) : (

              <>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-5">

                  <h3 className="text-emerald-300 font-semibold mb-2">

                    Payment Successful

                  </h3>



                  <p className="text-sm text-slate-300">

                    Your workspace
                    booking has been
                    confirmed successfully.

                  </p>

                </div>



                <button className="w-full h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-medium">

                  Booking Confirmed

                </button>

              </>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}



export default ClientBillingPage;