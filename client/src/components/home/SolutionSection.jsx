import AnimatedContent from "../../../reactbits/Animate"

const features = [
  {
    icon: "📊",
    title: "Multi-Center Dashboard",
    text: "Monitor occupancy, revenue, renewals, and branch performance across all coworking locations through one centralized dashboard.",
    color: "hover:border-blue-500/40",
  },
  {
    icon: "💰",
    title: "Revenue Leakage Monitoring",
    text: "Detect overdue renewals, unpaid invoices, and underutilized workspaces before they impact recurring revenue.",
    color: "hover:border-red-500/40",
  },
  {
    icon: "🏢",
    title: "Interactive Floor Map",
    text: "Visualize workspace occupancy, desk allocation, availability, and lease status through a real-time floor map.",
    color: "hover:border-green-500/40",
  },
  {
    icon: "📌",
    title: "Lead & Client Pipeline",
    text: "Manage client onboarding workflows from lead generation to workspace activation and renewal tracking.",
    color: "hover:border-orange-500/40",
  },
  {
    icon: "📑",
    title: "Finance & Billing",
    text: "Centralized invoice management, payment tracking, recurring billing visibility, and branch-wise financial analytics.",
    color: "hover:border-purple-500/40",
  },
  {
    icon: "🔐",
    title: "Role-Based Access",
    text: "Separate dashboards and workflows for admins, finance teams, branch managers, and workspace clients.",
    color: "hover:border-cyan-500/40",
  },
]

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
    text: "Analyze occupancy, collections, and operational performance.",
    color: "bg-purple-500/10",
  },
]

const SolutionSection = () => {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-20 text-white overflow-hidden"
      id="solution"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <AnimatedContent
          distance={40}
          duration={0.6}
          blur
          className="text-center mb-16"
        >

          <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 backdrop-blur-xl">
            Solution Approach
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Unified CRM + ERP Platform for Coworking Operations
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            CoworkOS centralizes workspace operations, client onboarding,
            finance management, occupancy tracking, and renewal workflows
            into one intelligent operational platform.
          </p>

        </AnimatedContent>


        {/* Features Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

  {features.map((item, index) => (

    <AnimatedContent
      key={index}
      distance={40}
      duration={0.6}
      delay={index * 0.1}
      blur
      className="h-full"
    >

      <div
        className={`
          h-full
          flex flex-col
          justify-start

          group
          bg-white/[0.04]
          border border-white/10

          rounded-3xl
          p-5 sm:p-6

          backdrop-blur-2xl

          transition-all duration-500

          hover:-translate-y-2
          hover:bg-white/[0.06]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

          ${item.color}
        `}
      >

        {/* Icon */}
        <div
          className="
            w-12 h-12
            sm:w-14 sm:h-14

            rounded-2xl
            bg-white/5

            flex items-center justify-center

            mb-5

            text-xl sm:text-2xl

            transition-all duration-500

            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          {item.icon}
        </div>


        {/* Title */}
        <h3
          className="
            text-xl sm:text-2xl
            font-semibold

            mb-3

            transition-all duration-300
            group-hover:translate-x-1
          "
        >
          {item.title}
        </h3>


        {/* Description */}
        <p
          className="
            text-gray-400
            leading-relaxed
            text-sm sm:text-base

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


        {/* Workflow */}
        <div className="mt-24" id="workflow">

          <AnimatedContent
            distance={40}
            duration={0.6}
            blur
            className="text-center mb-14"
          >

            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              End-to-End Operational Workflow
            </h3>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              CoworkOS unifies the entire coworking operational lifecycle
              into one connected workflow.
            </p>

          </AnimatedContent>


          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

  {workflow.map((step, index) => (

    <AnimatedContent
      key={index}
      distance={30}
      duration={0.8}
      delay={index * 0.12}
      blur
      className="h-full"
    >

      <div
        className="
          h-full
          flex flex-col
          justify-start

          group
          bg-white/[0.04]
          border border-white/10

          rounded-3xl
          p-5 sm:p-6

          text-center

          backdrop-blur-2xl

          transition-all duration-500

          hover:-translate-y-2
          hover:border-white/20
          hover:bg-white/[0.06]
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >

        {/* Step Number */}
        <div
          className={`
            w-14 h-14
            sm:w-16 sm:h-16

            rounded-2xl

            ${step.color}

            flex items-center justify-center

            mx-auto mb-4

            text-xl sm:text-2xl
            font-bold

            transition-all duration-500

            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          {step.number}
        </div>


        {/* Title */}
        <h4
          className="
            text-lg sm:text-xl
            font-semibold
            mb-3

            transition-all duration-300
            group-hover:translate-y-[-2px]
          "
        >
          {step.title}
        </h4>


        {/* Description */}
        <p
          className="
            text-gray-400
            text-sm
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
  )
}

export default SolutionSection