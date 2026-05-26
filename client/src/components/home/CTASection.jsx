import AnimatedContent from "../../../reactbits/Animate"

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    border: "hover:border-cyan-500/30",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    border: "hover:border-green-500/30",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    border: "hover:border-gray-400/30",
    invert: true,
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    border: "hover:border-lime-500/30",
  },
  {
    name: "TailwindCSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    border: "hover:border-sky-500/30",
  },
  {
    name: "ReactBits",
    custom: true,
    border: "hover:border-purple-500/30",
  },
]

const CTASection = () => {
  return (

    <section className="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[70px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">

        {/* SINGLE Animation Wrapper */}
        <AnimatedContent
          distance={20}
          duration={0.6}
        >

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border border-white/10

              bg-gradient-to-br
              from-blue-500/10
              via-purple-500/10
              to-cyan-500/10

              backdrop-blur-sm

              p-8 sm:p-10 lg:p-12
            "
          >

            {/* Soft Internal Glow */}
            <div className="absolute top-0 left-0 w-56 h-56 bg-blue-500/10 blur-[70px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-500/10 blur-[70px] rounded-full"></div>


            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">

              {/* Badge */}
              <div
                className="
                  inline-flex items-center

                  px-4 py-2

                  rounded-xl

                  bg-white/5
                  border border-white/10

                  text-sm

                  mb-6

                  backdrop-blur-sm
                "
              >
                CoworkOS Platform
              </div>


              {/* Heading */}
              <h2 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-bold

                leading-tight

                mb-5
              ">
                Streamline Multi-Center
                Coworking Operations
              </h2>


              {/* Description */}
              <p className="
                text-gray-300

                text-sm sm:text-base

                leading-relaxed

                mb-10

                max-w-3xl
                mx-auto
              ">
                Centralize occupancy tracking, billing,
                client onboarding, renewals, and workspace
                operations into one unified CRM + ERP ecosystem.
              </p>


              {/* CTA */}
              <div className="
                flex
                flex-col sm:flex-row

                items-center
                justify-center

                gap-4

                mb-12
              ">

                <a href="/login">

                  <button
                    className="
                      group

                      px-6 py-3

                      rounded-xl

                      bg-blue-500
                      hover:bg-blue-600

                      text-white
                      text-sm sm:text-base
                      font-semibold

                      transition-all duration-300

                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                      Launch Demo
                    </span>
                  </button>

                </a>

              </div>


              {/* Tech Stack */}
              <div>

                <p className="
                  text-xs
                  uppercase

                  tracking-[0.25em]

                  text-gray-500

                  mb-5
                ">
                  Tech Stack & Architecture
                </p>


                <div
                  className="
                    flex
                    flex-wrap

                    items-center
                    justify-center

                    gap-3
                  "
                >

                  {techStack.map((tech, index) => (

                    <div
                      key={index}
                      className={`
                        group

                        px-4 py-2.5

                        rounded-xl

                        bg-white/[0.04]
                        border border-white/10

                        backdrop-blur-sm

                        flex items-center gap-2.5

                        transition-all duration-300

                        hover:-translate-y-1
                        hover:bg-white/[0.06]

                        ${tech.border}
                      `}
                    >

                      {tech.custom ? (

                        <div
                          className="
                            w-5 h-5

                            rounded-md

                            bg-gradient-to-br
                            from-purple-500
                            to-blue-500

                            transition-transform duration-300
                            group-hover:scale-105
                          "
                        ></div>

                      ) : (

                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className={`
                            w-5 h-5

                            transition-transform duration-300
                            group-hover:scale-105

                            ${tech.invert ? "invert" : ""}
                          `}
                        />

                      )}

                      <span className="
                        text-sm
                        text-gray-300
                        font-medium
                      ">
                        {tech.name}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </AnimatedContent>

      </div>

    </section>
  )
}

export default CTASection