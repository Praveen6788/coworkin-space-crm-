import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Search,
  Users,
} from "lucide-react";

const branches = [
  {
    name: "Madhapur",
    city: "Hyderabad",
    manager: "Rahul Verma",
    revenue: 940000,
    occupancy: 91,
    roomUsage: 82,
    members: 58,
    checkins: 24,
    renewals: 12,
    tickets: 4,
    growth: 18.4,
    status: "High Performing",
    schedule: [
      ["09:00", "Morning Standup", "Room 1", "TechNova"],
      ["11:30", "Investor Meeting", "Room 2", "ScaleX"],
      ["15:00", "Design Review", "Desk Area", "CloudMint"],
    ],
    membersList: [
      ["Rahul Sharma", "TechNova", "Active", 390],
      ["Anjali Mehta", "CloudMint", "Active", 250],
      ["Vikram Rao", "ScaleX", "Renewal Due", 820],
    ],
  },
  {
    name: "Gachibowli",
    city: "Hyderabad",
    manager: "Sneha Reddy",
    revenue: 780000,
    occupancy: 86,
    roomUsage: 78,
    members: 49,
    checkins: 19,
    renewals: 8,
    tickets: 2,
    growth: 12.1,
    status: "Stable",
    schedule: [
      ["10:00", "Client Demo", "Room 1", "ByteBridge"],
      ["13:00", "Sales Sync", "Room 2", "PixelCraft"],
    ],
    membersList: [
      ["Vikram Rao", "ScaleX", "Active", 410],
      ["Meera Iyer", "ByteBridge", "Active", 0],
    ],
  },
  {
    name: "KPHB",
    city: "Hyderabad",
    manager: "Kiran Kumar",
    revenue: 560000,
    occupancy: 72,
    roomUsage: 68,
    members: 37,
    checkins: 12,
    renewals: 16,
    tickets: 7,
    growth: -3.2,
    status: "Needs Attention",
    schedule: [
      ["09:30", "Renewal Meeting", "Room 1", "NovaEdge"],
      ["16:00", "Planning Session", "Desk Area", "CloudPeak"],
    ],
    membersList: [
      ["Ravi Teja", "NovaEdge", "Renewal Due", 1200],
      ["Neha Jain", "CloudPeak", "Active", 180],
    ],
  },
  {
    name: "Kondapur",
    city: "Hyderabad",
    manager: "Ananya Rao",
    revenue: 820000,
    occupancy: 88,
    roomUsage: 81,
    members: 53,
    checkins: 21,
    renewals: 5,
    tickets: 1,
    growth: 15.8,
    status: "High Performing",
    schedule: [
      ["12:00", "UI Sprint", "Room 2", "ScaleX"],
      ["17:00", "Workspace Audit", "Desk Area", "TechNova"],
    ],
    membersList: [
      ["Priya Nair", "ScaleX", "Active", 0],
      ["Arjun Menon", "TechNova", "Active", 120],
    ],
  },
  {
    name: "Himayathnagar",
    city: "Hyderabad",
    manager: "Vikram Joshi",
    revenue: 430000,
    occupancy: 63,
    roomUsage: 59,
    members: 29,
    checkins: 8,
    renewals: 19,
    tickets: 9,
    growth: -8.4,
    status: "Critical",
    schedule: [["10:30", "Operations Sync", "Room 1", "CloudMint"]],
    membersList: [
      ["Sameer Khan", "CloudMint", "Open Ticket", 760],
      ["Divya Rao", "Solo Desk", "Renewal Due", 340],
    ],
  },
];

const formatCurrency = (amount) => {
  if (amount >= 100000) return `Rs ${(amount / 100000).toFixed(1)}L`;
  return `Rs ${amount.toLocaleString("en-IN")}`;
};

const statusClass = (status) => {
  if (status === "High Performing") return "text-emerald-300 bg-emerald-500/10";
  if (status === "Stable") return "text-cyan-300 bg-cyan-500/10";
  if (status === "Needs Attention") return "text-yellow-300 bg-yellow-500/10";
  return "text-red-300 bg-red-500/10";
};

