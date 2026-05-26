import AnimatedContent from "../../../reactbits/Animate";



const problemCards = [

  {
    icon: "📄",
    title: "Spreadsheet Dependency",
    text: "Most coworking operators still manage occupancy, renewals, and invoices manually.",
    color: "hover:border-red-500/30"
  },

  {
    icon: "💬",
    title: "Scattered Communication",
    text: "Operations and onboarding workflows happen across disconnected platforms.",
    color: "hover:border-blue-500/30"
  },

  {
    icon: "📉",
    title: "Revenue Leakage",
    text: "Missed renewals and delayed payments impact recurring revenue visibility.",
    color: "hover:border-orange-500/30"
  },

  {
    icon: "🏢",
    title: "No Unified Platform",
    text: "Most systems lack integrated CRM, ERP, finance, and workspace operations.",
    color: "hover:border-green-500/30"
  },

];



const stats = [

  ["40%", "Renewal Miss Rate", "text-red-400"],

  ["3x", "Operational Overhead", "text-orange-400"],

  ["24+", "Tools Used", "text-blue-400"],

  ["₹14L+", "Revenue At Risk", "text-green-400"],

];



const ProblemSection = () => {

  return (

    <section
      className="
        relative

        pt-16
        pb-8

        px-5 sm:px-6 lg:px-12

        text-white
        overflow-hidden
      "
      id="problem"
    >



      {/* BACKGROUND GLOW */}



      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>



      <div className="relative z-10 max-w-6xl mx-auto">



        {/* HEADER */}



        <AnimatedContent
          distance={25}
          duration={0.5}
          ease="expo.out"
          className="text-center mb-12"
        >

          <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] mb-5 backdrop-blur-xl">

            Problem Statement

          </div>



          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">

            Coworking Operations
            Are Still Fragmented

          </h2>



          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">

            Multi-center coworking operators
            still rely on disconnected tools,
            spreadsheets, WhatsApp workflows,
            and manual operational systems.

          </p>

        </AnimatedContent>



        {/* PROBLEM CARDS */}



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          {problemCards.map((card, index) => (

            <AnimatedContent
              key={index}
              distance={20}
              duration={0.5}
              delay={index * 0.08}
              ease="expo.out"
            >

              <div
                className={`
                  group

                  bg-white/[0.04]
                  border border-white/10

                  rounded-2xl
                  p-5

                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:-translate-y-1
                  hover:bg-white/[0.06]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                  ${card.color}
                `}
              >



                {/* ICON */}



                <div
                  className="
                    w-10 h-10

                    rounded-xl
                    bg-white/5

                    flex items-center justify-center

                    mb-4

                    text-lg

                    transition-transform duration-500

                    group-hover:scale-105
                  "
                >

                  {card.icon}

                </div>



                {/* TITLE */}



                <h3 className="text-base font-semibold mb-2">

                  {card.title}

                </h3>



                {/* DESCRIPTION */}



                <p className="text-gray-400 text-sm leading-relaxed">

                  {card.text}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>



        {/* BOTTOM SECTION */}



        <AnimatedContent
          distance={25}
          duration={0.5}
          delay={0.15}
          ease="expo.out"
          className="mt-12"
        >

          <div
            className="
              relative
              overflow-hidden

              bg-gradient-to-r
              from-red-500/10
              to-blue-500/10

              border border-white/10

              rounded-2xl

              p-6 sm:p-8

              backdrop-blur-2xl
            "
          >



            <div className="absolute inset-0 bg-white/[0.02]"></div>



            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">



              {/* LEFT */}



              <div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">

                  Operational Inefficiency
                  Across Every Branch

                </h3>



                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">

                  Managing onboarding,
                  renewals, workspace
                  allocation, finance,
                  and internal coordination
                  across multiple branches
                  becomes difficult without
                  a unified operational system.

                </p>

              </div>



              {/* STATS */}



              <div className="grid grid-cols-2 gap-3">

                {stats.map((item, i) => (

                  <div
                    key={i}
                    className="
                      bg-black/20

                      rounded-xl

                      p-4

                      border border-white/10

                      backdrop-blur-xl

                      transition-all duration-500

                      hover:-translate-y-1
                      hover:border-white/20
                    "
                  >



                    <h4 className={`text-2xl font-bold mb-1 ${item[2]}`}>

                      {item[0]}

                    </h4>



                    <p className="text-gray-400 text-xs leading-relaxed">

                      {item[1]}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </AnimatedContent>

      </div>

    </section>

  );

};



export default ProblemSection;