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
  Presentation,
} from "lucide-react"

import AnimatedContent from "../../../reactbits/Animate"

function Amenities() {

  const amenities = [

    {
      icon: <Wifi size={22} strokeWidth={1.8} />,
      title: "Fast Internet",
      description: "Enterprise-grade connectivity.",
      color: "text-sky-500 bg-sky-50",
    },

    {
      icon: <Clock3 size={22} strokeWidth={1.8} />,
      title: "24×7 Access",
      description: "Flexible workspace access anytime.",
      color: "text-violet-500 bg-violet-50",
    },

    {
      icon: <BatteryCharging size={22} strokeWidth={1.8} />,
      title: "Power Backup",
      description: "Reliable uninterrupted operations.",
      color: "text-emerald-500 bg-emerald-50",
    },

    {
      icon: <Armchair size={22} strokeWidth={1.8} />,
      title: "Modern Interiors",
      description: "Minimal productive environments.",
      color: "text-orange-500 bg-orange-50",
    },

    {
      icon: <Train size={22} strokeWidth={1.8} />,
      title: "Easy Commute",
      description: "Near metro & transit hubs.",
      color: "text-cyan-500 bg-cyan-50",
    },

    {
      icon: <ShieldCheck size={22} strokeWidth={1.8} />,
      title: "Smart Security",
      description: "24×7 monitored surveillance.",
      color: "text-red-500 bg-red-50",
    },

    {
      icon: <Users size={22} strokeWidth={1.8} />,
      title: "Conference Rooms",
      description: "Professional meeting spaces.",
      color: "text-indigo-500 bg-indigo-50",
    },

    {
      icon: <Sparkles size={22} strokeWidth={1.8} />,
      title: "Housekeeping",
      description: "Clean & hygienic workspaces.",
      color: "text-pink-500 bg-pink-50",
    },

    {
      icon: <Coffee size={22} strokeWidth={1.8} />,
      title: "Lounge Areas",
      description: "Relaxed breakout zones.",
      color: "text-amber-500 bg-amber-50",
    },

    {
      icon: <CalendarDays size={22} strokeWidth={1.8} />,
      title: "Community Events",
      description: "Startup & networking sessions.",
      color: "text-teal-500 bg-teal-50",
    },

    {
      icon: <Printer size={22} strokeWidth={1.8} />,
      title: "Printing",
      description: "Wireless printing & scanning.",
      color: "text-slate-500 bg-slate-100",
    },

    {
      icon: <Presentation size={22} strokeWidth={1.8} />,
      title: "Presentation Setup",
      description: "Projectors & smart displays.",
      color: "text-fuchsia-500 bg-fuchsia-50",
    }

  ]


  return (

    <section className="
      relative

      py-20

      bg-blue-200

      overflow-hidden
    ">

      {/* Soft Glow */}
      <div className="
        absolute
        top-0 left-1/2
        -translate-x-1/2

        w-[400px]
        h-[400px]

        bg-sky-500/5

        blur-[80px]

        rounded-full
      "></div>


      <div className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6 lg:px-12
      ">

        {/* Header */}
        <AnimatedContent
          distance={15}
          duration={0.5}
        >

          <div className="mb-12">

            <div className="
              inline-flex items-center

              px-4 py-2

              rounded-full

              bg-sky-50
              border border-sky-100

              text-sky-600
              text-xs
              font-medium

              tracking-[0.2em]
              uppercase

              mb-5
            ">

              Workspace Features

            </div>


            <h2 className="
              text-3xl
              sm:text-4xl

              leading-tight

              tracking-[-0.04em]

              font-semibold

              text-[#0F172A]

              mb-4
            ">

              Amenities built for
              productive work.

            </h2>


            <p className="
              text-slate-500

              text-[15px]

              leading-[1.8]

              max-w-2xl
            ">

              Everything needed for seamless collaboration,
              productivity, and modern coworking experiences.

            </p>

          </div>

        </AnimatedContent>



        {/* Compact Grid */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4

          gap-4
        ">

          {amenities.map((item, index) => (

            <AnimatedContent
              key={index}
              distance={10}
              duration={0.4}
              delay={index * 0.03}
              className="h-full"
            >

              <div
                className="
                  group

                  h-full

                  bg-[#FAFAFA]

                  border border-slate-200

                  rounded-2xl

                  p-5

                  transition-all duration-300

                  hover:bg-white
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Icon */}
                <div
                  className={`
                    w-11 h-11

                    rounded-xl

                    flex items-center justify-center

                    mb-4

                    transition-transform duration-300

                    group-hover:scale-105

                    ${item.color}
                  `}
                >

                  {item.icon}

                </div>


                {/* Title */}
                <h3 className="
                  text-[16px]

                  leading-tight

                  font-semibold

                  text-[#0F172A]

                  mb-2
                ">

                  {item.title}

                </h3>


                {/* Description */}
                <p className="
                  text-slate-500

                  text-[13px]

                  leading-[1.7]
                ">

                  {item.description}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Amenities