const MetricCard = ({ label, value, helper, icon: Icon, tone = "cyan" }) => {
  const tones = {
    cyan: "text-cyan-300 bg-cyan-500/10",
    emerald: "text-emerald-300 bg-emerald-500/10",
    yellow: "text-yellow-300 bg-yellow-500/10",
    red: "text-red-300 bg-red-500/10",
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#0F172A] p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {label}
        </p>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${tones[tone]}`}>
          <Icon size={17} />
        </div>
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{helper}</p>
    </div>
  );
};

const UtilizationRow = ({ label, value, tone = "cyan" }) => {
  const color = tone === "emerald" ? "bg-emerald-400" : tone === "yellow" ? "bg-yellow-400" : "bg-cyan-400";

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-400">{label}</span>
        <span className="font-medium text-white">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

function BranchAnalytics() {
  const [selectedBranch, setSelectedBranch] = useState("Madhapur");
  const [query, setQuery] = useState("");

  const currentBranch =
    branches.find((branch) => branch.name === selectedBranch) || branches[0];

  const filteredBranches = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return branches;

    return branches.filter((branch) =>
      [branch.name, branch.city, branch.manager, branch.status]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }, [query]);

  const portfolio = useMemo(
    () => ({
      revenue: branches.reduce((sum, branch) => sum + branch.revenue, 0),
      members: branches.reduce((sum, branch) => sum + branch.members, 0),
      occupancy: Math.round(
        branches.reduce((sum, branch) => sum + branch.occupancy, 0) /
          branches.length
      ),
      tickets: branches.reduce((sum, branch) => sum + branch.tickets, 0),
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#020617] px-4 py-6 text-white sm:px-6 lg:px-8 mt-15">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-cyan-300">
              Branch Operations
            </p>
            <h1 className="text-3xl font-semibold">Branch Analytics</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Compare branch performance, capacity, schedules, renewals and
              operational risk from one focused workspace.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search branches"
                className="h-11 w-full rounded-xl border border-white/10 bg-[#0F172A] pl-9 pr-4 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-500/40 sm:w-[240px]"
              />
            </div>

            <select
              value={selectedBranch}
              onChange={(event) => setSelectedBranch(event.target.value)}
              className="h-11 rounded-xl border border-white/10 bg-[#0F172A] px-4 text-sm text-white outline-none focus:border-cyan-500/40"
            >
              {branches.map((branch) => (
                <option key={branch.name} value={branch.name} className="bg-[#020617]">
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Portfolio Revenue"
            value={formatCurrency(portfolio.revenue)}
            helper={`${branches.length} active branches`}
            icon={CircleDollarSign}
            tone="emerald"
          />
          <MetricCard
            label="Avg Occupancy"
            value={`${portfolio.occupancy}%`}
            helper={`${currentBranch.name} is ${currentBranch.occupancy}%`}
            icon={Building2}
          />
          <MetricCard
            label="Active Members"
            value={portfolio.members}
            helper={`${currentBranch.members} in selected branch`}
            icon={Users}
          />
          <MetricCard
            label="Open Tickets"
            value={portfolio.tickets}
            helper={`${currentBranch.tickets} in selected branch`}
            icon={AlertTriangle}
            tone={portfolio.tickets > 15 ? "red" : "yellow"}
          />
        </div>

        <div className="mb-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Branch Comparison</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Select a branch row to inspect operational details.
                </p>
              </div>
              <span className="w-fit rounded-lg border border-cyan-500/10 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-300">
                {filteredBranches.length} visible
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-white/5 text-left text-xs uppercase tracking-[0.16em] text-slate-500">
                    <th className="pb-3">Branch</th>
                    <th className="pb-3">Manager</th>
                    <th className="pb-3">Occupancy</th>
                    <th className="pb-3">Revenue</th>
                    <th className="pb-3">Renewals</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBranches.map((branch) => (
                    <tr
                      key={branch.name}
                      onClick={() => setSelectedBranch(branch.name)}
                      className={`cursor-pointer border-b border-white/5 transition hover:bg-white/[0.03] ${
                        selectedBranch === branch.name ? "bg-cyan-500/5" : ""
                      }`}
                    >
                      <td className="py-4">
                        <div className="font-medium text-white">{branch.name}</div>
                        <div className="text-xs text-slate-500">{branch.city}</div>
                      </td>
                      <td className="py-4 text-sm text-slate-300">{branch.manager}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-white/5">
                            <div className="h-full rounded-full bg-cyan-400" style={{ width: `${branch.occupancy}%` }} />
                          </div>
                          <span className="text-sm text-slate-300">{branch.occupancy}%</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-emerald-300">{formatCurrency(branch.revenue)}</td>
                      <td className="py-4 text-sm text-slate-300">{branch.renewals}</td>
                      <td className="py-4">
                        <span className={`rounded-lg px-2.5 py-1 text-xs ${statusClass(branch.status)}`}>
                          {branch.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Selected Branch
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{currentBranch.name}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Managed by {currentBranch.manager}
                </p>
              </div>
              <span className={`rounded-lg px-3 py-1.5 text-xs ${statusClass(currentBranch.status)}`}>
                {currentBranch.status}
              </span>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-slate-500">Growth</p>
                <p className={currentBranch.growth >= 0 ? "mt-2 text-xl font-semibold text-emerald-300" : "mt-2 text-xl font-semibold text-red-300"}>
                  {currentBranch.growth > 0 ? "+" : ""}{currentBranch.growth}%
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-slate-500">Check-ins</p>
                <p className="mt-2 text-xl font-semibold text-white">{currentBranch.checkins}</p>
              </div>
            </div>

            <div className="space-y-4">
              <UtilizationRow label="Desk occupancy" value={currentBranch.occupancy} />
              <UtilizationRow label="Meeting room usage" value={currentBranch.roomUsage} tone="emerald" />
              <UtilizationRow
                label="Renewal pressure"
                value={Math.min(currentBranch.renewals * 5, 100)}
                tone={currentBranch.renewals > 12 ? "yellow" : "cyan"}
              />
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Today&apos;s Schedule</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Room and desk activity for {currentBranch.name}.
                </p>
              </div>
              <CalendarDays size={20} className="text-cyan-300" />
            </div>

            <div className="space-y-3">
              {currentBranch.schedule.map(([time, title, room, user]) => (
                <div key={`${time}-${title}`} className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                    {time}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">{room} - {user}</p>
                  </div>
                  <Clock3 size={17} className="mt-1 text-slate-500" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0F172A] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Members & Billing Risk</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Client status and outstanding balances.
                </p>
              </div>
              <CheckCircle2 size={20} className="text-emerald-300" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px]">
                <thead>
                  <tr className="border-b border-white/5 text-left text-xs uppercase tracking-[0.16em] text-slate-500">
                    <th className="pb-3">Member</th>
                    <th className="pb-3">Company</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Balance</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentBranch.membersList.map(([name, company, status, balance]) => (
                    <tr key={`${name}-${company}`} className="border-b border-white/5">
                      <td className="py-4 text-sm text-white">{name}</td>
                      <td className="py-4 text-sm text-slate-300">{company}</td>
                      <td className="py-4">
                        <span className={`rounded-lg px-2.5 py-1 text-xs ${
                          status === "Active"
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-yellow-500/10 text-yellow-300"
                        }`}>
                          {status}
                        </span>
                      </td>
                      <td className={balance > 0 ? "py-4 text-sm text-red-300" : "py-4 text-sm text-emerald-300"}>
                        {balance > 0 ? `Rs ${balance}` : "Clear"}
                      </td>
                      <td className="py-4 text-right">
                        <button className="inline-flex items-center gap-1 rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-500/20 hover:text-cyan-300">
                          Manage
                          <ArrowUpRight size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BranchAnalytics;
