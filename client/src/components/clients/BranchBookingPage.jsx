import { useParams } from "react-router-dom";
import { branches } from "../../data/branches";

function BranchBookingPage() {

  const { slug } = useParams();

  const branch = branches.find(
    (item) => item.slug === slug
  );



  if (!branch) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        Branch not found

      </div>

    );

  }



  return (

    <div className="bg-[#FAFAFA] min-h-screen">

      {/* HERO */}

      <section className="relative h-[420px] overflow-hidden">

        <img
          src={branch.image}
          alt={branch.name}
          className="absolute inset-0 w-full h-full object-cover"
        />



        <div className="absolute inset-0 bg-black/50"></div>



        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-end pb-12">

          <div>

            <p className="text-white/70 text-sm mb-3">

              Hyderabad Workspace

            </p>

            <h1 className="text-[56px] leading-none font-semibold text-white mb-5">

              {branch.name}

            </h1>

            <p className="text-white/80 text-[16px] max-w-3xl">

              {branch.address}

            </p>

          </div>

        </div>

      </section>



      {/* CONTENT */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT */}

            <div className="lg:col-span-2">

              {/* PRICING */}

              <div className="bg-white border border-slate-200 rounded-[32px] p-8 mb-8">

                <h2 className="text-[34px] font-semibold mb-8">

                  Workspace Pricing

                </h2>



                <div className="space-y-5">

                  {branch.pricing.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between border border-slate-100 rounded-2xl p-5"
                    >

                      <div>

                        <h3 className="text-[20px] font-semibold text-[#0F172A] mb-2">

                          {item.category}

                        </h3>

                        <p className="text-slate-500 text-sm">

                          {item.duration}

                        </p>

                      </div>



                      <div className="text-right">

                        <h3 className="text-[28px] font-semibold text-sky-600 mb-2">

                          {item.price}

                        </h3>



                        <div className="flex flex-wrap justify-end gap-2">

                          {item.seaters?.map((seat, idx) => (

                            <div
                              key={idx}
                              className="px-3 py-1 rounded-full bg-slate-100 text-[12px]"
                            >

                              {seat}

                            </div>

                          ))}

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>



              {/* AMENITIES */}

              <div className="bg-white border border-slate-200 rounded-[32px] p-8">

                <h2 className="text-[34px] font-semibold mb-8">

                  Amenities

                </h2>



                <div className="flex flex-wrap gap-4">

                  {branch.amenities.map((item, index) => (

                    <div
                      key={index}
                      className="px-5 py-3 rounded-2xl bg-slate-100 text-sm font-medium"
                    >

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>



            {/* RIGHT */}

            <div>

              <div className="bg-white border border-slate-200 rounded-[32px] p-8 sticky top-24">

                <h2 className="text-[30px] font-semibold mb-6">

                  Book Workspace

                </h2>



                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none"
                  />



                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none"
                  />



                  <select className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none">

                    {branch.pricing.map((item, index) => (

                      <option key={index}>

                        {item.category}

                      </option>

                    ))}

                  </select>



                  <button className="w-full h-14 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white font-medium">

                    Book Now

                  </button>

                </div>



                {/* STATS */}

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="bg-slate-50 rounded-2xl p-4">

                    <p className="text-xs text-slate-400 mb-2">

                      OCCUPANCY

                    </p>

                    <h3 className="text-2xl font-semibold">

                      {branch.occupancy}%

                    </h3>

                  </div>



                  <div className="bg-slate-50 rounded-2xl p-4">

                    <p className="text-xs text-slate-400 mb-2">

                      AVAILABLE

                    </p>

                    <h3 className="text-2xl font-semibold">

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