import GlassCard from "../ui/GlassCard";

function BranchCard({ branch }) {

  return (
    <GlassCard className="p-6">

      <div className="flex items-start justify-between mb-6">

        <div>

          <h3 className="text-2xl font-semibold text-white mb-2">
            {branch.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {branch.status}
          </p>

        </div>

        <div className="px-3 py-1 rounded-xl bg-blue-500/10 text-blue-400 text-sm">
          {branch.occupancy}% Occupied
        </div>

      </div>


      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-gray-400 text-sm mb-1">
            Revenue
          </p>

          <h4 className="text-xl font-semibold text-white">
            {branch.revenue}
          </h4>
        </div>


        <div>
          <p className="text-gray-400 text-sm mb-1">
            Clients
          </p>

          <h4 className="text-xl font-semibold text-white">
            {branch.activeClients}
          </h4>
        </div>

      </div>

    </GlassCard>
  );
}

export default BranchCard;