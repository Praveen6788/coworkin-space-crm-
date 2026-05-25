

const SolutionSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-20 text-white" id="solution">

  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}

    <div className="text-center mb-16">

      <div className="inline-flex items-center px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
        Solution Approach
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        A Unified CRM + ERP Platform for Coworking Operations
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
        CoworkOS centralizes workspace operations, client onboarding,
        finance management, occupancy tracking, and renewal workflows
        into one intelligent operational platform.
      </p>

    </div>


    {/* Main Feature Grid */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Dashboard */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">📊</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Multi-Center Dashboard
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Monitor occupancy, revenue, renewals, and branch performance
          across all coworking locations through one centralized dashboard.
        </p>

      </div>


      {/* Revenue Leakage */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-red-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">💰</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Revenue Leakage Monitoring
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Detect overdue renewals, unpaid invoices, and underutilized
          workspaces before they impact recurring revenue.
        </p>

      </div>


      {/* Floor Map */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-green-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">🏢</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Interactive Floor Map
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Visualize workspace occupancy, desk allocation,
          availability, and lease status through a real-time floor map.
        </p>

      </div>


      {/* Pipeline */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">📌</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Lead & Client Pipeline
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Manage client onboarding workflows from lead generation
          to workspace activation and renewal tracking.
        </p>

      </div>


      {/* Finance */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">📑</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Finance & Billing
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Centralized invoice management, payment tracking,
          recurring billing visibility, and branch-wise financial analytics.
        </p>

      </div>


      {/* Role Based */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-500/30 transition-all">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
          <span className="text-2xl">🔐</span>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Role-Based Access
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Separate dashboards and workflows for admins,
          finance teams, branch managers, and workspace clients.
        </p>

      </div>

    </div>


    {/* Workflow Section */}

    <div className="mt-20 " id="workflow">

      <div className="text-center mb-14">

        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
          End-to-End Operational Workflow
        </h3>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          CoworkOS unifies the entire coworking operational lifecycle
          into one connected workflow.
        </p>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {/* Step 1 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-5 text-2xl">
            1
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Lead Tracking
          </h4>

          <p className="text-gray-400 text-sm">
            Capture and manage coworking inquiries.
          </p>

        </div>


        {/* Step 2 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-5 text-2xl">
            2
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Workspace Allocation
          </h4>

          <p className="text-gray-400 text-sm">
            Assign available workspaces using floor maps.
          </p>

        </div>


        {/* Step 3 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5 text-2xl">
            3
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Billing & Invoices
          </h4>

          <p className="text-gray-400 text-sm">
            Generate invoices and track recurring payments.
          </p>

        </div>


        {/* Step 4 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-5 text-2xl">
            4
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Renewal Alerts
          </h4>

          <p className="text-gray-400 text-sm">
            Detect expiring contracts and overdue renewals.
          </p>

        </div>


        {/* Step 5 */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-5 text-2xl">
            5
          </div>

          <h4 className="text-xl font-semibold mb-3">
            Revenue Insights
          </h4>

          <p className="text-gray-400 text-sm">
            Analyze occupancy, collections, and operational performance.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default SolutionSection