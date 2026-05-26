import AnimatedContent from "../../../reactbits/Animate"

const cards = [
  {
    title: "Problem",
    color:
      "border-red-500/20 bg-red-500/10 hover:border-red-500/40",
    heading: "text-red-400",
    text: `
      A coworking company with multiple branches
      struggles to track renewals, bookings,
      occupancy, and payments because operations
      are managed manually across spreadsheets
      and separate tools.
    `,
  },
  {
    title: "Impact",
    color:
      "border-yellow-500/20 bg-yellow-500/10 hover:border-yellow-500/40",
    heading: "text-yellow-400",
    text: `
      Missed renewals, revenue leakage,
      communication gaps, poor occupancy visibility,
      and inefficient operations reduce overall
      business growth and customer satisfaction.
    `,
  },
  {
    title: "Solution",
    color:
      "border-green-500/20 bg-green-500/10 hover:border-green-500/40",
    heading: "text-green-400",
    text: `
      CoWorkOS automates renewals, centralizes
      branch operations, manages finance,
      tracks occupancy in real-time,
      and streamlines coworking workflows
      through one intelligent ERP platform.
    `,
  },
]

const Aboutsection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#0B0F19]
        text-white
        py-24
        px-14
        overflow-hidden
      "
      id="about"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <AnimatedContent
          distance={40}
          duration={1}
          blur
        >

          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 backdrop-blur-xl">
              About CoWorkOS
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Unified CRM + ERP Platform
              for Modern Coworking Spaces
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              <span className="text-white font-semibold">
                CoWorkOS
              </span>{" "}
              is a centralized SaaS platform designed
              specifically for coworking operators to
              manage bookings, occupancy, clients,
              renewals, finances, and branch operations
              from one unified dashboard.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Many coworking businesses still depend on
              spreadsheets, WhatsApp groups, manual tracking,
              and disconnected software tools.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              CoWorkOS solves this problem by combining
              CRM and ERP functionalities into one smart
              ecosystem built for coworking businesses.
            </p>


            {/* CRM */}
            <AnimatedContent
              distance={20}
              duration={0.8}
              delay={0.2}
              blur
            >

              <div className="mt-10 group">

                <h3 className="text-2xl font-bold mb-3 text-blue-400 transition-all duration-300 group-hover:translate-x-1">
                  What is CRM?
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  CRM helps coworking operators manage
                  leads, onboarding, renewals, bookings,
                  and customer communication from one system.
                </p>

              </div>

            </AnimatedContent>


            {/* ERP */}
            <AnimatedContent
              distance={20}
              duration={0.8}
              delay={0.3}
              blur
            >

              <div className="mt-10 group">

                <h3 className="text-2xl font-bold mb-3 text-green-400 transition-all duration-300 group-hover:translate-x-1">
                  What is ERP?
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  ERP manages finance, occupancy tracking,
                  invoicing, workspace allocation,
                  reports, and operational workflows.
                </p>

              </div>

            </AnimatedContent>

          </div>

        </AnimatedContent>



        {/* RIGHT SIDE */}
        <div className="space-y-5">

          {/* Platform Overview */}
          <AnimatedContent
            distance={40}
            duration={1}
            delay={0.1}
            blur
          >

            <div
              className="
                bg-white/[0.05]
                border border-white/10
                rounded-3xl
                p-7
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-500/30
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                Platform Overview
              </h3>

              <p className="text-gray-300 leading-relaxed">
                CoWorkOS acts as a complete operating system
                for coworking spaces by centralizing
                customer management, workspace operations,
                finance, renewals, occupancy tracking,
                analytics, and branch coordination.
              </p>

            </div>

          </AnimatedContent>


          {/* Cards */}
          {cards.map((card, index) => (

            <AnimatedContent
              key={index}
              distance={30}
              duration={0.8}
              delay={index * 0.15}
              blur
            >

              <div
                className={`
                  rounded-3xl
                  p-6
                  border
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                  ${card.color}
                `}
              >

                <h4 className={`text-xl font-semibold mb-3 ${card.heading}`}>
                  {card.title}
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  {card.text}
                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Aboutsection