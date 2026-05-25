import { Link } from "react-router-dom";

function WorkspaceOptions() {

  const options = [

    {
      title: "Private Cabin",

      filter: "Private Cabin",

      description:
        "Ready-to-move office spaces for growing teams.",

      capacity: "2 to 200+ people",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
    },



    {
      title: "Hot Desks",

      filter: "Hot Desks",

      description:
        "Flexible shared desks for modern professionals.",

      capacity: "1 to 10 people",

      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop"
    },



    {
      title: "Meeting Room",

      filter: "Meeting Room",

      description:
        "Professional meeting spaces by the hour.",

      capacity: "1 to 30 people",

      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
    },



    {
      title: "Day Pass",

      filter: "Day Pass",

      description:
        "Flexible access to premium coworking spaces.",

      capacity: "1 to 5 people",

      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop"
    }

  ];



  return (

    <section className="py-20 bg-[#FAFAFA]">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}

        <div className="mb-14">

          <h2 className="text-[40px] leading-tight tracking-[-0.03em] font-semibold text-[#0F172A] mb-4">

            What are you looking for?

          </h2>



          <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">

            Flexible workspace solutions tailored for startups,
            freelancers and modern teams.

          </p>

        </div>



        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {options.map((option, index) => (

            <Link
              key={index}
              to={`/bookings?workspace=${encodeURIComponent(option.filter)}`}
              className="group bg-white border border-slate-200 rounded-[26px] p-5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] hover:-translate-y-1 transition duration-300"
            >

              {/* IMAGE */}

              <div className="h-[190px] rounded-[20px] overflow-hidden bg-slate-100 mb-7">

                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>



              {/* TITLE */}

              <h3 className="text-[22px] leading-tight font-semibold text-[#0F172A] text-center mb-3">

                {option.title}

              </h3>



              {/* DIVIDER */}

              <div className="w-10 h-[2px] bg-slate-200 mx-auto rounded-full mb-5"></div>



              {/* DESCRIPTION */}

              <p className="text-slate-500 text-[14px] leading-[1.7] text-center mb-7 min-h-[48px]">

                {option.description}

              </p>



              {/* CAPACITY */}

              <div className="flex justify-center">

                <div className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-slate-200 bg-white text-[13px] font-medium text-[#0F172A]">

                  👥 {option.capacity}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WorkspaceOptions;