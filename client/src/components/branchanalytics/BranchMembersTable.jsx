import GlassCard from "../ui/GlassCard";

function BranchMembersTable({
  selectedBranch
}) {

  const membersData = {

    Madhapur: [
      {
        name: "Rahul Sharma",
        company: "TechNova",
        status: "Active",
        balance: "₹390"
      },
      {
        name: "Anjali Mehta",
        company: "CloudMint",
        status: "Active",
        balance: "₹250"
      }
    ],

    Gachibowli: [
      {
        name: "Vikram Rao",
        company: "ScaleX",
        status: "Active",
        balance: "₹410"
      }
    ]

  };


  const members =
    membersData[selectedBranch] || [];


  return (

    <GlassCard className="p-5 overflow-x-auto">

      <div className="mb-4">

        <h2 className="text-lg font-semibold mb-1">

          Branch Members

        </h2>

        <p className="text-gray-400 text-sm">

          Workspace users & operational activity

        </p>

      </div>



      <table className="w-full min-w-[700px]">

        <thead>

          <tr className="border-b border-white/5 text-left text-gray-400 text-sm">

            <th className="pb-3">Member</th>
            <th className="pb-3">Company</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Balance</th>
            <th className="pb-3">Actions</th>

          </tr>

        </thead>



        <tbody>

          {members.map((member, index) => (

            <tr
              key={index}
              className="border-b border-white/5"
            >

              <td className="py-3">
                {member.name}
              </td>

              <td className="py-3">
                {member.company}
              </td>

              <td className="py-3">

                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 text-xs">

                  {member.status}

                </span>

              </td>

              <td className="py-3 text-red-400">
                {member.balance}
              </td>

              <td className="py-3">

                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs hover:bg-cyan-500/10 transition">

                  Manage

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </GlassCard>

  );
}

export default BranchMembersTable;