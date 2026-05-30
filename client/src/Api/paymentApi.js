import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchPayments = async () => {
  const response = await axios.get(`${API}/api/payments`);
  return response.data;
};

export const recordPayment = async (invoiceId, data) => {
  const response = await axios.post(`${API}/api/payments/invoice/${invoiceId}`, data);
  return response.data;
};
