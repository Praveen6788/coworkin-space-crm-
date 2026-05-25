const Aboutsection = () => {
  return (
    <div
      className="min-h-screen bg-[#0B0F19] text-white py-10 px-4"
      id="About"
    >

      <section
        id="about"
        className="py-10 px-2 sm:px-4 lg:px-10"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div>

            <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-4">
              About CoWorkOS
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Unified CRM + ERP Platform
              for Modern Coworking Spaces
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              <span className="text-white font-semibold">
                CoWorkOS
              </span>{" "}
              is a centralized SaaS platform designed
              specifically for coworking operators to
              manage bookings, occupancy, clients,
              renewals, finances, and branch operations
              from one unified dashboard.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Many coworking businesses still depend on
              spreadsheets, WhatsApp groups, manual tracking,
              and disconnected software tools. As multiple
              branches grow, operations become difficult
              to manage efficiently.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              CoWorkOS solves this problem by combining
              CRM and ERP functionalities into one smart
              ecosystem built for coworking businesses.
            </p>



            {/* CRM Explanation */}

            <div className="mt-8">

              <h3 className="text-2xl font-bold mb-3 text-blue-400">
                What is CRM?
              </h3>

              <p className="text-gray-400 leading-relaxed">
                CRM (Customer Relationship Management)
                helps coworking operators manage clients,
                leads, onboarding, renewals, bookings,
                communication, and customer interactions
                efficiently from a centralized system.
              </p>

            </div>



            {/* ERP Explanation */}

            <div className="mt-8">

              <h3 className="text-2xl font-bold mb-3 text-green-400">
                What is ERP?
              </h3>

              <p className="text-gray-400 leading-relaxed">
                ERP (Enterprise Resource Planning)
                helps manage business operations such as
                finance, invoicing, occupancy tracking,
                workspace allocation, branch operations,
                reports, and internal workflows in real-time.
              </p>

            </div>

          </div>



          {/* Right Side Cards */}

          <div className="space-y-5">

            {/* Platform Overview */}

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

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



            {/* Problem */}

            <div className="border border-red-500/20 bg-red-500/10 rounded-2xl p-5">

              <h4 className="text-xl font-semibold text-red-400 mb-2">
                Problem
              </h4>

              <p className="text-gray-300 leading-relaxed">
                A coworking company with multiple branches
                struggles to track renewals, bookings,
                occupancy, and payments because operations
                are managed manually across spreadsheets
                and separate tools.
              </p>

            </div>



            {/* Impact */}

            <div className="border border-yellow-500/20 bg-yellow-500/10 rounded-2xl p-5">

              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Impact
              </h4>

              <p className="text-gray-300 leading-relaxed">
                Missed renewals, revenue leakage,
                communication gaps, poor occupancy visibility,
                and inefficient operations reduce overall
                business growth and customer satisfaction.
              </p>

            </div>



            {/* Solution */}

            <div className="border border-green-500/20 bg-green-500/10 rounded-2xl p-5">

              <h4 className="text-xl font-semibold text-green-400 mb-2">
                Solution
              </h4>

              <p className="text-gray-300 leading-relaxed">
                CoWorkOS automates renewals, centralizes
                branch operations, manages finance,
                tracks occupancy in real-time,
                and streamlines coworking workflows
                through one intelligent ERP platform.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Aboutsection;