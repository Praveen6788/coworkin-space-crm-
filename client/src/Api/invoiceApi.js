import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchInvoices = async () => {
  const response = await axios.get(`${API}/api/invoices`);
  return response.data;
};

export const generateInvoice = async (clientId) => {
  const response = await axios.post(`${API}/api/invoices/generate/${clientId}`);
  return response.data;
};

export const updateInvoice = async (id, data) => {
  const response = await axios.patch(`${API}/api/invoices/${id}`, data);
  return response.data;
};
