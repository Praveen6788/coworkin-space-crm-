import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchBranches = async () => {
  const response = await axios.get(`${API}/api/branches`);
  return response.data;
};

export const createBranch = async (data) => {
  const response = await axios.post(`${API}/api/branches`, data);
  return response.data;
};

export const updateBranch = async (id, data) => {
  const response = await axios.patch(`${API}/api/branches/${id}`, data);
  return response.data;
};

export const deleteBranch = async (id) => {
  const response = await axios.delete(`${API}/api/branches/${id}`);
  return response.data;
};

export const fetchBranchById =
  async (id) => {

    const response =
      await axios.get(
        `${API}/api/branches/${id}`
      );

    return response.data;
  };