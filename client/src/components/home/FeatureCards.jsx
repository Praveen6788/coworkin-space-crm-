import AnimatedContent from "../../../reactbits/Animate";



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
    title: "Visitor Management",
    text: "Track visitor approvals, host notifications, and workspace access logs.",
    badge: "Beta",
    border: "hover:border-pink-500/30",
    iconBg: "bg-pink-500/10",
    badgeBg: "bg-yellow-500/10 text-yellow-400",
  },

  {
    icon: "📅",
    title: "Meeting Room Booking",
    text: "Manage room reservations, schedules, and availability.",
    badge: "Beta",
    border: "hover:border-indigo-500/30",
    iconBg: "bg-indigo-500/10",
    badgeBg: "bg-yellow-500/10 text-yellow-400",
  },

  {
    icon: "🚀",
    title: "Expansion Modules",
    text: "AI insights, ticket management, CMS integrations, and advanced workflows.",
    badge: "Phase 2",
    border: "hover:border-gray-500/30",
    iconBg: "bg-gray-500/10",
    badgeBg: "bg-gray-500/10 text-gray-300",
  },

];



const FeatureCards = () => {

  return (

    <section
      className="
        relative
        py-16
        px-5 sm:px-6 lg:px-12
        text-white
        overflow-hidden
      "
      id="features"
    >



      {/* BACKGROUND GLOW */}



      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>



      <div className="relative z-10 max-w-6xl mx-auto">



        {/* HEADER */}



        <AnimatedContent
          distance={30}
          duration={0.9}
          blur
          className="text-center mb-12"
        >

          <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] mb-5 backdrop-blur-xl">

            Platform Features

          </div>



          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">

            Everything Needed to Run
            a Modern Coworking Space

          </h2>



          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">

            CoworkOS combines CRM,
            ERP, occupancy tracking,
            finance management, and
            operational workflows into
            one centralized SaaS ecosystem.

          </p>

        </AnimatedContent>



        {/* GRID */}



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {features.map((feature, index) => (

            <AnimatedContent
              key={index}
              distance={20}
              duration={0.7}
              delay={index * 0.05}
              blur
            >

              <div
                className={`
                  group
                  bg-white/[0.04]
                  border border-white/10
                  rounded-xl
                  p-4
                  backdrop-blur-2xl

                  transition-all duration-500

                  hover:-translate-y-1.5
                  hover:bg-white/[0.06]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                  ${feature.border}
                `}
              >



                {/* TOP */}



                <div className="flex items-center justify-between mb-4">



                  {/* ICON */}



                  <div
                    className={`
                      w-9 h-9
                      rounded-lg

                      ${feature.iconBg}

                      flex items-center justify-center

                      text-base

                      transition-all duration-500

                      group-hover:scale-105
                    `}
                  >

                    {feature.icon}

                  </div>



                  {/* BADGE */}



                  <span
                    className={`
                      px-2 py-[2px]
                      rounded-md
                      text-[9px]

                      border border-white/10

                      ${feature.badgeBg}
                    `}
                  >

                    {feature.badge}

                  </span>

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

                  {feature.title}

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

                  {feature.text}

                </p>

              </div>

            </AnimatedContent>

          ))}

        </div>

      </div>

    </section>

  );

};



export default FeatureCards;