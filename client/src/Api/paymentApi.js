import axios from "axios"


const API = import.meta.env.VITE_API_URL || "http://localhost:5000"
export const fetchPayments = async () => {
  const res = await axios.get(`${API}/api/payments`);
  return res.data;
};

export const fetchClientPayments = async (clientId) => {
  const res = await axios.get(`${API}/api/payments/client/${clientId}`);
  return res.data;
};

export const recordPayment = async (invoiceId, data) => {
  const res = await axios.post(`${API}/api/payments/invoice/${invoiceId}`, data);
  return res.data;
};

export const fetchPaymentById = async (id) => {
  const res = await axios.get(`${API}/api/payments/${id}`);
  return res.data;
};

export const updatePayment = async (id, data) => {
  const res = await axios.patch(`${API}/api/payments/${id}`, data);
  return res.data;
};

export const deletePayment = async (id) => {
  const res = await axios.delete(`${API}/api/payments/${id}`);
  return res.data;
};