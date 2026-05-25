import {
  Search,
  CalendarCheck2,
  DoorOpen
} from "lucide-react";

function HowItWorks() {

  const steps = [

    {
      icon: <Search size={28} strokeWidth={1.8} />,
      title: "Browse Spaces",
      description:
        "Explore coworking spaces, private cabins and meeting rooms based on location and amenities."
    },

    {
      icon: <CalendarCheck2 size={28} strokeWidth={1.8} />,
      title: "Choose Your Slot",
      description:
        "Select your preferred date, workspace type and booking duration instantly."
    },

    {
      icon: <DoorOpen size={28} strokeWidth={1.8} />,
      title: "Book & Access",
      description:
        "Confirm your booking and receive seamless workspace access details."
    }

  ];


  return (

    <section className="py-24 bg-[#FAFAFA] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}

        <div className="max-w-3xl mb-16">

          <p className="text-sky-500 text-[12px] tracking-[0.25em] uppercase font-medium mb-4">

            Simple Workflow

          </p>

          <h2 className="text-[46px] leading-[1.1] tracking-[-0.04em] font-semibold text-[#0F172A] mb-5">

            Book your workspace
            in just a few clicks.

          </h2>

          <p className="text-slate-500 text-[16px] leading-[1.9]">

            Discover, reserve and access premium coworking spaces
            designed for modern professionals and growing teams.

          </p>

        </div>



        {/* STEPS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative group bg-white border border-slate-200 rounded-[30px] p-8 hover:shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300"
            >

              {/* STEP NUMBER */}

              <div className="absolute top-6 right-6 text-[56px] font-semibold tracking-[-0.05em] text-slate-100 select-none">

                0{index + 1}

              </div>



              {/* ICON */}

              <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-8 group-hover:scale-105 transition">

                {step.icon}

              </div>



              {/* TITLE */}

              <h3 className="text-[24px] leading-tight font-semibold text-[#0F172A] mb-4">

                {step.title}

              </h3>



              {/* DESCRIPTION */}

              <p className="text-slate-500 text-[15px] leading-[1.9] max-w-sm">

                {step.description}

              </p>



              {/* BOTTOM LINE */}

              <div className="w-14 h-[2px] bg-sky-100 rounded-full mt-8"></div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default HowItWorks;