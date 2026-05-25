import {
  Wifi,
  Clock3,
  BatteryCharging,
  Armchair,
  Train,
  ShieldCheck,
  Users,
  Sparkles,
  Coffee,
  CalendarDays,
  Printer,
  Presentation
} from "lucide-react";

function Amenities() {

  const amenities = [

    {
      icon: <Wifi size={30} strokeWidth={1.8} />,
      title: "High-Speed Internet",
      description:
        "Seamless connectivity with enterprise-grade speeds."
    },

    {
      icon: <Clock3 size={30} strokeWidth={1.8} />,
      title: "24×7 Access",
      description:
        "Flexible workspace access anytime you need."
    },

    {
      icon: <BatteryCharging size={30} strokeWidth={1.8} />,
      title: "Power Backup",
      description:
        "Reliable uninterrupted operations during outages."
    },

    {
      icon: <Armchair size={30} strokeWidth={1.8} />,
      title: "Modern Interiors",
      description:
        "Minimal contemporary spaces designed for focus."
    },

    {
      icon: <Train size={30} strokeWidth={1.8} />,
      title: "Easy Commute",
      description:
        "Located near metro stations and transit hubs."
    },

    {
      icon: <ShieldCheck size={30} strokeWidth={1.8} />,
      title: "Smart Security",
      description:
        "24×7 monitored surveillance and secured access."
    },

    {
      icon: <Users size={30} strokeWidth={1.8} />,
      title: "Conference Rooms",
      description:
        "Professional meeting spaces for teams and clients."
    },

    {
      icon: <Sparkles size={30} strokeWidth={1.8} />,
      title: "Housekeeping",
      description:
        "Clean, hygienic and professionally maintained areas."
    },

    {
      icon: <Coffee size={30} strokeWidth={1.8} />,
      title: "Lounge Areas",
      description:
        "Relaxed breakout zones for informal conversations."
    },

    {
      icon: <CalendarDays size={30} strokeWidth={1.8} />,
      title: "Community Events",
      description:
        "Networking sessions and startup meetups regularly."
    },

    {
      icon: <Printer size={30} strokeWidth={1.8} />,
      title: "Printing Services",
      description:
        "Access wireless printing and scanning facilities."
    },

    {
      icon: <Presentation size={30} strokeWidth={1.8} />,
      title: "Presentation Setup",
      description:
        "Projectors and smart displays for smooth meetings."
    }

  ];


  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}

        <div className="mb-14">

          <p className="text-sky-500 text-[12px] tracking-[0.25em] uppercase font-medium mb-4">

            Workspace Features

          </p>

          <h2 className="text-[42px] leading-tight tracking-[-0.03em] font-semibold text-[#0F172A] mb-4">

            Amenities designed for modern work.

          </h2>

          <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl">

            Everything you need for productivity, collaboration
            and seamless coworking experiences.

          </p>

        </div>



        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {amenities.map((item, index) => (

            <div
              key={index}
              className="group bg-[#FAFAFA] border border-slate-200 rounded-[28px] p-7 hover:bg-white hover:shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300"
            >

              {/* ICON */}

              <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6 group-hover:scale-105 transition">

                {item.icon}

              </div>



              {/* TITLE */}

              <h3 className="text-[20px] leading-tight font-semibold text-[#0F172A] mb-3">

                {item.title}

              </h3>



              {/* DESC */}

              <p className="text-slate-500 text-[14px] leading-[1.8]">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Amenities;