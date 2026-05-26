import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLocation } from "react-router-dom"
import { branches } from "../../data/branches"

import SectionHeader from "../ui/SectionHeader"
import AnimatedContent from "../../../reactbits/Animate"

function Locations() {
  const location = useLocation()

  const isclienthome = location.pathname === "/client/Home"

  return (

    <section className={`
      relative

      py-14
      ${ isclienthome ? "bg-blue-200" : "bg-white"  
      }
    
      overflow-hidden
    
    `}>

      {/* Background Glow */}
      <div className="
        absolute
        top-0 left-1/2
        -translate-x-1/2

        w-[500px]
        h-[500px]

        bg-sky-500/5

        blur-[100px]

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

          <SectionHeader
            badge="Locations"
            title="Explore Premium Workspaces"
            description="Discover beautifully designed coworking spaces built for startups, remote teams, and modern professionals."
          />

        </AnimatedContent>



        {/* Layout */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-12

          gap-6
        ">

          {branches.map((branch, index) => (

            <AnimatedContent
              key={branch.id}
              distance={20}
              duration={0.6}
              delay={index * 0.05}
              className={`
                h-full

                ${index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
              `}
            >

              <div
                className="
                  group

                  relative

                  h-full

                  rounded-[28px]

                  overflow-hidden

                  bg-white

                  border border-slate-200

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >

                {/* Image */}
                <div className="
                  relative

                  overflow-hidden

                  h-[280px]
                ">

                  <img
                    src={branch.image}
                    alt={branch.name}
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
                    from-black/80
                    via-black/20
                    to-transparent
                  "></div>


                  {/* Floating Tag */}
                  <div className="
                    absolute
                    top-5 left-5

                    px-3 py-1.5

                    rounded-full

                    bg-white/10
                    border border-white/10

                    backdrop-blur-sm

                    text-white
                    text-xs
                    font-medium
                  ">

                    Premium Workspace

                  </div>


                  {/* Content */}
                  <div className="
                    absolute
                    bottom-0 left-0

                    w-full

                    p-6
                  ">

                    <h3 className="
                      text-2xl

                      font-semibold

                      text-white

                      mb-2
                    ">

                      {branch.name}

                    </h3>

                    <p className="
                      text-sm

                      text-white/70

                      leading-relaxed
                    ">

                      Flexible coworking spaces
                      designed for productivity
                      and collaboration.

                    </p>

                  </div>

                </div>


                {/* Bottom CTA */}
                <div className="
                  flex items-center justify-between

                  px-6 py-5
                ">

                  <div>

                    <p className="
                      text-xs
                      uppercase

                      tracking-[0.18em]

                      text-slate-400

                      mb-1
                    ">

                      Workspace Access

                    </p>

                    <h4 className="
                      text-sm
                      font-medium

                      text-slate-700
                    ">

                      Available Today

                    </h4>

                  </div>


                  <Link
                    to={`/bookings/${branch.slug}`}
                    className="
                      group/button

                      w-11 h-11

                      rounded-xl

                      bg-sky-500
                      hover:bg-sky-600

                      flex items-center justify-center

                      text-white

                      transition-all duration-300

                      hover:scale-105
                    "
                  >

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform duration-300
                        group-hover/button:translate-x-0.5
                      "
                    />

                  </Link>

                </div>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Locations