import { Navigate } from "react-router-dom"
import AnimatedContent from "../../../reactbits/Animate"

const metrics = [
  {
    value: "82%",
    label: "Occupancy Visibility",
    color: "text-blue-400",
  },
  {
    value: "₹14L+",
    label: "Revenue Leakage Tracked",
    color: "text-red-400",
  },
  {
    value: "3x",
    label: "Faster Operational Workflow",
    color: "text-green-400",
  },
]

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-20 overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">

        <AnimatedContent
          distance={40}
          duration={1}
          blur
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border border-white/10

              bg-gradient-to-br
              from-blue-500/10
              via-purple-500/10
              to-cyan-500/10

              backdrop-blur-2xl

              p-8 sm:p-12 lg:p-16

              transition-all duration-500
            "
          >

            {/* Internal Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>


            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">

              {/* Badge */}
              <AnimatedContent
                distance={20}
                duration={0.8}
                delay={0.1}
                blur
              >

                <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-xl">
                  CoworkOS Platform
                </div>

              </AnimatedContent>


              {/* Heading */}
              <AnimatedContent
                distance={30}
                duration={1}
                delay={0.15}
                blur
              >

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Streamline Multi-Center Coworking Operations
                </h2>

              </AnimatedContent>


              {/* Description */}
              <AnimatedContent
                distance={30}
                duration={1}
                delay={0.2}
                blur
              >

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                  Centralize occupancy tracking, billing, client onboarding,
                  renewals, and workspace operations into one unified CRM + ERP ecosystem.
                </p>

              </AnimatedContent>


              {/* Buttons */}
              <AnimatedContent
                distance={20}
                duration={0.8}
                delay={0.25}
                blur
              >

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                  {/* Primary Button */}
                  <a href="/login"><button
                    className="
                      group

                      px-6 py-3
                      rounded-xl

                      bg-blue-500
                      hover:bg-blue-600

                      transition-all duration-300

                      text-white
                      font-semibold
                      text-sm sm:text-base

                      w-full sm:w-auto

                      hover:-translate-y-1
                      hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]
                    "
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 inline-block">
                      Launch Demo
                    </span>
                  </button></a>
                  


                  {/* Secondary Button */}
                 

                </div>

              </AnimatedContent>


              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">

                {metrics.map((metric, index) => (

                  <AnimatedContent
                    key={index}
                    distance={20}
                    duration={0.8}
                    delay={index * 0.12}
                    blur
                  >

                    <div
                      className="
                        group

                        bg-black/20
                        border border-white/10

                        rounded-2xl

                        p-5

                        backdrop-blur-xl

                        transition-all duration-500

                        hover:-translate-y-2
                        hover:border-white/20
                        hover:bg-black/30
                      "
                    >

                      <h3
                        className={`
                          text-3xl sm:text-4xl
                          font-bold
                          mb-2

                          transition-transform duration-500
                          group-hover:scale-105

                          ${metric.color}
                        `}
                      >
                        {metric.value}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base">
                        {metric.label}
                      </p>

                    </div>

                  </AnimatedContent>
                ))}

              </div>

            </div>

          </div>

        </AnimatedContent>

      </div>

    </section>
  )
}

export default CTASection