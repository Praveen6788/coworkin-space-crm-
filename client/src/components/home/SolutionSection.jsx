import AnimatedContent from "../../../reactbits/Animate";



const features = [

  {
    icon: "📊",
    title: "Multi-Center Dashboard",
    text: "Monitor occupancy, revenue, renewals, and branch performance across all coworking locations.",
    color: "hover:border-blue-500/30",
  },

  {
    icon: "💰",
    title: "Revenue Monitoring",
    text: "Detect overdue renewals, unpaid invoices, and underutilized workspaces.",
    color: "hover:border-red-500/30",
  },

  {
    icon: "🏢",
    title: "Interactive Floor Map",
    text: "Visualize occupancy, desk allocation, and workspace availability in real time.",
    color: "hover:border-green-500/30",
  },

  {
    icon: "📌",
    title: "Lead Pipeline",
    text: "Manage onboarding workflows from lead generation to workspace activation.",
    color: "hover:border-orange-500/30",
  },

  {
    icon: "📑",
    title: "Finance & Billing",
    text: "Centralized invoices, payment tracking, recurring billing, and analytics.",
    color: "hover:border-purple-500/30",
  },

  {
    icon: "🔐",
    title: "Role-Based Access",
    text: "Separate workflows for admins, finance teams, managers, and clients.",
    color: "hover:border-cyan-500/30",
  },

];



const workflow = [

  {
    number: "1",
    title: "Lead Tracking",
    text: "Capture and manage coworking inquiries.",
    color: "bg-blue-500/10",
  },

  {
    number: "2",
    title: "Workspace Allocation",
    text: "Assign available workspaces using floor maps.",
    color: "bg-green-500/10",
  },

  {
    number: "3",
    title: "Billing & Invoices",
    text: "Generate invoices and track recurring payments.",
    color: "bg-orange-500/10",
  },

  {
    number: "4",
    title: "Renewal Alerts",
    text: "Detect expiring contracts and overdue renewals.",
    color: "bg-red-500/10",
  },

  {
    number: "5",
    title: "Revenue Insights",
    text: "Analyze occupancy, collections, and performance.",
    color: "bg-purple-500/10",
  },

];



const SolutionSection = () => {

  return (

    <section
      className="
        relative

        py-16
        px-5 sm:px-6 lg:px-12

        text-white
        overflow-hidden
      "
      id="solution"
    >



      {/* BACKGROUND GLOW */}



      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>



      <div className="relative z-10 max-w-6xl mx-auto">



        {/* HEADER */}



        <AnimatedContent
          distance={25}
          duration={0.5}
          blur
          className="text-center mb-12"
        >

          <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] mb-5 backdrop-blur-xl">

            Solution Approach

          </div>



          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">

            Unified CRM + ERP
            Platform for Modern
            Coworking Operations

          </h2>



          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">

            CoworkOS centralizes workspace
            operations, onboarding,
            finance management, occupancy
            tracking, and renewals into
            one intelligent platform.

          </p>

        </AnimatedContent>



        {/* FEATURE GRID */}



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {features.map((item, index) => (

            <AnimatedContent
              key={index}
              distance={20}
              duration={0.5}
              delay={index * 0.06}
              blur
              className="h-full"
            >

              <div
                className={`
                  h-full
                  flex flex-col

                  group

                  bg-white/[0.04]
                  border border-white/10

                  rounded-2xl
                  p-4

                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:-translate-y-1
                  hover:bg-white/[0.06]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                  ${item.color}
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

                    transition-all duration-500

                    group-hover:scale-105
                  "
                >

                  {item.icon}

                </div>



                {/* TITLE */}



                <h3
                  className="
                    text-base
                    font-semibold

                    mb-2

                    transition-all duration-300

                    group-hover:translate-x-1
                  "
                >

                  {item.title}

                </h3>



                {/* DESCRIPTION */}



                <p
                  className="
                    text-gray-400
                    leading-relaxed

                    text-xs sm:text-sm

                    transition-colors duration-300

                    group-hover:text-gray-300
                  "
                >

                  {item.text}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>



        {/* WORKFLOW */}



        <div className="mt-16" id="workflow">



          <AnimatedContent
            distance={25}
            duration={0.5}
            blur
            className="text-center mb-10"
          >

            <h3 className="text-2xl sm:text-3xl font-bold mb-3">

              End-to-End Workflow

            </h3>



            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">

              CoworkOS unifies the entire
              coworking operational lifecycle
              into one connected workflow.

            </p>

          </AnimatedContent>



          {/* WORKFLOW GRID */}



          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

            {workflow.map((step, index) => (

              <AnimatedContent
                key={index}
                distance={18}
                duration={0.5}
                delay={index * 0.05}
                blur
                className="h-full"
              >

                <div
                  className="
                    h-full

                    group

                    bg-white/[0.04]
                    border border-white/10

                    rounded-2xl
                    p-4

                    text-center

                    backdrop-blur-2xl

                    transition-all duration-500

                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.06]
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                  "
                >



                  {/* STEP NUMBER */}



                  <div
                    className={`
                      w-10 h-10

                      rounded-xl

                      ${step.color}

                      flex items-center justify-center

                      mx-auto mb-3

                      text-base
                      font-semibold

                      transition-all duration-500

                      group-hover:scale-105
                    `}
                  >

                    {step.number}

                  </div>



                  {/* TITLE */}



                  <h4
                    className="
                      text-sm
                      font-semibold

                      mb-2

                      transition-all duration-300

                      group-hover:translate-y-[-2px]
                    "
                  >

                    {step.title}

                  </h4>



                  {/* DESCRIPTION */}



                  <p
                    className="
                      text-gray-400
                      text-xs
                      leading-relaxed

                      transition-colors duration-300

                      group-hover:text-gray-300
                    "
                  >

                    {step.text}

                  </p>

                </div>

              </AnimatedContent>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};



export default SolutionSection;