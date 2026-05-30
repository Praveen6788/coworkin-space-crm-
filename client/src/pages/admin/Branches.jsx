import { useState } from "react";
import { createBranch } from "../../Api/branchApi";

const Branches = () => {

  const [formData, setFormData] = useState({
    branchName: "",
    city: "",
    address: "",
    managerName: "",
    managerPhone: "",
    totalCapacity: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createBranch(formData);

      alert("Branch created successfully");

      setFormData({
        branchName: "",
        city: "",
        address: "",
        managerName: "",
        managerPhone: "",
        totalCapacity: ""
      });

    } catch (error) {

      console.error(error);

      alert("Failed to create branch");

    }

  };

  return (
    <div className="p-6">

      <div className="max-w-3xl bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Add Branch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="branchName"
            placeholder="Branch Name"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="managerName"
            placeholder="Manager Name"
            value={formData.managerName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="managerPhone"
            placeholder="Manager Phone"
            value={formData.managerPhone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="totalCapacity"
            placeholder="Total Capacity"
            value={formData.totalCapacity}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="px-5 py-3 rounded-lg bg-black text-white"
          >
            Create Branch
          </button>

        </form>

      </div>

    </div>
  );
};

export default Branches;