import { useState } from "react";

import {
  Phone,
  Mail,
  Building2,
  Users,
  Calendar,
  CreditCard,
  BadgeCheck,
  CircleDollarSign,
  ArrowUpRight,
  FileText
} from "lucide-react";



function FinancePage() {

  const [lead] = useState({

    name: "Rahul Sharma",

    company: "StartupX Labs",

    phone: "+91 9876543210",

    email: "rahul@startupx.com",

    branch: "Madhapur",

    workspace: "Private Cabin",

    seats: 8,

    moveIn: "10 Aug 2025",



    quotation: "₹75,000",

    discount: "₹5,000",

    finalAmount: "₹70,000",



    paymentStatus: "Pending",

    invoiceStatus: "Generated"

  });



  const workflow = [

    {
      title: "Quotation Sent",
      status: "completed"
    },

    {
      title: "Invoice Generated",
      status: "completed"
    },

    {
      title: "Payment Pending",
      status: "active"
    },

    {
      title: "Move-In Approval",
      status: "upcoming"
    }

  ];



  return (

    <div className="min-h-screen bg-[#020617] text-white p-5 lg:p-7 mt-14">



      {/* HEADER */}



      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

        <div>

          <p className="text-sky-400 text-[10px] tracking-[0.28em] uppercase mb-2">

            Branch Finance

          </p>



          <h1 className="text-3xl font-semibold mb-3">

            Finance & Billing

          </h1>



          <p className="text-slate-400 text-sm">

            Manage onboarding, quotations,
            invoices and workspace payments.

          </p>

        </div>



        <button className="h-10 px-5 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-sm font-medium">

          Export Report

        </button>

      </div>



      {/* TOP KPI */}



      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">



        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-4">

          <p className="text-slate-500 text-xs mb-2">

            Revenue

          </p>



          <h2 className="text-2xl font-semibold">

            ₹8.2L

          </h2>

        </div>



        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-4">

          <p className="text-slate-500 text-xs mb-2">

            Pending

          </p>



          <h2 className="text-2xl font-semibold text-amber-300">

            ₹1.2L

          </h2>

        </div>



        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-4">

          <p className="text-slate-500 text-xs mb-2">

            Paid

          </p>



          <h2 className="text-2xl font-semibold text-emerald-300">

            ₹6.8L

          </h2>

        </div>



        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-4">

          <p className="text-slate-500 text-xs mb-2">

            New Clients

          </p>



          <h2 className="text-2xl font-semibold text-sky-300">

            12

          </h2>

        </div>

      </div>



      {/* MAIN GRID */}



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">



        {/* LEFT SIDE */}



        <div className="xl:col-span-2 space-y-5">



          {/* CLIENT CARD */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-start justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Client Overview

                </p>



                <h2 className="text-2xl font-semibold mb-1">

                  {lead.name}

                </h2>



                <p className="text-slate-400 text-sm">

                  {lead.company}

                </p>

              </div>



              <div className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-medium">

                {lead.paymentStatus}

              </div>

            </div>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <Phone
                  size={15}
                  className="text-sky-400 mb-3"
                />



                <p className="text-slate-500 text-xs mb-1">

                  Phone

                </p>



                <h3 className="text-sm">

                  {lead.phone}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <Mail
                  size={15}
                  className="text-violet-400 mb-3"
                />



                <p className="text-slate-500 text-xs mb-1">

                  Email

                </p>



                <h3 className="text-sm truncate">

                  {lead.email}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <Building2
                  size={15}
                  className="text-emerald-400 mb-3"
                />



                <p className="text-slate-500 text-xs mb-1">

                  Branch

                </p>



                <h3 className="text-sm">

                  {lead.branch}

                </h3>

              </div>



              <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">

                <Users
                  size={15}
                  className="text-amber-400 mb-3"
                />



                <p className="text-slate-500 text-xs mb-1">

                  Workspace

                </p>



                <h3 className="text-sm">

                  {lead.workspace}

                </h3>

              </div>

            </div>

          </div>



          {/* WORKFLOW */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Finance Workflow

                </p>



                <h2 className="text-2xl font-semibold">

                  Booking Flow

                </h2>

              </div>



              <ArrowUpRight
                size={18}
                className="text-sky-400"
              />

            </div>



            <div className="space-y-3">

              {workflow.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3"
                >

                  <div className="flex items-center gap-3">

                    <div className={`w-3 h-3 rounded-full ${
                      item.status === "completed"

                        ? "bg-emerald-400"

                        : item.status === "active"

                        ? "bg-amber-400"

                        : "bg-slate-600"
                    }`} />



                    <h3 className="text-sm font-medium">

                      {item.title}

                    </h3>

                  </div>



                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${
                    item.status === "completed"

                      ? "bg-emerald-500/10 text-emerald-300"

                      : item.status === "active"

                      ? "bg-amber-500/10 text-amber-300"

                      : "bg-white/5 text-slate-400"
                  }`}>

                    {item.status}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* RIGHT SIDEBAR */}



        <div className="space-y-5">



          {/* PRICING */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Pricing

                </p>



                <h2 className="text-xl font-semibold">

                  Quotation

                </h2>

              </div>



              <CircleDollarSign
                size={18}
                className="text-sky-400"
              />

            </div>



            <div className="space-y-3">



              <div className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4">

                <p className="text-slate-400 text-sm">

                  Quotation

                </p>



                <h3 className="font-medium">

                  {lead.quotation}

                </h3>

              </div>



              <div className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4">

                <p className="text-slate-400 text-sm">

                  Discount

                </p>



                <h3 className="font-medium text-amber-300">

                  {lead.discount}

                </h3>

              </div>



              <div className="flex items-center justify-between bg-sky-500/10 border border-sky-500/20 rounded-2xl p-4">

                <p className="text-slate-300 text-sm">

                  Final Amount

                </p>



                <h3 className="font-semibold text-sky-300 text-lg">

                  {lead.finalAmount}

                </h3>

              </div>

            </div>



            <div className="grid grid-cols-2 gap-3 mt-5">

              <button className="h-9 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-[11px] font-medium">

                Send Quote

              </button>



              <button className="h-9 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-[11px] font-medium">

                Generate Invoice

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



                <h2 className="text-xl font-semibold">

                  Billing Status

                </h2>

              </div>



              <CreditCard
                size={18}
                className="text-emerald-400"
              />

            </div>



            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 mb-4">

              <h3 className="text-amber-300 font-medium mb-1">

                Payment Pending

              </h3>



              <p className="text-sm text-slate-300">

                Waiting for payment
                confirmation from client.

              </p>

            </div>



            <div className="grid grid-cols-2 gap-3">

              <button className="h-9 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-[11px] font-medium">

                Mark Paid

              </button>



              <button className="h-9 rounded-2xl border border-white/10 hover:bg-white/[0.03] transition text-[11px] font-medium">

                Send Invoice

              </button>

            </div>

          </div>



          {/* MOVE IN */}



          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">

                  Move-In

                </p>



                <h2 className="text-xl font-semibold">

                  Access Approval

                </h2>

              </div>



              <BadgeCheck
                size={18}
                className="text-emerald-400"
              />

            </div>



            <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 mb-4">

              <div className="flex items-center justify-between mb-2">

                <p className="text-slate-400 text-xs">

                  Move-In Date

                </p>



                <Calendar
                  size={14}
                  className="text-slate-500"
                />

              </div>



              <h3 className="font-medium">

                {lead.moveIn}

              </h3>

            </div>



            <button className="w-full h-9 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-[11px] font-medium">

              Approve Access

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}



export default FinancePage;