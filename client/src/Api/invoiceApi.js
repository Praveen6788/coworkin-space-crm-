import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const fetchInvoices = async () => {
  const res = await axios.get(`${API}/invoices`);
  return res.data;
};

export const fetchClientInvoices = async (clientId) => {
  const res = await axios.get(`${API}/invoices/client/${clientId}`);
  return res.data;
};

// ← NOW sends workspaceId + branch so backend reads rate correctly
export const generateInvoice = async (clientId, workspaceId, branch) => {
  const res = await axios.post(`${API}/invoices/generate/${clientId}`, {
    workspaceId,
    branch,
  });
  return res.data;
};

export const fetchInvoiceById = async (id) => {
  const res = await axios.get(`${API}/invoices/${id}`);
  return res.data;
};

export const updateInvoice = async (id, data) => {
  const res = await axios.patch(`${API}/invoices/${id}`, data);
  return res.data;
};

export const deleteInvoice = async (id) => {
  const res = await axios.delete(`${API}/invoices/${id}`);
  return res.data;
};