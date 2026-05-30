import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchAllocations = async () => {
  const response = await axios.get(`${API}/api/allocations`);
  return response.data;
};

export const allocateWorkspace = async (data) => {
  const response = await axios.post(`${API}/api/allocations/allocate`, data);
  return response.data;
};
