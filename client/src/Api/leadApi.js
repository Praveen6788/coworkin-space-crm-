import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchLeads = async () => {
  const response = await axios.get(`${API}/api/leads`);
  return response.data;
};

export const createLead = async (data) => {
  const response = await axios.post(`${API}/api/leads`, data);
  return response.data;
};

export const updateLead = async (id, data) => {
  const response = await axios.patch(`${API}/api/leads/${id}`, data);
  return response.data;
};

export const convertLead = async (id) => {
  const response = await axios.post(`${API}/api/leads/${id}/convert`);
  return response.data;
};
