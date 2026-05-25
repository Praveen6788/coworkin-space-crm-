import { useApp }
from "../../context/AppContext";

import GlassCard
from "../ui/GlassCard";

function ActivityFeed() {

  const {
    activities
  } = useApp();


  return (

    <GlassCard className="p-5">

      <div className="mb-5">

        <h2 className="text-lg font-semibold mb-1">

          Live Activity Feed

        </h2>

        <p className="text-gray-400 text-sm">

          Real-time operational events

        </p>

      </div>



      <div className="space-y-4">

        {activities.map(
          (activity, index) => (

            <div
              key={index}
              className="flex items-start justify-between bg-white/5 border border-white/5 rounded-xl p-4"
            >

              <div>

                <h3 className="text-sm font-medium mb-1">

                  {activity.title}

                </h3>

                <p className="text-xs text-gray-400">

                  {activity.description}

                </p>

              </div>


              <span className="text-[10px] text-gray-500">

                {activity.time}

              </span>

            </div>

          )
        )}

      </div>

    </GlassCard>

  );
}

export default ActivityFeed;
