import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fetchBookings = async () => {
  const response = await axios.get(`${API}/api/bookings`);
  return response.data;
};

export const createBooking = async (data) => {
  const response = await axios.post(`${API}/api/bookings`, data);
  return response.data;
};
