import AnimatedContent from "../../../reactbits/Animate"

const features = [
  {
    icon: "📊",
    title: "Multi Location Dashboard",
    text: "Monitor occupancy, revenue, renewals, and operational metrics across all branches.",
    badge: "Live",
    border: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "💰",
    title: "Revenue Leakage Tracking",
    text: "Detect unpaid invoices, expiring leases, and underutilized workspaces before revenue loss.",
    badge: "Live",
    border: "hover:border-red-500/30",
    iconBg: "bg-red-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "🏢",
    title: "Interactive Floor Map",
    text: "Visualize workspace occupancy, availability, and allocation in real time.",
    badge: "Live",
    border: "hover:border-green-500/30",
    iconBg: "bg-green-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "📌",
    title: "Lead & Client Pipeline",
    text: "Manage onboarding workflows from lead acquisition to workspace activation.",
    badge: "Live",
    border: "hover:border-orange-500/30",
    iconBg: "bg-orange-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "📑",
    title: "Finance & Billing",
    text: "Centralized invoices, payment tracking, recurring billing, and financial reporting.",
    badge: "Live",
    border: "hover:border-purple-500/30",
    iconBg: "bg-purple-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "🔐",
    title: "Role Based Access",
    text: "Separate operational workflows for admins, finance teams, managers, and clients.",
    badge: "Live",
    border: "hover:border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    badgeBg: "bg-green-500/10 text-green-400",
  },
  {
    icon: "👥",
    title: "Smart Visitor Management",
    text: "Track visitor entries, approvals, host notifications, and workspace access logs.",
    badge: "Beta",
    border: "hover:border-pink-500/30",
    iconBg: "bg-pink-500/10",
    badgeBg: "bg-yellow-500/10 text-yellow-400",
  },
  {
    icon: "📅",
    title: "Conference Room Booking",
    text: "Manage conference room reservations, schedules, availability, and booking conflicts.",
    badge: "Beta",
    border: "hover:border-indigo-500/30",
    iconBg: "bg-indigo-500/10",
    badgeBg: "bg-yellow-500/10 text-yellow-400",
  },
  {
    icon: "🚀",
    title: "Future Expansion Modules",
    text: "Ticket management, internal team chat, integrations layer, CMS, and AI operational insights.",
    badge: "Phase 2",
    border: "hover:border-gray-500/30",
    iconBg: "bg-gray-500/10",
    badgeBg: "bg-gray-500/10 text-gray-300",
  },
]

const FeatureCards = () => {
  return (
    <section
      className="
        relative
        py-24
        px-14 sm:px-6 lg:px-20
        text-white
        overflow-hidden
      "
      id="features"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <AnimatedContent
          distance={40}
          duration={1}
          blur
          className="text-center mb-16"
        >

          <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 backdrop-blur-xl">
            Platform Features
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Everything Needed to Run a Modern Coworking Space
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            CoworkOS combines CRM, ERP, occupancy tracking,
            finance management, and operational workflows
            into one centralized SaaS ecosystem.
          </p>

        </AnimatedContent>


        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {features.map((feature, index) => (

            <AnimatedContent
              key={index}
              distance={30}
              duration={0.8}
              delay={index * 0.08}
              blur
            >

              <div
                className={`
                  group
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  p-5 sm:p-6
                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:-translate-y-2
                  hover:bg-white/[0.06]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

                  ${feature.border}
                `}
              >

                {/* Top */}
                <div className="flex items-center justify-between mb-4">

                  {/* Icon */}
                  <div
                    className={`
                      w-11 h-11
                      sm:w-12 sm:h-12
                      rounded-xl
                      ${feature.iconBg}

                      flex items-center justify-center

                      text-lg sm:text-xl

                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    `}
                  >
                    {feature.icon}
                  </div>

                  {/* Badge */}
                  <span
                    className={`
                      px-2.5 py-0.5
                      rounded-lg
                      text-[10px] sm:text-xs
                      border border-white/10
                      transition-all duration-300

                      ${feature.badgeBg}
                    `}
                  >
                    {feature.badge}
                  </span>

                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl font-semibold mb-3

                    transition-all duration-300
                    group-hover:translate-x-1
                  "
                >
                  {feature.title}
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
                  {feature.text}
                </p>

              </div>

            </AnimatedContent>
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeatureCards