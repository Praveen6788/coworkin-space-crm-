import { Link} from "react-router-dom"
import { ArrowRight } from "lucide-react"
const HeroSection = () => {
  return (
     <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[80vh] text-white  ">

        {/* Left Content */}

        <div>

          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm sm:text-base">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Multi-Center Coworking ERP
          </div>


          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Unified Operating System for Coworking Spaces
          </h1>


          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Reduce revenue leakage, automate renewals,
            manage occupancy, and streamline coworking
            operations across multiple branches.
          </p>


          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/login"
              className="primary-btn flex items-center justify-center gap-2"
            >
              Explore Demo
              <ArrowRight size={18} />
            </Link>


            <button className="glass-card px-6 py-3 text-sm sm:text-base">
              View Features
            </button>

          </div>

        </div>


        {/* Right Dashboard Preview */}

        <div className="glass-card p-4 sm:p-6 w-full overflow-hidden text-white">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

            <div className="kpi-card">
              <p className="text-gray-400 text-sm mb-2">
                Occupancy
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                82%
              </h2>
            </div>

            <div className="kpi-card">
              <p className="text-gray-400 text-sm mb-2">
                Revenue
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                $48.2k
              </h2>
            </div>

          </div>

          <div className="space-y-4">
            <div className="dashboard-panel rounded-3xl bg-slate-950 p-4">
              <p className="text-sm text-gray-400 mb-3">Branch utilization</p>
              <div className="h-32 rounded-2xl bg-slate-900" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="panel-card rounded-3xl bg-slate-950 p-4">
                <p className="text-gray-400 text-sm">Active members</p>
                <p className="text-xl font-bold">1,240</p>
              </div>
              <div className="panel-card rounded-3xl bg-slate-950 p-4">
                <p className="text-gray-400 text-sm">Invoice due</p>
                <p className="text-xl font-bold">$12.3k</p>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default HeroSection