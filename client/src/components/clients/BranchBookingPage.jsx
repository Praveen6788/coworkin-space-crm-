import { useState } from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import { branches } from "../../data/branches";

import { createLead } from "../../Api/lead";

function BranchBookingPage() {

  const { slug } = useParams();

  const navigate = useNavigate();



  const branch = branches.find(
    (item) => item.slug === slug
  );



  const [loading, setLoading] =
    useState(false);



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

      priority: "Medium"

    });



  /* -----------------------------------
     HANDLE CHANGE
  ----------------------------------- */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };



  /* -----------------------------------
     HANDLE BOOKING
  ----------------------------------- */

  const handleBooking =
    async () => {

      try {

        setLoading(true);



        const newLead = {

          /* CLIENT */

          name:
            formData.name,



          phone:
            formData.phone,



          email:
            formData.email,



          company:
            formData.company,



          /* WORKSPACE */

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



          /* PIPELINE */

          stage: "new",



          priority:
            formData.priority,



          /* FINANCE */

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
            "Pending"

        };



        console.log(
          "Creating Lead:",
          newLead
        );



        const response =
          await createLead(
            newLead
          );



        alert(
          "Workspace enquiry submitted successfully"
        );



        /* REDIRECT */

        navigate(
          `/client/tracker/${response._id}`
        );



      } catch (error) {

        console.log(error);



        alert(
          "Failed to submit enquiry"
        );

      } finally {

        setLoading(false);

      }

    };



  if (!branch) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        Branch not found

      </div>

    );

  }



  return (

    <div className="bg-[#F8FAFC] min-h-screen">



      {/* HERO */}



      <section className="relative h-[340px] overflow-hidden">

        <img
          src={branch.image}
          alt={branch.name}
          className="absolute inset-0 w-full h-full object-cover"
        />



        <div className="absolute inset-0 bg-black/60"></div>



        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-end pb-12">

          <div>

            <p className="text-white/70 text-sm mb-3">

              Premium Workspace

            </p>



            <h1 className="text-[50px] leading-none font-semibold text-white mb-5">

              {branch.name}

            </h1>



            <p className="text-white/80 text-[15px] max-w-3xl">

              {branch.address}

            </p>

          </div>

        </div>

      </section>



      {/* MAIN SECTION */}



      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">



            {/* LEFT SIDE */}



            <div className="lg:col-span-2">



              {/* PRICING */}



              <div className="bg-white border border-slate-200 rounded-[30px] p-6 mb-7">

                <div className="flex items-center justify-between mb-7">

                  <div>

                    <p className="text-sky-500 text-[11px] uppercase tracking-[0.22em] font-medium mb-2">

                      Workspace Plans

                    </p>



                    <h2 className="text-[30px] font-semibold text-[#0F172A]">

                      Flexible Pricing

                    </h2>

                  </div>



                  <div className="px-4 h-10 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[13px] font-medium flex items-center">

                    {branch.pricing.length} Plans

                  </div>

                </div>



                <div className="space-y-4">

                  {branch.pricing.map((item, index) => (

                    <div
                      key={index}
                      className="border border-slate-100 rounded-[24px] p-5 hover:border-sky-100 transition"
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <h3 className="text-[18px] font-semibold text-[#0F172A] mb-2">

                            {item.category}

                          </h3>



                          <p className="text-slate-500 text-sm">

                            {item.duration}

                          </p>



                          <div className="flex flex-wrap gap-2 mt-4">

                            {item.seaters?.map(
                              (seat, idx) => (

                                <div
                                  key={idx}
                                  className="px-3 py-2 rounded-full bg-slate-100 text-[11px] font-medium text-slate-600"
                                >

                                  {seat}

                                </div>

                              )

                            )}

                          </div>

                        </div>



                        <div className="text-right">

                          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">

                            Starting From

                          </p>



                          <h3 className="text-[24px] font-semibold text-sky-600">

                            {item.price}

                          </h3>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>



              {/* AMENITIES */}



              <div className="bg-white border border-slate-200 rounded-[30px] p-6">

                <h2 className="text-[28px] font-semibold text-[#0F172A] mb-7">

                  Amenities

                </h2>



                <div className="flex flex-wrap gap-3">

                  {branch.amenities.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="px-5 py-3 rounded-2xl bg-slate-100 text-sm font-medium text-slate-700"
                      >

                        {item}

                      </div>

                    )

                  )}

                </div>

              </div>

            </div>



            {/* RIGHT SIDE FORM */}



            <div>

              <div className="bg-white border border-slate-200 rounded-[30px] p-6 sticky top-24">

                <p className="text-sky-500 text-[11px] uppercase tracking-[0.22em] font-medium mb-2">

                  Instant Enquiry

                </p>



                <h2 className="text-[30px] font-semibold text-[#0F172A] mb-7">

                  Book Workspace

                </h2>



                <div className="space-y-4">



                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <select
                    name="workspace"
                    value={formData.workspace}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  >

                    {branch.pricing.map((item, index) => (

                      <option key={index}>

                        {item.category}

                      </option>

                    ))}

                  </select>



                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="Seats Required"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <input
                    type="date"
                    name="moveIn"
                    value={formData.moveIn}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Expected Budget"
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  />



                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none text-sm"
                  >

                    <option>

                      High

                    </option>



                    <option>

                      Medium

                    </option>



                    <option>

                      Low

                    </option>

                  </select>



                  {/* BUTTON */}



                  <button
                    onClick={handleBooking}
                    disabled={loading}
                    className="w-full h-13 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-semibold"
                  >

                    {loading
                      ? "Submitting..."
                      : "Submit Enquiry"}

                  </button>

                </div>



                {/* STATS */}



                <div className="grid grid-cols-2 gap-4 mt-7">

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">

                      Occupancy

                    </p>



                    <h3 className="text-[24px] font-semibold text-[#0F172A]">

                      {branch.occupancy}%

                    </h3>

                  </div>



                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">

                      Available

                    </p>



                    <h3 className="text-[24px] font-semibold text-[#0F172A]">

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

  );
}

export default BranchBookingPage;