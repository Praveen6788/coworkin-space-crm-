import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchWorkspaces = async () => {
  const response = await axios.get(`${API}/api/workspaces`);
  return response.data;
};

export const createWorkspace = async (data) => {
  const response = await axios.post(`${API}/api/workspaces`, data);
  return response.data;
};

export const updateWorkspace = async (id, data) => {
  const response = await axios.patch(`${API}/api/workspaces/${id}`, data);
  return response.data;
};

export const deleteWorkspace = async (id) => {
  const response = await axios.delete(`${API}/api/workspaces/${id}`);
  return response.data;
};


export const fetchBranchWorkspaces =
  async (branch) => {

    const response =
      await axios.get(
        `${API}/api/workspaces?branch=${branch}`
      );

    return response.data;
  };