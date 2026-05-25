import KPIStatCard from "../cards/KPIStatCard";

const branchStats = {

  Madhapur: {
    revenue: "₹9.4L",
    revenueGrowth: "+18.4%",
    members: 58,
    memberGrowth: "+12 onboarded",
    checkins: 24,
    checkinGrowth: "91% occupancy",
    tasks: 4,
    taskGrowth: "2 high priority"
  },

  Gachibowli: {
    revenue: "₹7.8L",
    revenueGrowth: "+12.1%",
    members: 49,
    memberGrowth: "+8 onboarded",
    checkins: 19,
    checkinGrowth: "86% occupancy",
    tasks: 2,
    taskGrowth: "Stable operations"
  },

  KPHB: {
    revenue: "₹5.6L",
    revenueGrowth: "-3.2%",
    members: 37,
    memberGrowth: "+3 onboarded",
    checkins: 12,
    checkinGrowth: "72% occupancy",
    tasks: 7,
    taskGrowth: "Needs attention"
  },

  Kondapur: {
    revenue: "₹8.2L",
    revenueGrowth: "+15.8%",
    members: 53,
    memberGrowth: "+11 onboarded",
    checkins: 21,
    checkinGrowth: "88% occupancy",
    tasks: 1,
    taskGrowth: "All clear"
  },

  Himayathnagar: {
    revenue: "₹4.3L",
    revenueGrowth: "-8.4%",
    members: 29,
    memberGrowth: "+1 onboarded",
    checkins: 8,
    checkinGrowth: "63% occupancy",
    tasks: 9,
    taskGrowth: "Critical alerts"
  }

};


function BranchMetricCards({
  selectedBranch
}) {

  const stats =
    branchStats[selectedBranch];


  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

      <KPIStatCard
        title="Branch Revenue"
        value={stats.revenue}
        growth={stats.revenueGrowth}
        color="green"
        icon="💰"
      />

      <KPIStatCard
        title="Active Members"
        value={stats.members}
        growth={stats.memberGrowth}
        color="blue"
        icon="👥"
      />

      <KPIStatCard
        title="Today's Check-ins"
        value={stats.checkins}
        growth={stats.checkinGrowth}
        color="purple"
        icon="🏢"
      />

      <KPIStatCard
        title="Pending Tasks"
        value={stats.tasks}
        growth={stats.taskGrowth}
        color="red"
        icon="⚠️"
      />

    </div>

  );
}

export default BranchMetricCards;