import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import AnimatedContent from "../../../reactbits/Animate"

function WorkspaceOptions() {

  const options = [

    {
      title: "Private Cabin",

      filter: "Private Cabin",

      description:
        "Fully managed office spaces for growing teams.",

      capacity: "2 - 200+",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",

      accent:
        "group-hover:border-sky-500/20",
    },



    {
      title: "Hot Desks",

      filter: "Hot Desks",

      description:
        "Flexible desks for freelancers and remote teams.",

      capacity: "1 - 10",

      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",

      accent:
        "group-hover:border-violet-500/20",
    },



    {
      title: "Meeting Room",

      filter: "Meeting Room",

      description:
        "Premium meeting rooms for client discussions.",

      capacity: "1 - 30",

      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",

      accent:
        "group-hover:border-emerald-500/20",
    },



    {
      title: "Day Pass",

      filter: "Day Pass",

      description:
        "Flexible daily access to premium workspaces.",

      capacity: "1 - 5",

      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop",

      accent:
        "group-hover:border-orange-500/20",
    }

  ]


  return (

    <section className="
      relative

      py-14

      bg-white

      overflow-hidden
    ">

      {/* Soft Glow */}
      <div className="
        absolute
        top-0 left-1/2
        -translate-x-1/2

        w-[450px]
        h-[450px]

        bg-sky-500/5

        blur-[90px]

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
          distance={20}
          duration={0.6}
        >

          <div className="
            flex
            flex-col
            lg:flex-row

            lg:items-end
            lg:justify-between

            gap-8

            mb-14
          ">

            <div className="max-w-2xl">

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

                mb-6
              ">

                Workspace Options

              </div>


              <h2 className="
                text-4xl
                sm:text-5xl

                leading-[1.05]
                tracking-[-0.05em]

                font-semibold

                text-[#0F172A]

                mb-5
              ">

                Find the perfect
                workspace setup.

              </h2>


              <p className="
                text-slate-500

                text-base

                leading-[1.9]

                max-w-xl
              ">

                Flexible workspace solutions built
                for startups, creators, remote teams,
                and modern professionals.

              </p>

            </div>

          </div>

        </AnimatedContent>



        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5
        ">

          {options.map((option, index) => (

            <AnimatedContent
              key={index}
              distance={20}
              duration={0.6}
              delay={index * 0.05}
              className="h-full"
            >

              <Link
                to={`/bookings?workspace=${encodeURIComponent(option.filter)}`}
                className={`
                  group

                  relative

                  h-full

                  flex flex-col

                  bg-white

                  border border-slate-200

                  rounded-3xl

                  overflow-hidden

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-xl

                  ${option.accent}
                `}
              >

                {/* Image */}
                <div className="
                  relative

                  h-[180px]

                  overflow-hidden
                ">

                  <img
                    src={option.image}
                    alt={option.title}
                    className="
                      w-full h-full

                      object-cover

                      transition-transform duration-700

                      group-hover:scale-105
                    "
                  />


                  {/* Overlay */}
                  <div className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "></div>


                  {/* Capacity */}
                  <div className="
                    absolute
                    top-4 left-4

                    px-3 py-1.5

                    rounded-full

                    bg-white/10
                    border border-white/10

                    backdrop-blur-sm

                    text-white
                    text-xs
                    font-medium
                  ">

                    👥 {option.capacity}

                  </div>

                </div>


                {/* Content */}
                <div className="
                  flex-1

                  flex flex-col

                  p-5
                ">

                  {/* Title */}
                  <h3 className="
                    text-[20px]

                    leading-tight

                    font-semibold

                    text-[#0F172A]

                    mb-3
                  ">

                    {option.title}

                  </h3>


                  {/* Description */}
                  <p className="
                    text-slate-500

                    text-[14px]

                    leading-[1.8]

                    mb-6

                    flex-1
                  ">

                    {option.description}

                  </p>


                  {/* Bottom CTA */}
                  <div className="
                    flex items-center justify-between

                    pt-4

                    border-t border-slate-100
                  ">

                    <span className="
                      text-sm
                      font-medium

                      text-slate-700
                    ">

                      Explore Space

                    </span>


                    <div className="
                      w-9 h-9

                      rounded-xl

                      bg-slate-100
                      group-hover:bg-sky-500

                      flex items-center justify-center

                      transition-all duration-300
                    ">

                      <ArrowRight
                        size={16}
                        className="
                          text-slate-600
                          group-hover:text-white

                          transition-all duration-300

                          group-hover:translate-x-0.5
                        "
                      />

                    </div>

                  </div>

                </div>

              </Link>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>

  )
}

export default WorkspaceOptions