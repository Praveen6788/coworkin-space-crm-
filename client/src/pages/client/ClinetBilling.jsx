import { useState } from "react"

import {
  Building2,
  Users,
  Calendar,
  CreditCard,
  FileText,
  BadgeCheck,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react"

function ClientBillingPage() {

  /* ---------------------------------------
     CLIENT DATA
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

    invoiceStatus: "Generated",

  })



  const [paymentDone,
    setPaymentDone] =
    useState(false)



  return (

    <div className="
      min-h-screen

      bg-[#F8FAFC]
      mt-15
      p-6 lg:p-8
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* HEADER */}

        <div className="mb-6">

          <p className="
            text-sky-600

            text-[11px]

            uppercase

            tracking-[0.18em]

            font-medium

            mb-3
          ">

            Client Portal

          </p>


          <h1 className="
            text-3xl
            lg:text-4xl

            font-semibold

            text-[#0F172A]

            mb-3
          ">

            Billing & Payments

          </h1>


          <p className="
            text-slate-500

            text-sm
          ">

            View invoices, quotations,
            payment status and workspace
            booking details.

          </p>

        </div>



        {/* PAYMENT HERO */}

        <div className="
          bg-gradient-to-r
          from-sky-500
          to-blue-600

          rounded-3xl

          p-6 lg:p-7

          text-white

          mb-6
        ">

          <div className="
            flex
            flex-col
            lg:flex-row

            lg:items-center
            lg:justify-between

            gap-6
          ">

            {/* LEFT */}

            <div>

              <p className="
                text-white/70

                text-[11px]

                uppercase

                tracking-[0.18em]

                mb-3
              ">

                Final Amount

              </p>


              <h2 className="
                text-4xl

                font-semibold

                mb-4
              ">

                {lead.finalAmount}

              </h2>


              <div className="
                flex flex-wrap

                items-center

                gap-3
              ">

                <div className="
                  px-3 py-1.5

                  rounded-full

                  bg-white/10

                  text-[12px]
                  font-medium
                ">

                  Invoice #{lead.invoiceNumber}

                </div>


                <div className={`
                  px-3 py-1.5

                  rounded-full

                  text-[12px]
                  font-medium

                  ${paymentDone

                    ? "bg-emerald-400/20 text-emerald-100"

                    : "bg-amber-400/20 text-amber-100"
                  }
                `}>

                  {paymentDone
                    ? "Payment Completed"
                    : "Payment Pending"}

                </div>

              </div>

            </div>



            {/* RIGHT */}

            <div className="
              flex
              flex-col
              items-start
              lg:items-end

              gap-3
            ">

              {!paymentDone ? (

                <button
                  onClick={() =>
                    setPaymentDone(true)
                  }
                  className="
                    h-12

                    px-6

                    rounded-2xl

                    bg-white

                    hover:bg-slate-100

                    transition-all duration-300

                    text-[#0F172A]
                    text-sm
                    font-semibold
                  "
                >

                  Pay Now

                </button>

              ) : (

                <button
                  className="
                    h-12

                    px-6

                    rounded-2xl

                    bg-emerald-500

                    text-white
                    text-sm
                    font-semibold

                    flex items-center gap-2
                  "
                >

                  <CheckCircle2 size={16} />

                  Booking Confirmed

                </button>

              )}


              <p className="
                text-white/70

                text-sm
              ">

                Secure online payment gateway

              </p>

            </div>

          </div>

        </div>



        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3

          gap-5
        ">

          {/* LEFT */}

          <div className="
            xl:col-span-2

            space-y-5
          ">

            {/* BOOKING DETAILS */}

            <div className="
              bg-white

              border border-slate-200

              rounded-2xl

              p-5
            ">

              <div className="
                flex items-center justify-between

                mb-5
              ">

                <div>

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    tracking-[0.15em]

                    mb-2
                  ">

                    Booking Details

                  </p>


                  <h2 className="
                    text-2xl

                    font-semibold

                    text-[#0F172A]
                  ">

                    {lead.name}

                  </h2>

                </div>


                <div className="
                  px-4 py-2

                  rounded-full

                  bg-slate-100

                  text-[12px]
                  font-medium

                  text-slate-700
                ">

                  {lead.company}

                </div>

              </div>



              {/* DETAILS GRID */}

              <div className="
                grid
                grid-cols-1
                md:grid-cols-2

                gap-4
              ">

                {/* BRANCH */}

                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <div className="
                    flex items-center gap-2

                    mb-3
                  ">

                    <Building2
                      size={15}
                      className="text-sky-500"
                    />

                    <p className="
                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400
                    ">

                      Branch

                    </p>

                  </div>


                  <h3 className="
                    text-sm

                    font-medium

                    text-[#0F172A]
                  ">

                    {lead.branch}

                  </h3>

                </div>



                {/* WORKSPACE */}

                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <div className="
                    flex items-center gap-2

                    mb-3
                  ">

                    <Users
                      size={15}
                      className="text-violet-500"
                    />

                    <p className="
                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400
                    ">

                      Workspace

                    </p>

                  </div>


                  <h3 className="
                    text-sm

                    font-medium

                    text-[#0F172A]
                  ">

                    {lead.workspace}

                  </h3>


                  <p className="
                    text-slate-500

                    text-xs

                    mt-1
                  ">

                    {lead.seats} Seats

                  </p>

                </div>



                {/* MOVE IN */}

                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <div className="
                    flex items-center gap-2

                    mb-3
                  ">

                    <Calendar
                      size={15}
                      className="text-emerald-500"
                    />

                    <p className="
                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400
                    ">

                      Move-In

                    </p>

                  </div>


                  <h3 className="
                    text-sm

                    font-medium

                    text-[#0F172A]
                  ">

                    {lead.moveIn}

                  </h3>

                </div>



                {/* AMOUNT */}

                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <div className="
                    flex items-center gap-2

                    mb-3
                  ">

                    <CircleDollarSign
                      size={15}
                      className="text-amber-500"
                    />

                    <p className="
                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      text-slate-400
                    ">

                      Final Amount

                    </p>

                  </div>


                  <h3 className="
                    text-lg

                    font-semibold

                    text-sky-600
                  ">

                    {lead.finalAmount}

                  </h3>

                </div>

              </div>

            </div>



            {/* PRICING SUMMARY */}

            <div className="
              bg-white

              border border-slate-200

              rounded-2xl

              p-5
            ">

              <div className="
                flex items-center justify-between

                mb-6
              ">

                <div>

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    tracking-[0.15em]

                    mb-2
                  ">

                    Quotation

                  </p>


                  <h2 className="
                    text-2xl

                    font-semibold

                    text-[#0F172A]
                  ">

                    Pricing Summary

                  </h2>

                </div>


                <BadgeCheck
                  size={20}
                  className="text-emerald-500"
                />

              </div>



              <div className="
                space-y-4
              ">

                <div className="
                  flex items-center justify-between
                ">

                  <p className="
                    text-slate-500

                    text-sm
                  ">

                    Workspace Price

                  </p>


                  <h3 className="
                    font-medium

                    text-[#0F172A]
                  ">

                    {lead.quotationAmount}

                  </h3>

                </div>



                <div className="
                  flex items-center justify-between
                ">

                  <p className="
                    text-slate-500

                    text-sm
                  ">

                    Discount

                  </p>


                  <h3 className="
                    font-medium

                    text-emerald-600
                  ">

                    - {lead.discount}

                  </h3>

                </div>



                <div className="
                  pt-4

                  border-t border-slate-100

                  flex items-center justify-between
                ">

                  <p className="
                    font-medium

                    text-[#0F172A]
                  ">

                    Final Amount

                  </p>


                  <h3 className="
                    text-2xl

                    font-semibold

                    text-sky-600
                  ">

                    {lead.finalAmount}

                  </h3>

                </div>

              </div>

            </div>

          </div>



          {/* RIGHT */}

          <div className="
            space-y-5
          ">

            {/* INVOICE */}

            <div className="
              bg-white

              border border-slate-200

              rounded-2xl

              p-5
            ">

              <div className="
                flex items-center justify-between

                mb-5
              ">

                <div>

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    tracking-[0.15em]

                    mb-2
                  ">

                    Invoice

                  </p>


                  <h2 className="
                    text-xl

                    font-semibold

                    text-[#0F172A]
                  ">

                    Invoice Details

                  </h2>

                </div>


                <FileText
                  size={20}
                  className="text-pink-500"
                />

              </div>



              <div className="
                space-y-3
              ">

                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    mb-2
                  ">

                    Invoice Number

                  </p>


                  <h3 className="
                    text-sm

                    font-medium

                    text-[#0F172A]
                  ">

                    {lead.invoiceNumber}

                  </h3>

                </div>



                <div className="
                  bg-slate-50

                  border border-slate-100

                  rounded-xl

                  p-4
                ">

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    mb-2
                  ">

                    Invoice Status

                  </p>


                  <h3 className="
                    text-sm

                    font-medium

                    text-emerald-600
                  ">

                    {lead.invoiceStatus}

                  </h3>

                </div>

              </div>



              <button className="
                w-full

                h-11

                rounded-xl

                border border-slate-200

                hover:bg-slate-50

                transition-all duration-300

                text-[#0F172A]
                text-sm
                font-medium

                mt-5
              ">

                Download Invoice

              </button>

            </div>



            {/* PAYMENT STATUS */}

            <div className="
              bg-white

              border border-slate-200

              rounded-2xl

              p-5
            ">

              <div className="
                flex items-center justify-between

                mb-5
              ">

                <div>

                  <p className="
                    text-slate-400

                    text-[11px]

                    uppercase

                    tracking-[0.15em]

                    mb-2
                  ">

                    Payment Status

                  </p>


                  <h2 className="
                    text-xl

                    font-semibold

                    text-[#0F172A]
                  ">

                    Transaction

                  </h2>

                </div>


                <CreditCard
                  size={20}
                  className="text-emerald-500"
                />

              </div>



              {!paymentDone ? (

                <div className="
                  bg-amber-50

                  border border-amber-100

                  rounded-xl

                  p-4
                ">

                  <h3 className="
                    text-amber-700

                    font-semibold

                    mb-2
                  ">

                    Payment Pending

                  </h3>


                  <p className="
                    text-sm

                    text-slate-600
                  ">

                    Your workspace booking
                    is awaiting payment confirmation.

                  </p>

                </div>

              ) : (

                <div className="
                  bg-emerald-50

                  border border-emerald-100

                  rounded-xl

                  p-4
                ">

                  <h3 className="
                    text-emerald-700

                    font-semibold

                    mb-2
                  ">

                    Payment Successful

                  </h3>


                  <p className="
                    text-sm

                    text-slate-600
                  ">

                    Your workspace booking
                    has been confirmed successfully.

                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default ClientBillingPage