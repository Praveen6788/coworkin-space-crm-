import { useState } from "react"

import {
  useParams,
  useNavigate,
} from "react-router-dom"

import {
  MapPin,
  Building2,
  ShieldCheck,
  Clock3,
} from "lucide-react"

import { branches } from "../../data/branches"

import { createLead } from "../../Api/lead"

function BranchBookingPage() {

  const { slug } = useParams()

  const navigate =
    useNavigate()

  const branch =
    branches.find(
      (item) =>
        item.slug === slug
    )

  const [loading, setLoading] =
    useState(false)

  const [formData, setFormData] =
    useState({

      name: "",

      phone: "",

      email: "",

      company: "",

      workspace:
        branch?.pricing?.[0]
          ?.category ||
        "Private Cabin",

      seats: 4,

      moveIn: "",

      budget: "",

      priority: "Medium",

    })


  /* HANDLE INPUT */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    })

  }


  /* HANDLE BOOKING */

  const handleBooking =
    async () => {

      try {

        setLoading(true)

        const newLead = {

          name:
            formData.name,

          phone:
            formData.phone,

          email:
            formData.email,

          company:
            formData.company,

          branch:
            branch.name,

          workspace:
            formData.workspace,

          seats:
            Number(
              formData.seats
            ),

          moveIn:
            formData.moveIn ||
            "Immediate",

          budget:
            formData.budget,

          stage: "new",

          priority:
            formData.priority,

          quotationAmount:
            formData.budget ||
            "₹65,000",

          discount:
            "₹5,000",

          finalAmount:
            formData.budget ||
            "₹60,000",

          quotationStatus:
            "Pending",

          paymentStatus:
            "Pending",

          invoiceStatus:
            "Not Generated",

          bookingStatus:
            "Enquiry",

          accessStatus:
            "Pending",

        }

        const response =
          await createLead(
            newLead
          )

        alert(
          "Workspace enquiry submitted successfully"
        )

        navigate(
          `/client/tracker/${response._id}`
        )

      } catch (error) {

        console.log(error)

        alert(
          "Failed to submit enquiry"
        )

      } finally {

        setLoading(false)

      }

    }


  if (!branch) {

    return (

      <div className="
        min-h-screen

        flex items-center justify-center
      ">

        Branch not found

      </div>

    )

  }


  return (

    <div className="
      min-h-screen

      bg-[#F8FAFC]
    ">

      {/* HERO */}

      <section className="
        relative mt-20

        h-[35vh]
        min-h-[280px]

        overflow-hidden
      ">

        <img
          src={branch.image}
          alt={branch.name}
          className="
            absolute inset-0

            w-full h-full

            object-cover
          "
        />

        <div className="
          absolute inset-0

          bg-black/60
        "></div>


        <div className="
          relative z-10

          max-w-7xl
          mx-auto

          px-6 lg:px-12

          h-full

          flex items-center
        ">

          <div className="w-full">

            <div className="
              inline-flex items-center gap-2

              px-3 py-1.5

              rounded-full

              bg-white/10

              backdrop-blur-sm

              text-white
              text-[11px]
              font-medium

              mb-4
            ">

              <Building2 size={13} />

              Premium Workspace

            </div>


            <h1 className="
              text-4xl
              lg:text-5xl

              leading-none

              font-semibold

              text-white

              mb-3
            ">

              {branch.name}

            </h1>


            <div className="
              flex items-center gap-2

              text-white/80

              text-sm

              mb-5
            ">

              <MapPin size={14} />

              {branch.address}

            </div>



            {/* AMENITIES */}

            <div className="
              flex flex-wrap

              gap-2
            ">

              {branch.amenities
                ?.slice(0, 6)
                .map((item, index) => (

                  <div
                    key={index}
                    className="
                      px-3 py-2

                      rounded-xl

                      bg-white/10

                      backdrop-blur-sm

                      border border-white/10

                      text-white
                      text-[12px]
                      font-medium

                      flex items-center gap-2
                    "
                  >

                    <div className="
                      w-1.5 h-1.5

                      rounded-full

                      bg-emerald-400
                    "></div>

                    {item}

                  </div>

                ))}

            </div>

          </div>

        </div>

      </section>



      {/* MAIN */}

      <section className="py-8">

        <div className="
          max-w-7xl
          mx-auto

          px-6 lg:px-12
        ">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-3

            gap-5
          ">

            {/* LEFT */}

            <div className="
              lg:col-span-2

              space-y-5
            ">

              {/* PRICING */}

              <div className="
                bg-white

                border border-slate-200

                rounded-2xl

                p-5
              ">

                {/* HEADER */}

                <div className="
                  flex items-center justify-between

                  mb-5
                ">

                  <div>

                    <p className="
                      text-[11px]

                      uppercase

                      tracking-[0.18em]

                      text-sky-600

                      font-medium

                      mb-2
                    ">

                      Workspace Plans

                    </p>


                    <h2 className="
                      text-2xl

                      font-semibold

                      text-[#0F172A]
                    ">

                      Flexible Pricing

                    </h2>

                  </div>


                  <div className="
                    px-3 py-2

                    rounded-xl

                    bg-sky-50

                    border border-sky-100

                    text-sky-600
                    text-[12px]
                    font-medium
                  ">

                    {branch.pricing.length} Plans

                  </div>

                </div>



                {/* PRICING GRID */}

                <div className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-3

                  gap-3
                ">

                  {branch.pricing.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="
                          border border-slate-200

                          rounded-2xl

                          p-4

                          bg-slate-50/70

                          hover:bg-white
                          hover:shadow-md
                          hover:border-sky-200

                          transition-all duration-300
                        "
                      >

                        {/* TOP */}

                        <div className="
                          flex items-start justify-between

                          mb-4
                        ">

                          <div>

                            <h3 className="
                              text-[15px]

                              font-semibold

                              text-[#0F172A]

                              mb-1
                            ">

                              {item.category}

                            </h3>

                            <p className="
                              text-[12px]

                              text-slate-500
                            ">

                              {item.duration}

                            </p>

                          </div>


                          <div className="
                            text-right
                          ">

                            <p className="
                              text-[10px]

                              uppercase

                              tracking-[0.15em]

                              text-slate-400

                              mb-1
                            ">

                              From

                            </p>

                            <h3 className="
                              text-[18px]

                              font-semibold

                              text-sky-600
                            ">

                              {item.price}

                            </h3>

                          </div>

                        </div>



                        {/* SEATERS */}

                        <div className="
                          flex flex-wrap

                          gap-2
                        ">

                          {item.seaters
                            ?.slice(0, 4)
                            .map(
                              (
                                seat,
                                idx
                              ) => (

                                <div
                                  key={idx}
                                  className="
                                    px-2.5 py-1

                                    rounded-lg

                                    bg-white

                                    border border-slate-200

                                    text-[11px]
                                    font-medium

                                    text-slate-600
                                  "
                                >

                                  {seat}

                                </div>

                              )
                            )}

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>



            {/* RIGHT FORM */}

            <div>

              <div className="
                bg-white

                border border-slate-200

                rounded-2xl

                p-5
              ">

                <p className="
                  text-[11px]

                  uppercase

                  tracking-[0.18em]

                  text-sky-600

                  font-medium

                  mb-2
                ">

                  Instant Enquiry

                </p>


                <h2 className="
                  text-2xl

                  font-semibold

                  text-[#0F172A]

                  mb-5
                ">

                  Book Workspace

                </h2>



                {/* FORM */}

                <div className="
                  space-y-3
                ">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <select
                    name="workspace"
                    value={formData.workspace}
                    onChange={handleChange}
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  >

                    {branch.pricing.map(
                      (
                        item,
                        index
                      ) => (

                        <option
                          key={index}
                        >

                          {item.category}

                        </option>

                      )
                    )}

                  </select>

                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="Seats Required"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <input
                    type="date"
                    name="moveIn"
                    value={formData.moveIn}
                    onChange={handleChange}
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Expected Budget"
                    className="
                      w-full

                      h-10

                      px-4

                      rounded-xl

                      border border-slate-200

                      outline-none

                      text-sm
                    "
                  />

                  <button
                    onClick={handleBooking}
                    disabled={loading}
                    className="
                      w-full

                      h-11

                      rounded-xl

                      bg-sky-500
                      hover:bg-sky-600

                      transition-all duration-300

                      text-white
                      text-sm
                      font-semibold
                    "
                  >

                    {loading
                      ? "Submitting..."
                      : "Submit Enquiry"}

                  </button>

                </div>



                {/* STATS */}

                <div className="
                  grid
                  grid-cols-2

                  gap-3

                  mt-5
                ">

                  <div className="
                    bg-slate-50

                    rounded-xl

                    border border-slate-100

                    p-4
                  ">

                    <div className="
                      flex items-center gap-2

                      text-slate-400

                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      mb-2
                    ">

                      <Clock3 size={12} />

                      Occupancy

                    </div>


                    <h3 className="
                      text-[20px]

                      font-semibold

                      text-[#0F172A]
                    ">

                      {branch.occupancy}%

                    </h3>

                  </div>



                  <div className="
                    bg-slate-50

                    rounded-xl

                    border border-slate-100

                    p-4
                  ">

                    <div className="
                      flex items-center gap-2

                      text-slate-400

                      text-[11px]

                      uppercase

                      tracking-[0.15em]

                      mb-2
                    ">

                      <ShieldCheck size={12} />

                      Available

                    </div>


                    <h3 className="
                      text-[20px]

                      font-semibold

                      text-[#0F172A]
                    ">

                      {branch.availableSeats}

                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}

export default BranchBookingPage