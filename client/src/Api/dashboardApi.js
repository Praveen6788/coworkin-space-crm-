import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getAdminDashboard = async () => {
  const response = await axios.get(`${API}/api/dashboard/admin`);
  return response.data;
};

export const getBranchDashboard = async (branchId) => {
  const response = await axios.get(`${API}/api/dashboard/branch/${branchId}`);
  return response.data;
};
