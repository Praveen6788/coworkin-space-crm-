import { useState, useEffect } from "react"
import { Building2, Users, Calendar, CheckCircle2, Clock, XCircle } from "lucide-react"
import { fetchClientAllocations } from "../../Api/allocationApi"

function Bookings() {
  const [allocations, setAllocations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAllocations()
  }, [])

  const loadAllocations = async () => {
    try {
      const clientId = localStorage.getItem("clientId")
      const data = await fetchClientAllocations(clientId)
      setAllocations(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm">Loading bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] mt-20 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-6">
          <p className="text-sky-600 text-[11px] uppercase tracking-[0.18em] font-medium mb-3">
            Client Portal
          </p>
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#0F172A] mb-2">
            My Bookings
          </h1>
          <p className="text-slate-500 text-sm">
            View all your active and past workspace allocations.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Bookings",
              value: allocations.length,
              color: "text-sky-600",
              bg: "bg-sky-50",
              border: "border-sky-100"
            },
            {
              label: "Active",
              value: allocations.filter(a => a.status === "ACTIVE").length,
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-emerald-100"
            },
            {
              label: "Expired",
              value: allocations.filter(a => a.status === "EXPIRED").length,
              color: "text-red-500",
              bg: "bg-red-50",
              border: "border-red-100"
            },
            {
              label: "Total Seats",
              value: allocations.reduce((sum, a) => sum + (a.allocatedSeats || 0), 0),
              color: "text-violet-600",
              bg: "bg-violet-50",
              border: "border-violet-100"
            },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} border ${stat.border} rounded-2xl p-4`}>
              <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400 mb-2">
                {stat.label}
              </p>
              <h3 className={`text-2xl font-semibold ${stat.color}`}>
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* BOOKINGS LIST */}
        {allocations.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <Building2 size={32} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-slate-500 font-medium mb-1">No bookings yet</h3>
            <p className="text-slate-400 text-sm">Your workspace allocations will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {allocations.map((allocation) => {

              const workspace = allocation.workspaceId
              const isActive = allocation.status === "ACTIVE"

              return (
                <div
                  key={allocation._id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    {/* LEFT */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
                        <Building2 size={20} className="text-sky-500" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[15px] font-semibold text-[#0F172A]">
                            {workspace?.workspaceName || "Workspace"}
                          </h3>
                          <div className={`
                            px-2.5 py-0.5 rounded-full text-[11px] font-medium
                            ${isActive
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                              : "bg-red-50 text-red-500 border border-red-200"
                            }
                          `}>
                            {allocation.status}
                          </div>
                        </div>

                        <p className="text-[12px] text-slate-500 mb-2">
                          {workspace?.workspaceType || "—"}
                        </p>

                        {/* DETAILS ROW */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                            <Building2 size={13} className="text-slate-400" />
                            {allocation.branch}
                          </div>
                          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                            <Users size={13} className="text-slate-400" />
                            {allocation.allocatedSeats} seats
                          </div>
                          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                            <Calendar size={13} className="text-slate-400" />
                            {new Date(allocation.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3 lg:flex-shrink-0">
                      {workspace?.monthlyRate > 0 && (
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-0.5">
                            /month
                          </p>
                          <h3 className="text-lg font-semibold text-sky-600">
                            ₹{workspace.monthlyRate.toLocaleString()}
                          </h3>
                        </div>
                      )}
                      {workspace?.hourlyRate > 0 && workspace?.monthlyRate === 0 && (
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-0.5">
                            /hour
                          </p>
                          <h3 className="text-lg font-semibold text-sky-600">
                            ₹{workspace.hourlyRate.toLocaleString()}
                          </h3>
                        </div>
                      )}
                      {workspace?.dailyRate > 0 && workspace?.monthlyRate === 0 && workspace?.hourlyRate === 0 && (
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-0.5">
                            /day
                          </p>
                          <h3 className="text-lg font-semibold text-sky-600">
                            ₹{workspace.dailyRate.toLocaleString()}
                          </h3>
                        </div>
                      )}

                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center
                        ${isActive ? "bg-emerald-50" : "bg-red-50"}
                      `}>
                        {isActive
                          ? <CheckCircle2 size={18} className="text-emerald-500" />
                          : <XCircle size={18} className="text-red-400" />
                        }
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}

export default Bookings