import GlassCard from "../ui/GlassCard";

function KPIStatCard({
  title,
  value,
  growth,
  icon,
  color = "blue"
}) {

  const colorVariants = {

    blue: {
      border: "border-cyan-500/10",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400"
    },

    green: {
      border: "border-emerald-500/10",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400"
    },

    red: {
      border: "border-red-500/10",
      bg: "bg-red-500/10",
      text: "text-red-400"
    },

    yellow: {
      border: "border-yellow-500/10",
      bg: "bg-yellow-500/10",
      text: "text-yellow-400"
    },

    purple: {
      border: "border-purple-500/10",
      bg: "bg-purple-500/10",
      text: "text-purple-400"
    }

  };


  const selected =
    colorVariants[color] || colorVariants.blue;


  return (

    <GlassCard
      className={`p-5 border ${selected.border}`}
    >

      <div className="flex items-start justify-between mb-5">

        <div>

          <p className="text-sm text-gray-400 mb-2">

            {title}

          </p>

          <h2 className="text-3xl font-semibold text-white">

            {value}

          </h2>

        </div>



        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${selected.bg}`}
        >

          {icon}

        </div>

      </div>



      <div className="flex items-center justify-between">

        <p className={`text-sm ${selected.text}`}>

          {growth || "No insights"}

        </p>

      </div>

    </GlassCard>

  );
}

export default KPIStatCard;