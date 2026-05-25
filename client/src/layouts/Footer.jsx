const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] border-t border-gray-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              CoWork ERP
            </h2>

            <p className="text-sm leading-relaxed text-gray-400">
              Unified operating platform for coworking
              spaces with occupancy tracking, finance
              management, invoicing, and analytics.
            </p>
          </div>



          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="hover:text-white transition"
                >
                  Login
                </a>
              </li>

              <li>
                <a
                  href="/demo-manual"
                  className="hover:text-white transition"
                >
                  Demo Manual
                </a>
              </li>

            </ul>
          </div>



          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm">

              <li>Revenue Leakage Monitoring</li>

              <li>Workspace Management</li>

              <li>Occupancy Analytics</li>

              <li>Invoice Automation</li>

              <li>Finance Tracking</li>

            </ul>
          </div>



          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              <p>
                Hyderabad, Telangana
              </p>

              <p>
                +91 98765 43210
              </p>

              <p>
                support@coworkerp.com
              </p>

            </div>
          </div>

        </div>



        {/* Bottom Footer */}

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © 2026 CoWork ERP. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;