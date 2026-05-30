import { useEffect, useState } from "react";
import {
  createWorkspace,
  fetchWorkspaces
} from "../../Api/workspaceApi";

import {
  fetchBranches
} from "../../Api/branchApi";

const Workspaces = () => {

  const [workspaces, setWorkspaces] =
    useState([]);

  const [branches, setBranches] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      branch: "",
      workspaceName: "",
      workspaceType: "Private Cabin",
      floor: "",
      totalSeats: "",
      hourlyRate: "",
      dailyRate: "",
      monthlyRate: ""
    });



  const loadData = async () => {

    try {

      const [
        workspaceData,
        branchData
      ] = await Promise.all([
        fetchWorkspaces(),
        fetchBranches()
      ]);

      setWorkspaces(
        workspaceData
      );

      setBranches(
        branchData
      );

    }

    catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    loadData();

  }, []);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await createWorkspace({
        ...formData,
        totalSeats:
          Number(
            formData.totalSeats
          ),
        hourlyRate:
          Number(
            formData.hourlyRate || 0
          ),
        dailyRate:
          Number(
            formData.dailyRate || 0
          ),
        monthlyRate:
          Number(
            formData.monthlyRate || 0
          )
      });

      alert(
        "Workspace Created"
      );

      setFormData({
        branch: "",
        workspaceName: "",
        workspaceType:
          "Private Cabin",
        floor: "",
        totalSeats: "",
        hourlyRate: "",
        dailyRate: "",
        monthlyRate: ""
      });

      loadData();

    }

    catch (error) {

      console.log(error);

      alert(
        "Failed to create workspace"
      );

    }

    finally {

      setLoading(false);

    }

  };



  return (
    <div className="p-6 space-y-6">

      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold mb-5">
          Add Workspace
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          >
            <option value="">
              Select Branch
            </option>

            {branches.map(
              (branch) => (
                <option
                  key={branch._id}
                  value={
                    branch.branchName
                  }
                >
                  {branch.branchName}
                </option>
              )
            )}
          </select>

          <input
            type="text"
            name="workspaceName"
            placeholder="Workspace Name"
            value={
              formData.workspaceName
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="workspaceType"
            value={
              formData.workspaceType
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option>
              Private Cabin
            </option>

            <option>
              Dedicated Desk
            </option>

            <option>
              Hot Desk
            </option>

            <option>
              Meeting Room
            </option>

            <option>
              Day Pass
            </option>
          </select>

          <input
            type="text"
            name="floor"
            placeholder="Floor"
            value={formData.floor}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="totalSeats"
            placeholder="Total Seats"
            value={
              formData.totalSeats
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="hourlyRate"
            placeholder="Hourly Rate"
            value={
              formData.hourlyRate
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="dailyRate"
            placeholder="Daily Rate"
            value={
              formData.dailyRate
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="monthlyRate"
            placeholder="Monthly Rate"
            value={
              formData.monthlyRate
            }
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-lg px-4 py-3"
          >
            {loading
              ? "Creating..."
              : "Create Workspace"}
          </button>

        </form>

      </div>



      <div className="bg-white border rounded-xl shadow-sm">

        <div className="p-4 border-b">

          <h2 className="font-semibold">
            Workspaces
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="p-3">
                  Workspace
                </th>

                <th className="p-3">
                  Branch
                </th>

                <th className="p-3">
                  Type
                </th>

                <th className="p-3">
                  Seats
                </th>

                <th className="p-3">
                  Available
                </th>

                <th className="p-3">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {workspaces.map(
                (workspace) => (

                  <tr
                    key={
                      workspace._id
                    }
                    className="border-b"
                  >

                    <td className="p-3">
                      {
                        workspace.workspaceName
                      }
                    </td>

                    <td className="p-3">
                      {
                        workspace.branch
                      }
                    </td>

                    <td className="p-3">
                      {
                        workspace.workspaceType
                      }
                    </td>

                    <td className="p-3">
                      {
                        workspace.totalSeats
                      }
                    </td>

                    <td className="p-3">
                      {
                        workspace.availableSeats
                      }
                    </td>

                    <td className="p-3">
                      {
                        workspace.status
                      }
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );

};

export default Workspaces;