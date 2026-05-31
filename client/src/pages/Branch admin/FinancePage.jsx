import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Calendar,
  CircleDollarSign,
  CreditCard,
  Mail,
  Phone,
  Users,
} from "lucide-react";

import { fetchLeadById, fetchLeads } from "../../Api/lead";
import { fetchInvoices } from "../../Api/invoiceApi";
import { fetchPayments } from "../../Api/paymentApi";

const formatCurrency = (value = 0) => {
  if (typeof value === "string" && value.trim()) {
    return value;
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })
    .format(Number(value) || 0)
    .replace("₹", "Rs ");
};

function FinancePage() {
  const { leadId } = useParams();
  const [lead, setLead] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      try {
        setLoading(true);
        setError("");

        const [invoiceData, paymentData] =
          await Promise.all([
            fetchInvoices(),
            fetchPayments(),
          ]);

        const selectedLead = leadId
          ? await fetchLeadById(leadId)
          : (await fetchLeads())[0] || null;

        if (!ignore) {
          setInvoices(invoiceData);
          setPayments(paymentData);
          setLead(selectedLead);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Unable to load finance data"
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, [leadId]);

  const finance = useMemo(() => {
    const branch = lead?.branch;
    const branchInvoices = branch
      ? invoices.filter(
          (invoice) => invoice.branch === branch
        )
      : invoices;

    const branchRevenue = branchInvoices
      .filter((invoice) => invoice.status === "PAID")
      .reduce(
        (sum, invoice) =>
          sum + (invoice.totalAmount || 0),
        0
      );

    const pendingAmount = branchInvoices
      .filter((invoice) =>
        ["PENDING", "OVERDUE"].includes(
          invoice.status
        )
      )
      .reduce(
        (sum, invoice) =>
          sum + (invoice.totalAmount || 0),
        0
      );

    const paidPayments = payments
      .filter((payment) => payment.status === "RECEIVED")
      .reduce(
        (sum, payment) => sum + (payment.amount || 0),
        0
      );

    return {
      branchRevenue,
      pendingAmount,
      paidPayments,
      invoices: branchInvoices.slice(0, 5),
    };
  }, [invoices, lead, payments]);

  const workflow = [
    {
      title: "Quotation Sent",
      status:
        lead?.quotationStatus === "Sent" ||
        lead?.quotationStatus === "Accepted"
          ? "completed"
          : "active",
    },
    {
      title: "Invoice Generated",
      status:
        lead?.invoiceStatus === "Generated" ||
        lead?.invoiceStatus === "Sent"
          ? "completed"
          : "upcoming",
    },
    {
      title: "Payment",
      status:
        lead?.paymentStatus === "Paid"
          ? "completed"
          : "active",
    },
    {
      title: "Move-In Approval",
      status:
        lead?.accessStatus === "Approved" ||
        lead?.accessStatus === "Completed"
          ? "completed"
          : "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-5 lg:p-7 mt-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">
        <div>
          <p className="text-sky-400 text-[10px] tracking-[0.28em] uppercase mb-2">
            Branch Finance
          </p>
          <h1 className="text-3xl font-semibold mb-3">
            Finance & Billing
          </h1>
          <p className="text-slate-400 text-sm">
            Manage onboarding, quotations, invoices and workspace payments.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[
          ["Revenue", formatCurrency(finance.branchRevenue), "text-white"],
          ["Pending", formatCurrency(finance.pendingAmount), "text-amber-300"],
          ["Paid", formatCurrency(finance.paidPayments), "text-emerald-300"],
          ["Invoices", finance.invoices.length, "text-sky-300"],
        ].map(([label, value, color]) => (
          <div
            key={label}
            className="bg-[#0F172A] border border-white/10 rounded-3xl p-4"
          >
            <p className="text-slate-500 text-xs mb-2">
              {label}
            </p>
            <h2 className={`text-2xl font-semibold ${color}`}>
              {loading ? "Loading..." : value}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 space-y-5">
          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">
                  Client Overview
                </p>
                <h2 className="text-2xl font-semibold mb-1">
                  {lead?.name || "No lead selected"}
                </h2>
                <p className="text-slate-400 text-sm">
                  {lead?.company || "Direct Booking"}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-medium">
                {lead?.paymentStatus || "Pending"}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                [Phone, "Phone", lead?.phone],
                [Mail, "Email", lead?.email],
                [Building2, "Branch", lead?.branch],
                [Users, "Workspace", lead?.workspace],
              ].map(([Icon, label, value]) => (
                <div
                  key={label}
                  className="bg-white/[0.03] rounded-2xl p-4 border border-white/5"
                >
                  <Icon size={15} className="text-sky-400 mb-3" />
                  <p className="text-slate-500 text-xs mb-1">
                    {label}
                  </p>
                  <h3 className="text-sm truncate">
                    {value || "-"}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">
                  Finance Workflow
                </p>
                <h2 className="text-2xl font-semibold">
                  Booking Flow
                </h2>
              </div>
              <ArrowUpRight size={18} className="text-sky-400" />
            </div>

            <div className="space-y-3">
              {workflow.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-2xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "completed"
                          ? "bg-emerald-400"
                          : item.status === "active"
                          ? "bg-amber-400"
                          : "bg-slate-600"
                      }`}
                    />
                    <h3 className="text-sm font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-slate-300">
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.18em] mb-2">
                  Pricing
                </p>
                <h2 className="text-xl font-semibold">
                  Quotation
                </h2>
              </div>
              <CircleDollarSign size={18} className="text-sky-400" />
            </div>

            {[
              ["Quotation", lead?.quotationAmount],
              ["Discount", lead?.discount],
              ["Final Amount", lead?.finalAmount],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between bg-white/[0.03] rounded-2xl p-4 mb-3"
              >
                <p className="text-slate-400 text-sm">{label}</p>
                <h3 className="font-medium">{formatCurrency(value)}</h3>
              </div>
            ))}
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">
                Billing Status
              </h2>
              <CreditCard size={18} className="text-emerald-400" />
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
              <h3 className="text-amber-300 font-medium mb-1">
                {lead?.paymentStatus || "Pending"}
              </h3>
              <p className="text-sm text-slate-300">
                Invoice status: {lead?.invoiceStatus || "Not Generated"}
              </p>
            </div>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-[28px] p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">
                Access Approval
              </h2>
              <BadgeCheck size={18} className="text-emerald-400" />
            </div>
            <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400 text-xs">Move-In Date</p>
                <Calendar size={14} className="text-slate-500" />
              </div>
              <h3 className="font-medium">{lead?.moveIn || "-"}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePage;
