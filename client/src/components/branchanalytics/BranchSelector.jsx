function BranchSelector({
  selectedBranch,
  setSelectedBranch
}) {

  const branches = [
    "Madhapur",
    "Gachibowli",
    "KPHB",
    "Kondapur",
    "Himayathnagar"
  ];

  return (

    <select
      value={selectedBranch}
      onChange={(e) =>
        setSelectedBranch(e.target.value)
      }
      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none"
    >

      {branches.map((branch) => (

        <option
          key={branch}
          value={branch}
          className="bg-[#020617]"
        >

          {branch} Branch

        </option>

      ))}

    </select>

  );
}

export default BranchSelector;