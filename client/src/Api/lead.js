import axios from "axios";



const API =
  "http://localhost:5000/api/leads";



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
      await axios.get(API);



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

export const fetchLeadById =
  async (id) => {

    const response =
      await fetch(
        `http://localhost:5000/api/leads/${id}`
      );



    return response.json();

};