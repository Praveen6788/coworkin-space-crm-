import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchClients = async () => {
  const response = await axios.get(`${API}/api/clients`);
  return response.data;
};

export const fetchClientById = async (id) => {
  const response = await axios.get(`${API}/api/clients/${id}`);
  return response.data;
};

export const createClient = async (data) => {
  const response = await axios.post(`${API}/api/clients`, data);
  return response.data;
};

export const updateClient = async (id, data) => {
  const response = await axios.patch(`${API}/api/clients/${id}`, data);
  return response.data;
};

export const deleteClient = async (id) => {
  const response = await axios.delete(`${API}/api/clients/${id}`);
  return response.data;
};
