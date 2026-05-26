import axios from "axios";



const API =
  `${import.meta.env.VITE_API_URL}/api/leads`;



/* -----------------------------------
   CREATE LEAD
----------------------------------- */

export const createLead =
  async (leadData) => {

    const response =
      await axios.post(
        API,
        leadData
      );



    return response.data;

  };



/* -----------------------------------
   FETCH LEADS
----------------------------------- */

export const fetchLeads =
  async () => {

    const response =
      await axios.get(
        API
      );



    return response.data;

  };



/* -----------------------------------
   UPDATE LEAD
----------------------------------- */

export const updateLead =
  async (id, data) => {

    const response =
      await axios.patch(
        `${API}/${id}`,
        data
      );



    return response.data;

  };



/* -----------------------------------
   FETCH LEAD BY ID
----------------------------------- */

export const fetchLeadById =
  async (id) => {

    const response =
      await axios.get(
        `${API}/${id}`
      );



    return response.data;

  };