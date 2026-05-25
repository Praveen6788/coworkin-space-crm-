import GlassCard from "../ui/GlassCard";

function AlertCard({
  title,
  message,
  type = "blue"
}) {

  const styles = {
    red: "border-red-500/20 bg-red-500/10 text-red-400",
    yellow: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    green: "border-green-500/20 bg-green-500/10 text-green-400"
  };

  return (
    <GlassCard className={`p-5 border ${styles[type]}`}>

      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed">
        {message}
      </p>

    </GlassCard>
  );
}

export default AlertCard;