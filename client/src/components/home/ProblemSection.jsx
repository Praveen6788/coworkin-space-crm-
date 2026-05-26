import AnimatedContent from "../../../reactbits/Animate"

const ProblemSection = () => {
  return (
    <section
      className="relative pt-24 pb-5 px-4 sm:px-6 lg:px-20 text-white overflow-hidden" id="problem"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <AnimatedContent
          distance={40}
          duration={1}
          ease="expo.out"
          className="text-center mb-16"
        >

          <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6 backdrop-blur-xl">
            Problem Statement
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Coworking Operations Are Still Fragmented
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Multi-center coworking operators still rely on disconnected tools,
            spreadsheets, WhatsApp communication, and manual workflows to manage
            daily operations.
          </p>

        </AnimatedContent>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            {
              icon: "📄",
              title: "Spreadsheet Dependency",
              text: "Most coworking operators still manage occupancy, renewals, and invoices manually using spreadsheets and fragmented records.",
              color: "hover:border-red-500/40"
            },
            {
              icon: "💬",
              title: "Scattered Communication",
              text: "Visitor coordination, renewals, onboarding, and support conversations happen across WhatsApp and disconnected channels.",
              color: "hover:border-blue-500/40"
            },
            {
              icon: "📉",
              title: "Revenue Leakage",
              text: "Missed renewals, delayed payments, and poor visibility across branches directly impact recurring revenue.",
              color: "hover:border-orange-500/40"
            },
            {
              icon: "🏢",
              title: "No Unified Platform",
              text: "There is no centralized SaaS platform specifically built for coworking operators combining CRM, ERP, bookings, finance, and operations.",
              color: "hover:border-green-500/40"
            }
          ].map((card, index) => (

            <AnimatedContent
              key={index}
              distance={40}
              duration={0.8}
              delay={index * 0.15}
              ease="expo.out"
            >

              <div
                className={`
                  group
                  bg-white/[0.04]
                  border border-white/10
                  rounded-3xl
                  p-8
                  backdrop-blur-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:bg-white/[0.06]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  ${card.color}
                `}
              >

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-2xl transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {card.text}
                </p>

              </div>

            </AnimatedContent>
          ))}

        </div>


        {/* Bottom Highlight */}
        <AnimatedContent
          distance={50}
          duration={1}
          delay={0.2}
          ease="expo.out"
          className="mt-16"
        >

          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl">

            <div className="absolute inset-0 bg-white/[0.02]"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Operational Inefficiency Across Every Branch
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Managing visitor handling, conference bookings, client onboarding,
                  renewals, finances, and internal coordination across multiple
                  coworking centers becomes increasingly difficult without a unified
                  operational system.
                </p>

              </div>


              <div className="grid grid-cols-2 gap-4">

                {[
                  ["40%", "Renewal Miss Rate", "text-red-400"],
                  ["3x", "Operational Overhead", "text-orange-400"],
                  ["24+", "Tools Used Separately", "text-blue-400"],
                  ["₹14L+", "Revenue At Risk", "text-green-400"],
                ].map((item, i) => (

                  <div
                    key={i}
                    className="
                      bg-black/20
                      rounded-2xl
                      p-6
                      border border-white/10
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-white/20
                    "
                  >

                    <h4 className={`text-4xl font-bold mb-2 ${item[2]}`}>
                      {item[0]}
                    </h4>

                    <p className="text-gray-400 text-sm">
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
  )
}

export default ProblemSection