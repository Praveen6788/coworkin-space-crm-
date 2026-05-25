import { Link } from "react-router-dom";
import GlassCard from "../ui/GlassCard";

function ModuleCard({
  title,
  description,
  icon,
  path,
  color
}) {

  return (
    <Link to={path}>

      <GlassCard
        className={`p-7 hover:scale-[1.01] transition-all bg-gradient-to-br ${color}`}
      >

        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6">
          {icon}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          {description}
        </p>

        <div className="text-blue-400 text-sm font-medium">
          Open Module →
        </div>

      </GlassCard>

    </Link>
  );
}

export default ModuleCard;