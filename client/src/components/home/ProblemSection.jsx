

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-20 text-white" id="problem" >

  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-16">

      <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
        Problem Statement
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        Coworking Operations Are Still Fragmented
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
        Multi-center coworking operators still rely on disconnected tools,
        spreadsheets, WhatsApp communication, and manual workflows to manage
        daily operations.
      </p>

    </div>


    {/* Problem Grid */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* Card 1 */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-red-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">📄</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Spreadsheet Dependency
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Most coworking operators still manage occupancy, renewals,
          and invoices manually using spreadsheets and fragmented records.
        </p>

      </div>


      {/* Card 2 */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">💬</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Scattered Communication
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Visitor coordination, renewals, onboarding, and support
          conversations happen across WhatsApp and disconnected channels.
        </p>

      </div>


      {/* Card 3 */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">📉</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Revenue Leakage
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Missed renewals, delayed payments, and poor visibility
          across branches directly impact recurring revenue.
        </p>

      </div>


      {/* Card 4 */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">🏢</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          No Unified Platform
        </h3>

        <p className="text-gray-400 leading-relaxed">
          There is no centralized SaaS platform specifically built
          for coworking operators combining CRM, ERP, bookings,
          finance, and operations.
        </p>

      </div>

    </div>


    {/* Bottom Highlight */}

    <div className="mt-16 bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 sm:p-10">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div>

          <h3 className="text-3xl font-bold mb-4">
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

          <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
            <h4 className="text-4xl font-bold text-red-400 mb-2">
              40%
            </h4>

            <p className="text-gray-400 text-sm">
              Renewal Miss Rate
            </p>
          </div>


          <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
            <h4 className="text-4xl font-bold text-orange-400 mb-2">
              3x
            </h4>

            <p className="text-gray-400 text-sm">
              Operational Overhead
            </p>
          </div>


          <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
            <h4 className="text-4xl font-bold text-blue-400 mb-2">
              24+
            </h4>

            <p className="text-gray-400 text-sm">
              Tools Used Separately
            </p>
          </div>


          <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
            <h4 className="text-4xl font-bold text-green-400 mb-2">
              ₹14L+
            </h4>

            <p className="text-gray-400 text-sm">
              Revenue At Risk
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default ProblemSection