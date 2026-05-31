import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MapPin, Building2, ShieldCheck, Clock3 } from "lucide-react"
import { fetchBranchById } from "../../Api/branchApi"
import { fetchBranchWorkspaces } from "../../Api/workspaceApi"
import { generateInvoice } from "../../Api/invoiceApi"

const WORKSPACE_TYPES = [
  { type: "Private Cabin",  icon: "🏢", desc: "Fully enclosed private office" },
  { type: "Dedicated Desk", icon: "🪑", desc: "Your own fixed desk" },
  { type: "Hot Desk",       icon: "⚡", desc: "Flexible open seating" },
  { type: "Meeting Room",   icon: "🤝", desc: "Bookable conference space" },
  { type: "Day Pass",       icon: "🎫", desc: "Drop-in for the day" },
]

function BranchBookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [branch, setBranch] = useState(null)
  const [workspaces, setWorkspaces] = useState([])
  const [loadingBranch, setLoadingBranch] = useState(true)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    workspaceType: "Hot Desk",
    seats: 1,
    moveIn: "",
    budget: "",
  })

  useEffect(() => {
    loadBranch()
  }, [id])

  const loadBranch = async () => {
    try {
      const data = await fetchBranchById(id)
      setBranch(data)
      const ws = await fetchBranchWorkspaces(data.branchName)
      setWorkspaces(ws)
      if (ws.length > 0) {
        setFormData(prev => ({ ...prev, workspaceType: ws[0].workspaceType }))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingBranch(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
const handleBooking = async () => {
  try {
    setLoading(true)
    const clientId = localStorage.getItem("clientId")

    if (!clientId) {
      alert("Session expired. Please log in again.")
      return
    }

    const selectedWorkspace = workspaces.find(
      (ws) => ws.workspaceType === formData.workspaceType
    )

    if (!selectedWorkspace) {
      alert("Selected workspace type not available at this branch")
      return
    }

    const seats = Number(formData.seats) || 1

    if (selectedWorkspace.availableSeats < seats) {
      alert("Not enough seats available for this workspace")
      return
    }

    await generateInvoice(
      clientId,
      selectedWorkspace._id,
      branch.branchName,
      seats
    )

    alert("Invoice generated. Seats will be allocated after payment.")
    navigate("/client/bookings")

  } catch (error) {
    console.log("Booking error:", error)
    alert(
      error?.response?.data?.message || "Booking failed. Please try again."
    )
  } finally {
    setLoading(false)
  }
}

  if (loadingBranch) return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading...</div>

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Branch not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <section className="relative mt-20 h-[35vh] min-h-[280px] overflow-hidden">
        <img
          src={branch.image}
          alt={branch.branchName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="w-full">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-[11px] font-medium mb-4">
              <Building2 size={13} />
              Premium Workspace
            </div>

            <h1 className="text-4xl lg:text-5xl leading-none font-semibold text-white mb-3">
              {branch.branchName}
            </h1>

            <div className="flex items-center gap-2 text-white/80 text-sm mb-5">
              <MapPin size={14} />
              {branch.address}
            </div>

          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* LEFT — Workspace Type Cards */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-5">

                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-sky-600 font-medium mb-2">
                      Workspace Types
                    </p>
                    <h2 className="text-2xl font-semibold text-[#0F172A]">
                      Choose Your Space
                    </h2>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 text-[12px] font-medium">
                    5 Types
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {WORKSPACE_TYPES.map((ws) => {

                    const match = workspaces.find(
                      (w) => w.workspaceType === ws.type
                    )

                    const isSelected = formData.workspaceType === ws.type
                    const unavailable = match?.status === "FULLY_OCCUPIED"

                    return (
                      <div
                        key={ws.type}
                        onClick={() => {
                          if (!unavailable && match) {
                            setFormData(prev => ({ ...prev, workspaceType: ws.type }))
                          }
                        }}
                        className={`
                          border rounded-2xl p-4 transition-all duration-300
                          ${!match || unavailable
                            ? "opacity-50 cursor-not-allowed border-slate-200 bg-slate-50"
                            : "cursor-pointer"
                          }
                          ${isSelected && match && !unavailable
                            ? "border-sky-400 bg-sky-50 shadow-md"
                            : match && !unavailable
                            ? "border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md hover:border-sky-200"
                            : ""
                          }
                        `}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-2xl mb-2 block">{ws.icon}</span>
                            <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                              {ws.type}
                            </h3>
                            <p className="text-[12px] text-slate-500">{ws.desc}</p>
                          </div>

                          {match && (
                            <div className="text-right">
                              <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 mb-1">
                                /month
                              </p>
                              <h3 className="text-[18px] font-semibold text-sky-600">
                                ₹{match.monthlyRate}
                              </h3>
                            </div>
                          )}
                        </div>

                        {match ? (
                          <div className="flex flex-wrap gap-2">
                            <div className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-600">
                              {match.availableSeats} seats free
                            </div>
                            <div className={`
                              px-2.5 py-1 rounded-lg text-[11px] font-medium
                              ${match.status === "AVAILABLE"
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                : match.status === "FULLY_OCCUPIED"
                                ? "bg-red-50 text-red-600 border border-red-200"
                                : "bg-amber-50 text-amber-600 border border-amber-200"
                              }
                            `}>
                              {match.status.replace(/_/g, " ")}
                            </div>
                          </div>
                        ) : (
                          <div className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-400 w-fit">
                            Not at this branch
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>

            {/* RIGHT — Booking Form */}
            <div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5">

                <p className="text-[11px] uppercase tracking-[0.18em] text-sky-600 font-medium mb-2">
                  Workspace Allocation
                </p>
                <h2 className="text-2xl font-semibold text-[#0F172A] mb-5">
                  Book Workspace
                </h2>

                <div className="space-y-3">

                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleChange} placeholder="Full Name"
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />
                  <input
                    type="text" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="Phone Number"
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="Email Address"
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />
                  <input
                    type="text" name="company" value={formData.company}
                    onChange={handleChange} placeholder="Company Name"
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />

                  {/* Workspace type select — synced with cards */}
                  <select
  name="workspaceType"
  value={formData.workspaceType}
  onChange={(e) => setFormData(prev => ({
    ...prev,
    workspaceType: e.target.value,
    seats: 1
  }))}
  className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
>
  {workspaces.map((ws) => (
    <option key={ws._id} value={ws.workspaceType}>
      {ws.workspaceName} — {ws.workspaceType}
    </option>
  ))}
</select>

                  <input
                    type="number" name="seats" value={formData.seats}
                    onChange={handleChange} placeholder="Seats Required" min={1}
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />
                  <input
                    type="date" name="moveIn" value={formData.moveIn}
                    onChange={handleChange}
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />
                  <input
                    type="text" name="budget" value={formData.budget}
                    onChange={handleChange} placeholder="Expected Budget"
                    className="w-full h-10 px-4 rounded-xl border border-slate-200 outline-none text-sm"
                  />

                  <button
                    onClick={handleBooking}
                    disabled={loading || !formData.workspaceType}
                    className="w-full h-11 rounded-xl bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Generate Invoice"}
                  </button>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px] uppercase tracking-[0.15em] mb-2">
                      <Clock3 size={12} />
                      Capacity
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#0F172A]">
                      {branch.totalCapacity}
                    </h3>
                  </div>

                  <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px] uppercase tracking-[0.15em] mb-2">
                      <ShieldCheck size={12} />
                      Available
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#0F172A]">
                      {branch.availableCapacity}
                    </h3>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default BranchBookingPage
