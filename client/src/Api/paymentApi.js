import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// All payments (used by AppContext / admin)
export const fetchPayments = async () => {
  const res = await axios.get(`${API}/payments`);
  return res.data;
};

// Client-scoped payments (used by ClientBillingPage)
export const fetchClientPayments = async (clientId) => {
  const res = await axios.get(`${API}/payments/client/${clientId}`);
  return res.data;
};

export const recordPayment = async (invoiceId, data) => {
  const res = await axios.post(`${API}/payments/invoice/${invoiceId}`, data);
  return res.data;
};

export const fetchPaymentById = async (id) => {
  const res = await axios.get(`${API}/payments/${id}`);
  return res.data;
};

export const updatePayment = async (id, data) => {
  const res = await axios.patch(`${API}/payments/${id}`, data);
  return res.data;
};

export const deletePayment = async (id) => {
  const res = await axios.delete(`${API}/payments/${id}`);
  return res.data;
};