import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Gauge,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const formatCurrency = (amount = 0) => {
  if (amount >= 10000000) return `Rs ${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `Rs ${(amount / 100000).toFixed(1)}L`;

  return `Rs ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount)}`;
};

const emptyInsights = {
  occupancyForecast: {
    currentOccupancy: 0,
    projectedOccupancy: 0,
    projectedOccupiedSeats: 0,
    totalSeats: 0,
    bookedSeats: 0,
    demandSeats: 0,
    riskSeats: 0,
    status: "Waiting for workspace data",
    confidence: "No data",
  },
  smartLeadScoring: [],
  renewalPredictions: [],
  chatbotSupport: [
    {
      intent: "Billing support",
      automation: "Answers invoice and payment status questions",
      priority: "Ready",
    },
    {
      intent: "Workspace enquiry",
      automation: "Guides clients through booking and availability",
      priority: "Ready",
    },
    {
      intent: "Renewal assistance",
      automation: "Explains renewal next steps and support handoff",
      priority: "Ready",
    },
  ],
  employeeProductivity: [],
  attendanceInsights: {
    expectedCheckIns: 0,
    attendanceHealth: "Waiting for booking activity",
    staffingSignal: "Standard coverage",
  },
  businessIntelligence: {
    revenueRunRate: 0,
    leadToClientRatio: 0,
    collectionRisk: 0,
    occupancySignal: "Add live data to activate BI signals",
  },
  mobileExperience: [
    "Responsive dashboard grids",
    "Tap-friendly cards and actions",
    "Client homepage chatbot",
  ],
};

const aiCapabilities = [
  ["AI-powered occupancy forecasting", Gauge, "Uses seats, bookings, leads and renewal risk"],
  ["Smart lead scoring", BrainCircuit, "Ranks leads by stage, priority and demand"],
  ["Automated client renewal predictions", Users, "Flags contracts that need follow-up"],
  ["AI chatbot for customer support", Bot, "Helps clients with booking, billing and renewals"],
  ["Employee productivity analytics", Activity, "Summarizes team lead-handling signals"],
  ["Automated attendance insights", Activity, "Predicts check-ins and staffing needs"],
  ["Real-time business intelligence dashboards", BarChart3, "Tracks revenue, conversion and risk"],
  ["Mobile-first experience", Smartphone, "Keeps core actions usable on small screens"],
];

const mergeInsights = (insights) => ({
  ...emptyInsights,
  ...(insights || {}),
  occupancyForecast: {
    ...emptyInsights.occupancyForecast,
    ...(insights?.occupancyForecast || {}),
  },
  attendanceInsights: {
    ...emptyInsights.attendanceInsights,
    ...(insights?.attendanceInsights || {}),
  },
  businessIntelligence: {
    ...emptyInsights.businessIntelligence,
    ...(insights?.businessIntelligence || {}),
  },
  chatbotSupport:
    insights?.chatbotSupport?.length
      ? insights.chatbotSupport
      : emptyInsights.chatbotSupport,
  mobileExperience:
    insights?.mobileExperience?.length
      ? insights.mobileExperience
      : emptyInsights.mobileExperience,
});

const scoreClass = (score = 0) => {
  if (score >= 80) return "bg-emerald-500/10 text-emerald-300";
  if (score >= 60) return "bg-cyan-500/10 text-cyan-300";
  if (score >= 40) return "bg-yellow-500/10 text-yellow-300";
  return "bg-red-500/10 text-red-300";
};

const riskClass = (risk = "") => {
  if (risk.includes("High")) return "text-red-300";
  if (risk.includes("Medium")) return "text-yellow-300";
  return "text-emerald-300";
};

const EmptyState = ({ title, text }) => (
  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
    <p className="text-sm font-medium text-white">{title}</p>
    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
  </div>
);

const SectionTitle = ({ title, subtitle, icon: Icon, color = "text-cyan-300" }) => (
  <div className="mb-5 flex items-start justify-between gap-4">
    <div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
    </div>
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5">
      <Icon size={20} className={color} />
    </div>
  </div>
);

function AIInsightsPanel({ insights, loading = false }) {
  const data = mergeInsights(insights);
  const forecast = data.occupancyForecast;
  const bi = data.businessIntelligence;
  const attendance = data.attendanceInsights;
  const leads = data.smartLeadScoring || [];
  const renewals = data.renewalPredictions || [];
  const productivity = data.employeeProductivity || [];
  const hasLiveData = Boolean(insights);

  return (
    <section className="mb-6 space-y-5">
      <div className="rounded-2xl border border-cyan-500/10 bg-[#0B1120] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-cyan-300">
              AI Operations Layer
            </p>
            <h2 className="text-2xl font-semibold text-white">
              AI-powered Operations Suite
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              These modules use live workspace, lead, client, invoice and booking
              records. Empty cards mean the feature is ready, but needs matching
              data to calculate useful signals.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-xl border border-cyan-500/10 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
            <Sparkles size={15} />
            {loading ? "Loading signals" : hasLiveData ? "Live signals" : "Ready for data"}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {aiCapabilities.map(([title, Icon, subtitle]) => (
            <div
              key={title}
              className="rounded-xl border border-white/5 bg-white/[0.035] p-4"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                  <Icon size={17} />
                </div>
                <p className="text-sm font-medium text-white">{title}</p>
              </div>
              <p className="text-xs leading-5 text-slate-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <GlassCard className="p-5 xl:col-span-2">
          <SectionTitle
            title="AI-powered Occupancy Forecasting"
            subtitle="Projected demand from seats, bookings, leads and renewal risk"
            icon={Gauge}
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["Current", `${forecast.currentOccupancy || 0}%`],
              ["Forecast", `${forecast.projectedOccupancy || 0}%`],
              ["Demand Seats", forecast.demandSeats || 0],
              ["Confidence", forecast.confidence || "No data"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="mb-2 text-xs text-slate-500">{label}</p>
                <p className="text-xl font-semibold text-white">{loading ? "..." : value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-cyan-400"
              style={{ width: `${Math.min(forecast.projectedOccupancy || 0, 100)}%` }}
            />
          </div>

          <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
            <span className="text-slate-400">
              {forecast.projectedOccupiedSeats || 0} of {forecast.totalSeats || 0} seats projected occupied
            </span>
            <span className="text-cyan-300">{forecast.status}</span>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle
            title="Real-time Business Intelligence"
            subtitle="Business health from revenue and pipeline data"
            icon={BarChart3}
            color="text-emerald-300"
          />

          <div className="space-y-3 text-sm">
            {[
              ["Annual run rate", formatCurrency(bi.revenueRunRate)],
              ["Lead conversion", `${bi.leadToClientRatio || 0}%`],
              ["Collection risk", bi.collectionRisk || 0],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 rounded-xl bg-white/[0.03] px-3 py-2.5">
                <span className="text-slate-400">{label}</span>
                <span className="font-medium text-white">{loading ? "..." : value}</span>
              </div>
            ))}
            <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/10 p-3 text-sm text-cyan-300">
              {bi.occupancySignal}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <GlassCard className="p-5">
          <SectionTitle title="Smart Lead Scoring" icon={BrainCircuit} color="text-purple-300" />
          <div className="space-y-3">
            {leads.slice(0, 5).map((lead) => (
              <div key={lead.id} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{lead.company || lead.name}</p>
                    <p className="text-xs text-slate-500">{lead.branch} - {lead.workspace}</p>
                  </div>
                  <span className={`rounded-lg px-2.5 py-1 text-xs ${scoreClass(lead.score)}`}>
                    {lead.score}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{lead.nextAction}</p>
              </div>
            ))}
            {!leads.length && (
              <EmptyState
                title="No leads scored yet"
                text="Add leads in the pipeline and this card will rank their conversion intent."
              />
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle title="Automated Renewal Predictions" icon={Users} color="text-red-300" />
          <div className="space-y-3">
            {renewals.slice(0, 5).map((client) => (
              <div key={client.id} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{client.company}</p>
                    <p className="text-xs text-slate-500">{formatCurrency(client.amount)}</p>
                  </div>
                  <span className={`text-xs ${riskClass(client.risk)}`}>{client.risk}</span>
                </div>
                <p className="text-xs text-slate-400">{client.renewalProbability}% renewal probability</p>
              </div>
            ))}
            {!renewals.length && (
              <EmptyState
                title="No renewal risks"
                text="Clients with contracts ending soon will appear here with risk and renewal probability."
              />
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle title="AI Chatbot for Customer Support" icon={Bot} />
          <div className="space-y-3">
            {data.chatbotSupport.map((item) => (
              <div key={item.intent} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{item.intent}</p>
                  <span className="text-xs text-cyan-300">{item.priority}</span>
                </div>
                <p className="text-xs leading-5 text-slate-400">{item.automation}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <GlassCard className="p-5">
          <SectionTitle title="Employee Productivity Analytics" icon={Activity} color="text-emerald-300" />
          <div className="space-y-4">
            {productivity.map((member) => (
              <div key={member.owner}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white">{member.owner}</span>
                  <span className="text-emerald-300">{member.productivityScore}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: `${member.productivityScore}%` }} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{member.focus}</p>
              </div>
            ))}
            {!productivity.length && (
              <EmptyState
                title="No team activity yet"
                text="Assign leads to employees to calculate handling volume and productivity score."
              />
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle title="Automated Attendance Insights" icon={Activity} color="text-yellow-300" />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
              <p className="mb-2 text-xs text-slate-500">Expected check-ins</p>
              <p className="text-2xl font-semibold text-white">{attendance.expectedCheckIns || 0}</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
              <p className="mb-2 text-xs text-slate-500">Staffing</p>
              <p className="text-sm font-medium text-white">{attendance.staffingSignal}</p>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-yellow-500/10 p-3 text-sm text-yellow-200">
            {attendance.attendanceHealth}
          </p>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle title="Mobile-first Experience" icon={Smartphone} />
          <div className="space-y-3">
            {data.mobileExperience.map((item) => (
              <div key={item} className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export default AIInsightsPanel;
