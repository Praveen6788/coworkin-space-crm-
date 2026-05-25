function BranchTable({ branches }) {

  return (
    <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-xl">

      <table className="w-full min-w-[700px] text-white">

        <thead>

          <tr className="border-b border-white/10 text-gray-400 text-left">

            <th className="pb-5">Branch</th>
            <th className="pb-5">Occupancy</th>
            <th className="pb-5">Revenue</th>
            <th className="pb-5">Clients</th>
            <th className="pb-5">Renewals</th>
            <th className="pb-5">Status</th>

          </tr>

        </thead>


        <tbody>

          {branches.map((branch) => (

            <tr
              key={branch.id}
              className="border-b border-white/5"
            >

              <td className="py-5 font-medium">
                {branch.name}
              </td>

              <td className="py-5">
                {branch.occupancy}%
              </td>

              <td className="py-5">
                {branch.revenue}
              </td>

              <td className="py-5">
                {branch.activeClients}
              </td>

              <td className="py-5">
                {branch.renewalsDue}
              </td>

              <td className="py-5">

                <span className="px-3 py-1 rounded-xl bg-blue-500/10 text-blue-400 text-sm">
                  {branch.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BranchTable;