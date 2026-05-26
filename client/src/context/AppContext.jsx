import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* ---------------------------------------
     LEADS STATE
  --------------------------------------- */
  const [leads, setLeads] = useState({
    new: [],
    contacted: [],
    proposal: [],
    converted: []
  });

  /* ---------------------------------------
     NOTIFICATIONS (Static state)
  --------------------------------------- */
  const [notifications] = useState([
    { id: 1, message: "New workspace enquiry received" },
    { id: 2, message: "Invoice generated successfully" },
    { id: 3, message: "Payment pending approval" }
  ]);

  /* ---------------------------------------
     ACTIVITIES (Static state)
  --------------------------------------- */
  const [activities] = useState([
    { title: "Lead Created", description: "New client enquiry added", time: "2 mins ago" },
    { title: "Proposal Sent", description: "Quotation shared with client", time: "18 mins ago" },
    { title: "Invoice Generated", description: "Finance team generated invoice", time: "1 hour ago" }
  ]);

  /* ---------------------------------------
     FETCH LEADS (Wrapped in useCallback)
  --------------------------------------- */
  const fetchLeads = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`);
      const data = await response.json();

      console.log("SERVER LEADS:", data);

      const grouped = {
        new: [],
        contacted: [],
        proposal: [],
        converted: []
      };

      data.forEach((lead) => {
        const status = lead.status || "new";

        if (grouped[status]) {
          grouped[status].push({
            id: lead._id,
            company: lead.company || "Unknown Company",
            contact: lead.name || "No Name",
            value: lead.budget || "₹50K"
          });
        }
      });

      setLeads(grouped);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  }, []); // Empty array ensures this function reference never changes

  /* ---------------------------------------
     LOAD ONCE
  --------------------------------------- */
  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]); // Safe to include now

  /* ---------------------------------------
     MOVE LEAD
  --------------------------------------- */
  const moveLead = async (id, currentStage) => {
    const stages = ["new", "contacted", "proposal", "converted"];
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex === -1 || currentIndex === stages.length - 1) {
      return;
    }

    const nextStage = stages[currentIndex + 1];

    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/leads/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: nextStage })
        }
      );

      /* REFRESH DATA */
      fetchLeads();
    } catch (error) {
      console.log("MOVE ERROR:", error);
    }
  };

  /* ---------------------------------------
     CONTEXT VALUE (Wrapped in useMemo)
  --------------------------------------- */
  const value = useMemo(() => ({
    leads,
    moveLead,
    notifications,
    activities,
    fetchLeads
  }), [leads, notifications, activities, fetchLeads]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/* ---------------------------------------
   CUSTOM HOOK
--------------------------------------- */
export const useApp = () => useContext(AppContext);