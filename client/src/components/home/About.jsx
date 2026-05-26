import AnimatedContent from "../../../reactbits/Animate";



const cards = [

  {
    title: "Problem",
    color:
      "border-red-500/20 bg-red-500/10 hover:border-red-500/40",
    heading: "text-red-400",
    text: `
      Multi-branch coworking spaces struggle
      with manual tracking, spreadsheets,
      disconnected tools, and inefficient
      operational workflows.
    `,
  },

  {
    title: "Impact",
    color:
      "border-yellow-500/20 bg-yellow-500/10 hover:border-yellow-500/40",
    heading: "text-yellow-400",
    text: `
      Revenue leakage, missed renewals,
      occupancy confusion, delayed billing,
      and poor operational visibility
      reduce business efficiency.
    `,
  },

  {
    title: "Solution",
    color:
      "border-green-500/20 bg-green-500/10 hover:border-green-500/40",
    heading: "text-green-400",
    text: `
      CoWorkOS centralizes CRM, ERP,
      occupancy tracking, finance,
      renewals, and onboarding into
      one unified SaaS ecosystem.
    `,
  },

];



const About = () => {

  return (

    <section
      className="
        relative
        bg-[#0B0F19]
        text-white

        py-16
        px-5 sm:px-6 lg:px-12

        overflow-hidden
      "
      id="about"
    >



      {/* BACKGROUND GLOW */}



      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>



      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">



        {/* LEFT SIDE */}



        <AnimatedContent
          distance={25}
          duration={0.5}
          blur
        >

          <div>



            {/* BADGE */}



            <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] mb-5 backdrop-blur-xl">

              About CoWorkOS

            </div>



            {/* HEADING */}



            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">

              Unified CRM + ERP
              Platform for Modern
              Coworking Spaces

            </h2>



            {/* DESCRIPTION */}



            <p className="text-gray-400 text-sm leading-relaxed mb-4">

              <span className="text-white font-semibold">

                CoWorkOS

              </span>{" "}

              centralizes bookings,
              occupancy, onboarding,
              finance, renewals, and
              branch operations into
              one scalable SaaS platform.

            </p>



            <p className="text-gray-400 text-sm leading-relaxed mb-4">

              Many coworking businesses still
              depend on spreadsheets, manual
              tracking, and disconnected systems.

            </p>



            <p className="text-gray-400 text-sm leading-relaxed mb-6">

              CoWorkOS solves this by combining
              CRM and ERP workflows into one
              intelligent operational ecosystem.

            </p>



            {/* CRM */}



            <AnimatedContent
              distance={15}
              duration={0.5}
              delay={0.15}
              blur
            >

              <div className="mt-6 group">

                <h3 className="text-lg font-semibold mb-2 text-blue-400 transition-all duration-300 group-hover:translate-x-1">

                  What is CRM?

                </h3>



                <p className="text-gray-400 text-sm leading-relaxed">

                  CRM manages leads,
                  onboarding, renewals,
                  bookings, and customer
                  communication workflows.

                </p>

              </div>

            </AnimatedContent>



            {/* ERP */}



            <AnimatedContent
              distance={15}
              duration={0.5}
              delay={0.25}
              blur
            >

              <div className="mt-6 group">

                <h3 className="text-lg font-semibold mb-2 text-green-400 transition-all duration-300 group-hover:translate-x-1">

                  What is ERP?

                </h3>



                <p className="text-gray-400 text-sm leading-relaxed">

                  ERP handles finance,
                  occupancy tracking,
                  invoicing, workspace
                  allocation, and operations.

                </p>

              </div>

            </AnimatedContent>

          </div>

        </AnimatedContent>



        {/* RIGHT SIDE */}



        <div className="space-y-4">



          {/* PLATFORM OVERVIEW */}



          <AnimatedContent
            distance={25}
            duration={0.5}
            delay={0.15}
            blur
          >

            <div
              className="
                bg-white/[0.05]
                border border-white/10

                rounded-2xl

                p-5

                backdrop-blur-2xl

                transition-all duration-500

                hover:-translate-y-1
                hover:border-blue-500/30
                hover:bg-white/[0.07]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              "
            >

              <h3 className="text-lg font-semibold mb-3">

                Platform Overview

              </h3>



              <p className="text-gray-300 text-sm leading-relaxed">

                CoWorkOS acts as a unified
                operating system for coworking
                spaces by centralizing CRM,
                finance, occupancy tracking,
                onboarding, analytics, and
                branch operations.

              </p>

            </div>

          </AnimatedContent>



          {/* INFO CARDS */}



          {cards.map((card, index) => (

            <AnimatedContent
              key={index}
              distance={20}
              duration={0.5}
              delay={index * 0.1}
              blur
            >

              <div
                className={`
                  rounded-2xl

                  p-5

                  border

                  backdrop-blur-xl

                  transition-all duration-500

                  hover:-translate-y-1
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]

                  ${card.color}
                `}
              >

                <h4 className={`text-base font-semibold mb-2 ${card.heading}`}>

                  {card.title}

                </h4>



                <p className="text-gray-300 text-sm leading-relaxed">

                  {card.text}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>

  );

};



export default About;