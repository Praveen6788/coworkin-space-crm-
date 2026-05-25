

const FeatureCards = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-20 text-white" id="features">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-16">

      <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
        Platform Features
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        Everything Needed to Run a Modern Coworking Space
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
        CoworkOS combines CRM, ERP, occupancy tracking,
        finance management, and operational workflows
        into one centralized SaaS ecosystem.
      </p>

    </div>


    {/* Feature Grid */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Feature Card */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
            📊
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Multi Location Dashboard
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Monitor occupancy, revenue, renewals,
          and operational metrics across all branches.
        </p>

      </div>


      {/* Revenue Leakage */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-red-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-2xl">
            💰
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Revenue Leakage Tracking
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Detect unpaid invoices, expiring leases,
          and underutilized workspaces before revenue loss.
        </p>

      </div>


      {/* Floor Map */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl">
            🏢
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Interactive Floor Map
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Visualize workspace occupancy,
          availability, and allocation in real time.
        </p>

      </div>


      {/* Pipeline */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl">
            📌
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Lead & Client Pipeline
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Manage onboarding workflows from
          lead acquisition to workspace activation.
        </p>

      </div>


      {/* Finance */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl">
            📑
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Finance & Billing
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Centralized invoices, payment tracking,
          recurring billing, and financial reporting.
        </p>

      </div>


      {/* RBAC */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-2xl">
            🔐
          </div>

          <span className="px-3 py-1 rounded-xl bg-green-500/10 text-green-400 text-xs">
            Live
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Role Based Access
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Separate operational workflows for admins,
          finance teams, managers, and clients.
        </p>

      </div>


      {/* Visitor Management */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl">
            👥
          </div>

          <span className="px-3 py-1 rounded-xl bg-yellow-500/10 text-yellow-400 text-xs">
            Beta
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Smart Visitor Management
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Track visitor entries, approvals,
          host notifications, and workspace access logs.
        </p>

      </div>


      {/* Conference Booking */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-2xl">
            📅
          </div>

          <span className="px-3 py-1 rounded-xl bg-yellow-500/10 text-yellow-400 text-xs">
            Beta
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Conference Room Booking
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Manage conference room reservations,
          schedules, availability, and booking conflicts.
        </p>

      </div>


      {/* Future Modules */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-gray-500/30 transition-all">

        <div className="flex items-center justify-between mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gray-500/10 flex items-center justify-center text-2xl">
            🚀
          </div>

          <span className="px-3 py-1 rounded-xl bg-gray-500/10 text-gray-300 text-xs">
            Phase 2
          </span>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Future Expansion Modules
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Ticket management, internal team chat,
          integrations layer, CMS, and AI operational insights.
        </p>

      </div>

    </div>

  </div>

</section>
  )
}

export default FeatureCards