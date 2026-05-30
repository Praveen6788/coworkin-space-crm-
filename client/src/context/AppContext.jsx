/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";

import { fetchClients } from "../Api/clientApi";
import { fetchBranches } from "../Api/branchApi";
import { fetchWorkspaces } from "../Api/workspaceApi";
import { fetchInvoices } from "../Api/invoiceApi";
import { fetchPayments } from "../Api/paymentApi";
import { fetchBookings } from "../Api/bookingApi";
import { getAdminDashboard } from "../Api/dashboardApi";
import { fetchLeads } from "../Api/leadApi";
const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [leads, setLeads] = useState({
    new: [],
    contacted: [],
    proposal: [],
    converted: []
  });

  const [dashboard, setDashboard] = useState(null);

  const [clients, setClients] = useState([]);
  const [branches, setBranches] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [payments, setPayments] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [notifications] = useState([
    { id: 1, message: "New workspace enquiry received" },
    { id: 2, message: "Invoice generated successfully" },
    { id: 3, message: "Payment pending approval" }
  ]);

  const [activities] = useState([
    {
      title: "Lead Created",
      description: "New client enquiry added",
      time: "2 mins ago"
    },
    {
      title: "Proposal Sent",
      description: "Quotation shared with client",
      time: "18 mins ago"
    },
    {
      title: "Invoice Generated",
      description: "Finance team generated invoice",
      time: "1 hour ago"
    }
  ]);

  const fetchLeads = useCallback(async () => {
    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/leads`
      );

      const data = await response.json();

      const grouped = {
        new: [],
        contacted: [],
        proposal: [],
        converted: []
      };

      data.forEach((lead) => {

        const status =
          (lead.status || "new").toLowerCase();

        if (grouped[status]) {

          grouped[status].push({
            id: lead._id,
            company:
              lead.companyName ||
              lead.company ||
              "Unknown Company",

            contact:
              lead.name ||
              "No Name",

            value:
              lead.budget ||
              "₹50K",

            raw: lead
          });

        }

      });

      setLeads(grouped);

    } catch (error) {

      console.log(
        "LEADS ERROR:",
        error
      );

    }
  }, []);

  const loadERPData = useCallback(async () => {

    try {

      const [
        dashboardData,
        clientsData,
        branchesData,
        workspacesData,
        invoicesData,
        paymentsData,
        bookingsData
      ] = await Promise.all([

        getAdminDashboard(),

        fetchClients(),
        fetchBranches(),
        fetchWorkspaces(),
        fetchInvoices(),
        fetchPayments(),
        fetchBookings()

      ]);

      setDashboard(dashboardData);

      setClients(clientsData);
      setBranches(branchesData);
      setWorkspaces(workspacesData);
      setInvoices(invoicesData);
      setPayments(paymentsData);
      setBookings(bookingsData);

    } catch (error) {

      console.log(
        "ERP LOAD ERROR:",
        error
      );

    }

  }, []);

  useEffect(() => {

    fetchLeads();
    loadERPData();

  }, [
    fetchLeads,
    loadERPData
  ]);

  const moveLead = async (
    id,
    currentStage
  ) => {

    const stages = [
      "new",
      "contacted",
      "proposal",
      "converted"
    ];

    const currentIndex =
      stages.indexOf(currentStage);

    if (
      currentIndex === -1 ||
      currentIndex === stages.length - 1
    ) {
      return;
    }

    const nextStage =
      stages[currentIndex + 1];

    try {

      await fetch(
        `${import.meta.env.VITE_API_URL}/api/leads/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            status: nextStage
          })
        }
      );

      fetchLeads();

    } catch (error) {

      console.log(
        "MOVE ERROR:",
        error
      );

    }

  };

  const refreshAllData =
    async () => {

      await Promise.all([
        fetchLeads(),
        loadERPData()
      ]);

    };

  const value = useMemo(
    () => ({

      leads,
      moveLead,
      fetchLeads,

      dashboard,

      clients,
      branches,
      workspaces,
      invoices,
      payments,
      bookings,

      refreshAllData,

      notifications,
      activities

    }),
    [

      leads,

      dashboard,

      clients,
      branches,
      workspaces,
      invoices,
      payments,
      bookings,

      notifications,
      activities,

      fetchLeads

    ]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () =>
  useContext(AppContext);