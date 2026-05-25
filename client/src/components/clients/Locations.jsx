import { Link } from "react-router-dom";
import { branches } from "../../data/branches";
import SectionHeader from "../ui/SectionHeader";

function Locations() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}

        <SectionHeader
          badge="Locations"
          title="Explore Our Locations"
          description="Premium coworking spaces across Hyderabad designed for modern teams and professionals."
        />



        {/* GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

          {branches.map((branch) => (

            <div
              key={branch.id}
              className="group bg-white border border-slate-200 rounded-[26px] overflow-hidden hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300"
            >

              {/* IMAGE */}

              <div className="relative h-[220px] overflow-hidden">

                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />



                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>



                {/* NAME */}

                <div className="absolute bottom-5 left-5">

                  <h3 className="text-[22px] leading-tight font-semibold text-white">

                    {branch.name}

                  </h3>

                </div>

              </div>



              {/* BUTTON */}

              <div className="p-4">

                <Link
                  to={`/bookings/${branch.slug}`}
                  className="w-full h-11 rounded-2xl bg-sky-500 hover:bg-sky-600 transition text-white text-sm font-medium flex items-center justify-center"
                >

                  Book Now

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Locations;