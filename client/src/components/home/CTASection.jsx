

const CTASection = () => {
  return (
   <section className="py-24 px-4 sm:px-6 lg:px-20">

  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-10 sm:p-16 text-white">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>


      {/* Content */}

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm mb-6">
          CoworkOS Platform
        </div>


        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">

          Streamline Multi-Center Coworking Operations

        </h2>


        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">

          Centralize occupancy tracking, billing, client onboarding,
          renewals, and workspace operations into one unified CRM + ERP ecosystem.

        </p>


        {/* CTA Buttons */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold text-lg w-full sm:w-auto">

            Launch Demo

          </button>


          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-semibold text-lg w-full sm:w-auto">

            Explore Features

          </button>

        </div>


        {/* Metrics */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

            <h3 className="text-4xl font-bold text-blue-400 mb-2">
              82%
            </h3>

            <p className="text-gray-400">
              Occupancy Visibility
            </p>

          </div>


          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

            <h3 className="text-4xl font-bold text-red-400 mb-2">
              ₹14L+
            </h3>

            <p className="text-gray-400">
              Revenue Leakage Tracked
            </p>

          </div>


          <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

            <h3 className="text-4xl font-bold text-green-400 mb-2">
              3x
            </h3>

            <p className="text-gray-400">
              Faster Operational Workflow
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default CTASection