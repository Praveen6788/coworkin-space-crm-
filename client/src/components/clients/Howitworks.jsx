import {
  Search,
  CalendarCheck2,
  DoorOpen,
} from "lucide-react"

import AnimatedContent from "../../../reactbits/Animate"

function HowItWorks() {

  const steps = [

    {
      icon: <Search size={20} strokeWidth={1.8} />,
      title: "Browse",
      description:
        "Explore workspaces based on your needs.",
      iconBg:
        "bg-sky-500/10 text-sky-500",
    },

    {
      icon: <CalendarCheck2 size={20} strokeWidth={1.8} />,
      title: "Choose Slot",
      description:
        "Select workspace and booking duration.",
      iconBg:
        "bg-violet-500/10 text-violet-500",
    },

    {
      icon: <DoorOpen size={20} strokeWidth={1.8} />,
      title: "Book Access",
      description:
        "Confirm booking and access instantly.",
      iconBg:
        "bg-emerald-500/10 text-emerald-500",
    },

  ]


  return (

    <section className="
      py-8

      bg-[#F8FAFC]
    ">

      <div className="
        max-w-7xl
        mx-auto

        px-6 lg:px-12
      ">

        {/* HEADER */}

        <AnimatedContent
          distance={15}
          duration={0.5}
        >

          <div className="
            flex
            flex-col
            lg:flex-row

            lg:items-end
            lg:justify-between

            gap-5

            mb-8
          ">

            {/* LEFT */}

            <div className="max-w-2xl">

              <div className="
                inline-flex items-center

                px-3 py-1.5

                rounded-full

                bg-sky-50
                border border-sky-100

                text-sky-600
                text-[11px]
                font-medium

                tracking-[0.18em]
                uppercase

                mb-4
              ">

                Simple Workflow

              </div>


              <h2 className="
                text-3xl
                lg:text-4xl

                leading-[1.05]

                tracking-[-0.05em]

                font-semibold

                text-[#0F172A]

                mb-3
              ">

                Book workspace
                in minutes.

              </h2>


              <p className="
                text-slate-500

                text-[14px]

                leading-[1.8]

                max-w-xl
              ">

                Discover and reserve premium
                coworking spaces with a
                seamless booking experience.

              </p>

            </div>



            {/* RIGHT */}

            <div className="
              hidden lg:flex

              items-center gap-3
            ">

              <div className="
                px-4 py-3

                rounded-2xl

                bg-white

                border border-slate-200
              ">

                <p className="
                  text-[10px]

                  uppercase

                  tracking-[0.15em]

                  text-slate-400

                  mb-1
                ">

                  Process

                </p>

                <h3 className="
                  text-lg

                  font-semibold

                  text-[#0F172A]
                ">

                  3 Steps

                </h3>

              </div>

            </div>

          </div>

        </AnimatedContent>



        {/* STEPS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-3

          gap-4
        ">

          {steps.map((step, index) => (

            <AnimatedContent
              key={index}
              distance={15}
              duration={0.5}
              delay={index * 0.05}
              className="h-full"
            >

              <div className="
                relative

                h-full

                bg-white

                border border-slate-200

                rounded-2xl

                p-5

                transition-all duration-300

                hover:shadow-lg
                hover:-translate-y-1
              ">

                {/* NUMBER */}

                <div className="
                  absolute
                  top-4 right-4

                  text-3xl

                  font-semibold

                  tracking-[-0.05em]

                  text-slate-100
                ">

                  0{index + 1}

                </div>



                {/* ICON */}

                <div
                  className={`
                    w-11 h-11

                    rounded-xl

                    flex items-center justify-center

                    mb-4

                    ${step.iconBg}
                  `}
                >

                  {step.icon}

                </div>



                {/* TITLE */}

                <h3 className="
                  text-[18px]

                  font-semibold

                  text-[#0F172A]

                  mb-2
                ">

                  {step.title}

                </h3>



                {/* DESC */}

                <p className="
                  text-slate-500

                  text-[13px]

                  leading-[1.7]
                ">

                  {step.description}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks