import {
  createContext,
  useContext,
  useState
} from "react";

const AppContext =
  createContext();

export const AppProvider = ({
  children
}) => {

  const [activities, setActivities] =
    useState([

      {
        title: "Workspace Initialized",
        description: "System operational",
        time: "09:00 AM"
      }

    ]);


  const [notifications, setNotifications] =
    useState([

      {
        id: 1,
        message: "12 renewals due this week"
      }

    ]);


  const [leads, setLeads] =
    useState({

      new: [
        {
          id: 1,
          company: "TechNova",
          contact: "Rahul Sharma",
          value: "?1.2L"
        },

        {
          id: 2,
          company: "CloudMint",
          contact: "Anjali Mehta",
          value: "?84K"
        }
      ],

      contacted: [
        {
          id: 3,
          company: "ScaleX",
          contact: "Vikram Rao",
          value: "?2.4L"
        }
      ],

      proposal: [
        {
          id: 4,
          company: "ByteBridge",
          contact: "Sneha Reddy",
          value: "?96K"
        }
      ],

      converted: []

    });


  const stages = [
    "new",
    "contacted",
    "proposal",
    "converted"
  ];


  const moveLead = (
    leadId,
    currentStage
  ) => {

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

    const lead =
      leads[currentStage].find(
        (l) => l.id === leadId
      );

    if (!lead) return;


    setLeads((prev) => {

      const updated = {
        ...prev
      };

      updated[currentStage] =
        updated[currentStage].filter(
          (l) => l.id !== leadId
        );

      updated[nextStage] = [
        ...updated[nextStage],
        lead
      ];

      return updated;

    });


    const currentTime =
      new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );


    setActivities((prev) => [

      {
        title: "Lead Updated",
        description:
          `${lead.company} moved to ${nextStage}`,
        time: currentTime
      },

      ...prev

    ]);


    setNotifications((prev) => [

      {
        id: Date.now(),
        message:
          `${lead.company} moved to ${nextStage}`
      },

      ...prev

    ]);

  };


  return (

    <AppContext.Provider
      value={{
        leads,
        moveLead,
        activities,
        notifications
      }}
    >

      {children}

    </AppContext.Provider>

  );
};


export const useApp = () =>
  useContext(AppContext);
