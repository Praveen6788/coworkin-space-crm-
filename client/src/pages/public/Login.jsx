import { useNavigate } from "react-router-dom"
import AnimatedContent from "../../../reactbits/Animate"

function Login() {

  const navigate = useNavigate()

  const roles = [
    {
      role: "GLOBAL_ADMIN",
      icon: "🌍",
      title: "Global Admin",
      description:
        "Business analytics, multi-branch visibility & revenue monitoring.",
      gradient:
        "from-blue-500/10 to-indigo-500/10",
      border:
        "hover:border-blue-400/40",
      iconBg:
        "bg-blue-500/10",
    },

    {
      role: "BRANCH_ADMIN",
      icon: "🏢",
      title: "Branch Admin",
      description:
        "Workspace onboarding, occupancy tracking & operational workflows.",
      gradient:
        "from-green-500/10 to-emerald-500/10",
      border:
        "hover:border-green-400/40",
      iconBg:
        "bg-green-500/10",
    },

    {
      role: "CLIENT",
      icon: "👤",
      title: "Client Portal",
      description:
        "Workspace details, renewals, invoices & booking management.",
      gradient:
        "from-purple-500/10 to-fuchsia-500/10",
      border:
        "hover:border-purple-400/40",
      iconBg:
        "bg-purple-500/10",
    },
  ]

  const loginAs = (role) => {

    localStorage.setItem("role", role)

    if (role === "GLOBAL_ADMIN") {
      navigate("/global-admin/home")
    }

    if (role === "BRANCH_ADMIN") {
      navigate("/branch-admin/home")
    }

    if (role === "CLIENT") {
      navigate("/client/home")
    }
  }

  return (

    <div className="
      relative
      min-h-screen
      bg-[#0B0F19]
      overflow-hidden
      flex items-center justify-center
      px-4 py-10
    ">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full"></div>


      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <AnimatedContent
            distance={40}
            duration={1}
            blur
          >

            <div>

              {/* Badge */}
              <div className="
                inline-flex items-center
                px-4 py-2
                rounded-2xl

                bg-white/5
                border border-white/10

                text-sm text-gray-300

                backdrop-blur-xl

                mb-6
              ">
                CoworkOS Demo Access
              </div>


              {/* Heading */}
              <h1 className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-bold
                text-white

                leading-tight

                mb-6
              ">
                Explore
                <span className="text-blue-400">
                  {" "}CoworkOS{" "}
                </span>
                Workflows
              </h1>


              {/* Description */}
              <p className="
                text-gray-400
                text-base sm:text-lg
                leading-relaxed

                max-w-xl

                mb-10
              ">
                Access role-based experiences designed for
                global operators, branch managers, and workspace clients.
              </p>


              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 max-w-lg">

                {[
                  ["12+", "Branches"],
                  ["24/7", "Monitoring"],
                  ["82%", "Automation"],
                ].map((item, index) => (

                  <AnimatedContent
                    key={index}
                    distance={20}
                    duration={0.8}
                    delay={index * 0.1}
                    blur
                  >

                    <div
                      className="
                        bg-white/[0.04]
                        border border-white/10

                        rounded-2xl

                        p-4

                        backdrop-blur-xl

                        text-center

                        transition-all duration-500

                        hover:-translate-y-1
                        hover:border-white/20
                      "
                    >

                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item[0]}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {item[1]}
                      </p>

                    </div>

                  </AnimatedContent>
                ))}

              </div>

            </div>

          </AnimatedContent>



          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {roles.map((item, index) => (

              <AnimatedContent
                key={index}
                distance={30}
                duration={0.8}
                delay={index * 0.12}
                blur
              >

                <button
                  onClick={() => loginAs(item.role)}
                  className={`
                    group
                    w-full

                    bg-gradient-to-r
                    ${item.gradient}

                    border border-white/10

                    rounded-3xl

                    p-5 sm:p-6

                    backdrop-blur-2xl

                    transition-all duration-500

                    hover:-translate-y-2
                    hover:bg-white/[0.06]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

                    ${item.border}
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        w-14 h-14
                        rounded-2xl

                        ${item.iconBg}

                        flex items-center justify-center

                        text-2xl

                        transition-all duration-500

                        group-hover:scale-110
                        group-hover:rotate-3
                      `}
                    >
                      {item.icon}
                    </div>


                    {/* Content */}
                    <div className="flex-1 text-left">

                      <h2
                        className="
                          text-xl sm:text-2xl
                          font-semibold
                          text-white

                          mb-1

                          transition-all duration-300
                          group-hover:translate-x-1
                        "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                          text-sm sm:text-base
                          text-gray-400

                          transition-colors duration-300
                          group-hover:text-gray-300
                        "
                      >
                        {item.description}
                      </p>

                    </div>


                    {/* Arrow */}
                    <div
                      className="
                        text-gray-500
                        text-xl

                        transition-all duration-300

                        group-hover:translate-x-1
                        group-hover:text-white
                      "
                    >
                      →
                    </div>

                  </div>

                </button>

              </AnimatedContent>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login