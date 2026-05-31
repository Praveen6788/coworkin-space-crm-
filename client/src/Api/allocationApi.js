import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchAllocations = async () => {
  const response = await axios.get(`${API}/api/allocations`);
  return response.data;
};

// ← NOW hits /client/:clientId instead of fetching all
export const fetchClientAllocations = async (clientId) => {
  const response = await axios.get(`${API}/api/allocations/client/${clientId}`);
  return response.data;
};

export const createAllocation = async (data) => {
  const response = await axios.post(`${API}/api/allocations`, data);
  return response.data;
};