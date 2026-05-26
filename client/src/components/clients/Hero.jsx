import AnimatedContent from "../../../reactbits/Animate"

const Hero = () => {
  return (

    <section className="relative min-h-[88vh] overflow-hidden py-10 bg-[#0B0F19] text-white">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
        alt="Coworking Space"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-105
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-[#050816]/95
        via-[#050816]/75
        to-[#050816]/30
      "></div>

      {/* Soft Glow */}
      <div className="
        absolute
        top-1/2 left-[20%]
        -translate-y-1/2

        w-[500px]
        h-[500px]

        bg-blue-500/10
        blur-[100px]

        rounded-full
      "></div>


      {/* Main Content */}
      <div className="
        relative z-10

        max-w-7xl
        mx-auto

        px-6 lg:px-12

        min-h-[88vh]

        flex items-center
      ">

        <AnimatedContent
          distance={20}
          duration={0.6}
        >

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="
              inline-flex items-center gap-2

              px-4 py-2

              rounded-full

              bg-white/5
              border border-white/10

              backdrop-blur-sm

              text-sm text-gray-200

              mb-7
            ">

              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>

              Smart Workspace Booking Platform

            </div>


            {/* Heading */}
            <h1 className="
              text-5xl
              sm:text-6xl
              lg:text-7xl

              font-semibold

              leading-[0.95]
              tracking-[-0.05em]

              mb-7
            ">

              Flexible workspaces
              designed for
              <span className="text-blue-400">
                {" "}modern teams.
              </span>

            </h1>


            {/* Description */}
            <p className="
              text-base
              sm:text-lg

              leading-[1.8]

              text-gray-300

              max-w-2xl

              mb-10
            ">

              Discover premium coworking spaces,
              private offices, meeting rooms,
              and dedicated desks with seamless
              booking and workspace management.

            </p>


            {/* Buttons */}
            <div className="
              flex flex-wrap
              items-center

              gap-4
            ">

              {/* Primary CTA */}
              <button
                className="
                  group

                  h-12
                  px-6

                  rounded-xl

                  bg-blue-500
                  hover:bg-blue-600

                  text-white
                  text-sm
                  font-medium

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <span className="
                  inline-block
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                ">
                  Explore Spaces
                </span>

              </button>


              {/* Secondary CTA */}
              <button
                className="
                  group

                  h-12
                  px-6

                  rounded-xl

                  border border-white/10

                  bg-white/5
                  hover:bg-white/10

                  backdrop-blur-sm

                  text-white
                  text-sm
                  font-medium

                  transition-all duration-300

                  hover:-translate-y-1
                "
              >

                <span className="
                  flex items-center gap-2

                  transition-transform duration-300
                  group-hover:translate-x-0.5
                ">

                  ▶

                  Watch Demo

                </span>

              </button>

            </div>


            {/* Bottom Trust Indicators */}
            <div className="
              flex flex-wrap
              items-center

              gap-6

              mt-14
            ">

              {[
                "24/7 Access",
                "Instant Booking",
                "Enterprise Ready",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex items-center gap-2

                    text-sm
                    text-gray-400
                  "
                >

                  <span className="
                    w-1.5 h-1.5
                    rounded-full
                    bg-blue-400
                  "></span>

                  {item}

                </div>

              ))}

            </div>

          </div>

        </AnimatedContent>

      </div>

    </section>
  )
}

export default Hero