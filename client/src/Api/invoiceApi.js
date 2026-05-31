import axios from "axios"
const API = import.meta.env.VITE_API_URL 
export const fetchInvoices = async () => {
  const res = await axios.get(`${API}/api/invoices`);
  return res.data;
};

export const fetchClientInvoices = async (clientId) => {
  const res = await axios.get(`${API}/api/invoices/client/${clientId}`);
  return res.data;
};

export const generateInvoice = async (
  clientId,
  workspaceId,
  branch,
  allocatedSeats = 1
) => {
  const res = await axios.post(`${API}/api/invoices/generate/${clientId}`, {
    workspaceId,
    branch,
    allocatedSeats,
  });
  return res.data;
};

export const fetchInvoiceById = async (id) => {
  const res = await axios.get(`${API}/api/invoices/${id}`);
  return res.data;
};

export const updateInvoice = async (id, data) => {
  const res = await axios.patch(`${API}/api/invoices/${id}`, data);
  return res.data;
};

export const deleteInvoice = async (id) => {
  const res = await axios.delete(`${API}/api/invoices/${id}`);
  return res.data;
};
