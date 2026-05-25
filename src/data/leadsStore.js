export const getLeads = () => {

  const leads =
    localStorage.getItem("cowork_leads");

  return leads ? JSON.parse(leads) : [];

};



export const saveLead = (lead) => {

  const existing = getLeads();

  const updated = [lead, ...existing];

  localStorage.setItem(
    "cowork_leads",
    JSON.stringify(updated)
  );

};
