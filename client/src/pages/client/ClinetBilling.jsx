import { useState, useEffect } from "react"
import {
  Building2, Users, Calendar, CreditCard,
  FileText, BadgeCheck, CircleDollarSign, CheckCircle2, Clock
} from "lucide-react"
import { fetchClientInvoices } from "../../Api/invoiceApi"
import { fetchClientPayments, recordPayment } from "../../Api/paymentApi"

function ClientBillingPage() {
  const [invoices, setInvoices] = useState([])
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [payingId, setPayingId] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

const loadData = async () => {
    try {
      const clientId = localStorage.getItem("clientId")
      console.log("clientId:", clientId) // ← add here
      
      const [inv, pay] = await Promise.all([
        fetchClientInvoices(clientId),
        fetchClientPayments(clientId),
      ])
      setInvoices(inv)
      setPayments(pay)
    } catch (error) {
      console.error("Billing load error:", error.response?.data || error.message) // ← and change this
    } finally {
      setLoading(false)
    }
  }

  const handlePayNow = async (invoice) => {
    try {
      setPayingId(invoice._id)
      await recordPayment(invoice._id, { paymentMode: "UPI" })
      await loadData() // refresh
    } catch (error) {
      console.log(error)
      alert("Payment failed")
    } finally {
      setPayingId(null)
    }
  }

  const totalDue = invoices
    .filter(inv => inv.status === "PENDING")
    .reduce((sum, inv) => sum + (inv.totalAmount || 0), 0)

  const totalPaid = invoices
    .filter(inv => inv.status === "PAID")
    .reduce((sum, inv) => sum + (inv.totalAmount || 0), 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm">Loading billing...</p>
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
            Billing & Payments
          </h1>
          <p className="text-slate-500 text-sm">
            View invoices, payment history and manage your billing.
          </p>
        </div>

        {/* HERO STATS */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-6 lg:p-7 text-white mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-white/70 text-[11px] uppercase tracking-[0.18em] mb-2">
                Total Due
              </p>
              <h2 className="text-3xl font-semibold">
                ₹{totalDue.toLocaleString()}
              </h2>
            </div>
            <div>
              <p className="text-white/70 text-[11px] uppercase tracking-[0.18em] mb-2">
                Total Paid
              </p>
              <h2 className="text-3xl font-semibold">
                ₹{totalPaid.toLocaleString()}
              </h2>
            </div>
            <div>
              <p className="text-white/70 text-[11px] uppercase tracking-[0.18em] mb-2">
                Total Invoices
              </p>
              <h2 className="text-3xl font-semibold">
                {invoices.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* LEFT — INVOICES */}
          <div className="xl:col-span-2 space-y-4">

            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-[#0F172A]">Invoices</h2>
              <div className="px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 text-[12px] font-medium">
                {invoices.length} total
              </div>
            </div>

            {invoices.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <FileText size={28} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">No invoices yet.</p>
              </div>
            ) : (
              invoices.map((invoice) => {
                const isPaid = invoice.status === "PAID"
                const isPaying = payingId === invoice._id

                return (
                  <div
                    key={invoice._id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                      {/* LEFT */}
                      <div className="flex items-start gap-4">
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                          ${isPaid ? "bg-emerald-50 border border-emerald-100" : "bg-amber-50 border border-amber-100"}
                        `}>
                          <FileText size={18} className={isPaid ? "text-emerald-500" : "text-amber-500"} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-[15px] font-semibold text-[#0F172A]">
                              {invoice.invoiceNumber}
                            </h3>
                            <div className={`
                              px-2.5 py-0.5 rounded-full text-[11px] font-medium
                              ${isPaid
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                : "bg-amber-50 text-amber-600 border border-amber-200"
                              }
                            `}>
                              {invoice.status}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 mt-1">
                            <p className="text-[12px] text-slate-500">
                              {invoice.billingMonth}
                            </p>
                            <p className="text-[12px] text-slate-500">
                              Branch: {invoice.branch}
                            </p>
                            {invoice.dueDate && !isPaid && (
                              <p className="text-[12px] text-red-400">
                                Due: {new Date(invoice.dueDate).toLocaleDateString("en-IN")}
                              </p>
                            )}
                            {invoice.paidDate && isPaid && (
                              <p className="text-[12px] text-emerald-500">
                                Paid: {new Date(invoice.paidDate).toLocaleDateString("en-IN")}
                              </p>
                            )}
                          </div>

                          {/* AMOUNT BREAKDOWN */}
                          <div className="flex gap-4 mt-2">
                            <p className="text-[11px] text-slate-400">
                              Base: ₹{invoice.amount?.toLocaleString()}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              GST ({invoice.gst}%): ₹{(invoice.totalAmount - invoice.amount)?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex items-center gap-3 lg:flex-shrink-0">
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-0.5">
                            Total
                          </p>
                          <h3 className="text-lg font-semibold text-sky-600">
                            ₹{invoice.totalAmount?.toLocaleString()}
                          </h3>
                        </div>

                        {isPaid ? (
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                            <CheckCircle2 size={18} className="text-emerald-500" />
                          </div>
                        ) : (
                          <button
                            onClick={() => handlePayNow(invoice)}
                            disabled={isPaying}
                            className="h-10 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white text-[12px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isPaying ? "..." : "Pay Now"}
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* RIGHT — PAYMENT HISTORY */}
          <div className="space-y-4">

            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-[#0F172A]">Payments</h2>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-[12px] font-medium">
                {payments.length} total
              </div>
            </div>

            {payments.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
                <CreditCard size={24} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">No payments yet.</p>
              </div>
            ) : (
              payments.map((payment) => (
                <div
                  key={payment._id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <CreditCard size={15} className="text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#0F172A]">
                          ₹{payment.amount?.toLocaleString()}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {payment.paymentMode}
                        </p>
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-[11px] font-medium">
                      {payment.status}
                    </div>
                  </div>

                  {payment.transactionId && (
                    <p className="text-[11px] text-slate-400 mb-2">
                      TXN: {payment.transactionId}
                    </p>
                  )}

                  <p className="text-[11px] text-slate-400">
                    {new Date(payment.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })}
                  </p>
                </div>
              ))
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

export default ClientBillingPage