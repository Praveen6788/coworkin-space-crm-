const express = require("express");

const Lead = require("../models/Lead");
const Client = require("../models/Client");
const Branch = require("../models/Branch");
const Workspace = require("../models/Workspace");
const Invoice = require("../models/Invoice");
const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

const router = express.Router();

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatBranchStatus = (occupancyRate) => {
  if (occupancyRate >= 85) return "High Performing";
  if (occupancyRate >= 70) return "Stable";
  if (occupancyRate >= 50) return "Needs Attention";
  return "Critical";
};

const getRenewalFilter = () => {
  const today = new Date();
  const next30Days = new Date();
  next30Days.setDate(today.getDate() + 30);

  return {
    $or: [
      { status: "RENEWAL_DUE" },
      {
        contractEndDate: {
          $gte: today,
          $lte: next30Days,
        },
      },
    ],
  };
};

const getDayRange = (date = new Date()) => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

const formatTime = (date) =>
  new Date(date).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

const daysUntil = (date) => {
  if (!date) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  return Math.ceil(
    (target.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const parseMoney = (value) => {
  if (typeof value === "number") return value;
  if (!value) return 0;

  return Number(String(value).replace(/[^\d]/g, "")) || 0;
};

const getLeadScore = (lead) => {
  const stageScore = {
    new: 35,
    contacted: 48,
    proposal: 68,
    payment: 82,
    movein: 94,
  };

  const priorityScore = {
    High: 14,
    Medium: 8,
    Low: 2,
  };

  const quoteAmount =
    parseMoney(lead.finalAmount) ||
    parseMoney(lead.quotationAmount);

  const createdAt = new Date(lead.createdAt);
  const ageInDays = Number.isNaN(createdAt.getTime())
    ? 30
    : Math.floor(
        (Date.now() - createdAt.getTime()) /
          (1000 * 60 * 60 * 24)
      );

  const score = clamp(
    (stageScore[lead.stage] || 35) +
      (priorityScore[lead.priority] || 6) +
      Math.min((lead.seats || 1) * 2, 12) +
      (quoteAmount >= 100000 ? 8 : quoteAmount >= 50000 ? 5 : 0) +
      (lead.email ? 3 : 0) +
      (lead.company ? 3 : 0) -
      Math.min(ageInDays, 20)
  );

  return Math.round(score);
};

const getLeadBand = (score) => {
  if (score >= 80) return "Hot";
  if (score >= 60) return "Warm";
  if (score >= 40) return "Nurture";
  return "Cold";
};

const getForecastStatus = (occupancy) => {
  if (occupancy >= 90) return "Capacity Alert";
  if (occupancy >= 75) return "Healthy Demand";
  if (occupancy >= 55) return "Stable";
  return "Demand Push Needed";
};

const buildOccupancyForecast = ({
  totalSeats,
  occupiedSeats,
  nextBookings = [],
  openLeads = [],
  renewalsDue = 0,
}) => {
  const currentOccupancy =
    totalSeats > 0
      ? (occupiedSeats / totalSeats) * 100
      : 0;

  const bookedSeats = nextBookings.reduce(
    (sum, booking) =>
      sum + (booking.seatsBooked || 1),
    0
  );

  const weightedLeadSeats = openLeads.reduce(
    (sum, lead) =>
      sum +
      (lead.seats || 1) *
        (getLeadScore(lead) >= 70 ? 0.55 : 0.25),
    0
  );

  const churnRiskSeats =
    renewalsDue > 0
      ? Math.min(renewalsDue * 1.5, occupiedSeats * 0.25)
      : 0;

  const projectedOccupiedSeats = clamp(
    occupiedSeats +
      bookedSeats +
      weightedLeadSeats -
      churnRiskSeats,
    0,
    totalSeats || 0
  );

  const projectedOccupancy =
    totalSeats > 0
      ? (projectedOccupiedSeats / totalSeats) * 100
      : 0;

  return {
    currentOccupancy: Number(currentOccupancy.toFixed(1)),
    projectedOccupancy: Number(projectedOccupancy.toFixed(1)),
    projectedOccupiedSeats: Math.round(projectedOccupiedSeats),
    totalSeats,
    bookedSeats,
    demandSeats: Math.round(weightedLeadSeats),
    riskSeats: Math.round(churnRiskSeats),
    status: getForecastStatus(projectedOccupancy),
    confidence:
      nextBookings.length + openLeads.length >= 8
        ? "High"
        : nextBookings.length + openLeads.length >= 3
          ? "Medium"
          : "Low",
  };
};

const buildRenewalPredictions = (clients) =>
  clients.map((client) => {
    const daysLeft = daysUntil(client.contractEndDate);
    const monthlyRent = client.monthlyRent || 0;
    const riskScore = clamp(
      (daysLeft === null ? 45 : 70 - daysLeft) +
        (client.status === "RENEWAL_DUE" ? 25 : 0) +
        (monthlyRent >= 100000 ? 8 : 0)
    );

    return {
      id: client._id,
      company: client.companyName,
      contactPerson: client.contactPerson,
      daysLeft,
      amount: monthlyRent,
      renewalProbability: Math.round(100 - riskScore * 0.55),
      risk:
        riskScore >= 75
          ? "High Risk"
          : riskScore >= 45
            ? "Medium Risk"
            : "Low Risk",
      nextAction:
        daysLeft !== null && daysLeft <= 7
          ? "Schedule retention call"
          : "Send renewal offer",
    };
  });

const buildChatbotInsights = ({
  pendingInvoices = 0,
  renewalsDue = 0,
  newLeads = 0,
  availableSeats = 0,
}) => [
  {
    intent: "Billing support",
    automation: `${pendingInvoices} pending invoice replies can be automated`,
    priority: pendingInvoices > 5 ? "High" : "Normal",
  },
  {
    intent: "Renewal assistance",
    automation: `${renewalsDue} clients need renewal follow-up prompts`,
    priority: renewalsDue > 3 ? "High" : "Normal",
  },
  {
    intent: "Workspace enquiry",
    automation: `${newLeads} new leads can receive instant availability answers`,
    priority: availableSeats < 5 ? "Capacity aware" : "Ready",
  },
];

const buildProductivityAnalytics = (teamRows = []) =>
  teamRows.map((row) => ({
    owner: row._id || "Branch Admin",
    leadsHandled: row.leadsHandled,
    hotLeads: row.hotLeads,
    productivityScore: clamp(
      45 + row.leadsHandled * 7 + row.hotLeads * 10
    ),
    focus:
      row.hotLeads > 0
        ? "Close high-intent leads"
        : "Build new pipeline",
  }));

const buildAttendanceInsights = ({
  todaysBookings = 0,
  activeClients = 0,
  availableSeats = 0,
}) => ({
  expectedCheckIns: todaysBookings,
  attendanceHealth:
    todaysBookings > activeClients * 0.6
      ? "High traffic day"
      : todaysBookings > 0
        ? "Normal traffic"
        : "Quiet day",
  staffingSignal:
    todaysBookings > 10 || availableSeats < 5
      ? "Add front-desk coverage"
      : "Standard coverage",
});

const buildBusinessIntelligence = ({
  totalRevenue = 0,
  totalLeads = 0,
  totalClients = 0,
  pendingInvoices = 0,
  overdueInvoices = 0,
  occupancyRate = 0,
}) => ({
  lastUpdated: new Date().toISOString(),
  revenueRunRate: totalRevenue * 12,
  leadToClientRatio:
    totalLeads > 0
      ? Number(((totalClients / totalLeads) * 100).toFixed(1))
      : 0,
  collectionRisk: pendingInvoices + overdueInvoices,
  occupancySignal:
    occupancyRate >= 80
      ? "Scale capacity planning"
      : "Push demand generation",
});

const mobileExperienceInsights = [
  "Tap-first dashboard cards",
  "Responsive operations tables",
  "Branch actions available on small screens",
];



/* ==================================
   ADMIN DASHBOARD
================================== */

router.get("/admin", async (req, res) => {

  try {

    const totalLeads =
      await Lead.countDocuments();

    const totalClients =
      await Client.countDocuments();

    const totalBranches =
      await Branch.countDocuments();

    const totalBookings =
      await Booking.countDocuments();

    const pendingInvoices =
      await Invoice.countDocuments({
        status: "PENDING",
      });

    const overdueInvoices =
      await Invoice.countDocuments({
        status: "OVERDUE",
      });

    const renewalsDue =
      await Client.countDocuments(
        getRenewalFilter()
      );

    const revenueData =
      await Payment.aggregate([
        {
          $match: {
            status: "RECEIVED",
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$amount",
            },
          },
        },
      ]);

    const totalRevenue =
      revenueData[0]?.totalRevenue || 0;

    const workspaceData =
      await Workspace.aggregate([
        {
          $group: {
            _id: null,
            totalSeats: {
              $sum: "$totalSeats",
            },
            occupiedSeats: {
              $sum: "$occupiedSeats",
            },
          },
        },
      ]);

    const totalSeats =
      workspaceData[0]?.totalSeats || 0;

    const occupiedSeats =
      workspaceData[0]?.occupiedSeats || 0;

    const occupancyRate =
      totalSeats > 0
        ? (
            (occupiedSeats /
              totalSeats) *
            100
          )
        : 0;

    const monthlyRevenueRaw =
      await Payment.aggregate([
        {
          $match: {
            status: "RECEIVED",
          },
        },
        {
          $group: {
            _id: {
              year: { $year: "$paymentDate" },
              month: { $month: "$paymentDate" },
            },
            revenue: { $sum: "$amount" },
          },
        },
        {
          $sort: {
            "_id.year": 1,
            "_id.month": 1,
          },
        },
        {
          $limit: 12,
        },
      ]);

    const monthlyRevenue =
      monthlyRevenueRaw.map((item) => ({
        label:
          monthNames[item._id.month - 1] ||
          String(item._id.month),
        revenue: item.revenue,
      }));

    const branches =
      await Branch.find()
        .sort({ createdAt: -1 })
        .lean();

    const branchPerformance =
      await Promise.all(
        branches.map(async (branch) => {
          const branchName =
            branch.branchName;

          const [
            activeClients,
            renewalClients,
            paidInvoices,
            workspaceTotals,
          ] = await Promise.all([
            Client.countDocuments({
              branch: branchName,
              status: {
                $ne: "EXITED",
              },
            }),
            Client.countDocuments({
              branch: branchName,
              ...getRenewalFilter(),
            }),
            Invoice.aggregate([
              {
                $match: {
                  branch: branchName,
                  status: "PAID",
                },
              },
              {
                $group: {
                  _id: null,
                  revenue: {
                    $sum: "$totalAmount",
                  },
                },
              },
            ]),
            Workspace.aggregate([
              {
                $match: {
                  branch: branchName,
                },
              },
              {
                $group: {
                  _id: null,
                  totalSeats: {
                    $sum: "$totalSeats",
                  },
                  occupiedSeats: {
                    $sum: "$occupiedSeats",
                  },
                },
              },
            ]),
          ]);

          const branchTotalSeats =
            workspaceTotals[0]?.totalSeats ||
            branch.totalCapacity ||
            0;

          const branchOccupiedSeats =
            workspaceTotals[0]?.occupiedSeats ||
            branch.occupiedCapacity ||
            0;

          const branchOccupancy =
            branchTotalSeats > 0
              ? Number(
                  (
                    (branchOccupiedSeats /
                      branchTotalSeats) *
                    100
                  ).toFixed(1)
                )
              : 0;

          return {
            id: branch._id,
            name: branchName,
            city: branch.city,
            occupancy: branchOccupancy,
            revenue:
              paidInvoices[0]?.revenue || 0,
            activeClients,
            renewalsDue: renewalClients,
            totalSeats: branchTotalSeats,
            availableSeats:
              branchTotalSeats -
              branchOccupiedSeats,
            status:
              branch.status === "ACTIVE"
                ? formatBranchStatus(
                    branchOccupancy
                  )
                : branch.status,
          };
        })
      );

    const recentLeads =
      await Lead.find()
        .sort({ createdAt: -1 })
        .limit(5);

    const recentPayments =
      await Payment.find()
        .sort({ createdAt: -1 })
        .limit(5);

    const next7Days = new Date();
    next7Days.setDate(next7Days.getDate() + 7);

    const [nextBookings, openLeads, scoredLeads, renewalClients, productivityRows] =
      await Promise.all([
        Booking.find({
          bookingStatus: "CONFIRMED",
          bookingDate: {
            $gte: new Date(),
            $lte: next7Days,
          },
        }).lean(),
        Lead.find({
          stage: {
            $in: ["new", "contacted", "proposal", "payment"],
          },
        })
          .sort({ updatedAt: -1 })
          .limit(20)
          .lean(),
        Lead.find()
          .sort({ updatedAt: -1 })
          .limit(8)
          .lean(),
        Client.find(getRenewalFilter())
          .sort({
            contractEndDate: 1,
            updatedAt: -1,
          })
          .limit(8)
          .lean(),
        Lead.aggregate([
          {
            $group: {
              _id: "$assignedTo",
              leadsHandled: { $sum: 1 },
              hotLeads: {
                $sum: {
                  $cond: [
                    {
                      $in: ["$priority", ["High"]],
                    },
                    1,
                    0,
                  ],
                },
              },
            },
          },
          {
            $sort: {
              leadsHandled: -1,
            },
          },
          {
            $limit: 5,
          },
        ]),
      ]);

    const aiInsights = {
      occupancyForecast: buildOccupancyForecast({
        totalSeats,
        occupiedSeats,
        nextBookings,
        openLeads,
        renewalsDue,
      }),
      smartLeadScoring: scoredLeads.map((lead) => {
        const score = getLeadScore(lead);

        return {
          id: lead._id,
          name: lead.name,
          company: lead.company,
          branch: lead.branch,
          workspace: lead.workspace,
          score,
          band: getLeadBand(score),
          nextAction:
            score >= 80
              ? "Call and move to payment"
              : score >= 60
                ? "Send tailored proposal"
                : "Nurture with availability update",
        };
      }),
      renewalPredictions:
        buildRenewalPredictions(renewalClients),
      chatbotSupport: buildChatbotInsights({
        pendingInvoices,
        renewalsDue,
        newLeads: totalLeads,
        availableSeats: totalSeats - occupiedSeats,
      }),
      employeeProductivity:
        buildProductivityAnalytics(productivityRows),
      attendanceInsights: buildAttendanceInsights({
        todaysBookings: nextBookings.length,
        activeClients: totalClients,
        availableSeats: totalSeats - occupiedSeats,
      }),
      businessIntelligence: buildBusinessIntelligence({
        totalRevenue,
        totalLeads,
        totalClients,
        pendingInvoices,
        overdueInvoices,
        occupancyRate,
      }),
      mobileExperience: mobileExperienceInsights,
    };

    res.json({

      totalLeads,
      totalClients,
      totalBranches,
      totalBookings,

      totalRevenue,

      pendingInvoices,
      overdueInvoices,
      renewalsDue,

      occupancyRate:
        Number(occupancyRate.toFixed(1)),
      monthlyRevenue,
      branchPerformance,

      recentLeads,
      recentPayments,
      aiInsights,

    });

  }

  catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});



/* ==================================
   BRANCH DASHBOARD
================================== */

router.get(
  "/branch/:branchId",
  async (req, res) => {

    try {

      const branch =
        await Branch.findById(
          req.params.branchId
        );

      if (!branch) {

        return res.status(404).json({
          message:
            "Branch not found",
        });

      }

      const activeClients =
        await Client.countDocuments({
          branch:
            branch.branchName,
        });

      const branchWorkspaces =
        await Workspace.find({
          branch:
            branch.branchName,
        });

      let totalSeats = 0;
      let occupiedSeats = 0;

      branchWorkspaces.forEach(
        (workspace) => {

          totalSeats +=
            workspace.totalSeats;

          occupiedSeats +=
            workspace.occupiedSeats;

        }
      );

      const availableSeats =
        totalSeats -
        occupiedSeats;

      const occupancyRate =
        totalSeats > 0
          ? (
              (occupiedSeats /
                totalSeats) *
              100
            ).toFixed(1)
          : 0;

      const invoices =
        await Invoice.find({
          branch:
            branch.branchName,
        });

      const revenue =
        invoices
          .filter(
            invoice =>
              invoice.status ===
              "PAID"
          )
          .reduce(
            (sum, invoice) =>
              sum +
              invoice.totalAmount,
            0
          );

      const renewalFilter =
        getRenewalFilter();

      const renewalsDue =
        await Client.countDocuments({
          branch: branch.branchName,
          ...renewalFilter,
        });

      const pendingInvoices =
        await Invoice.countDocuments({
          branch: branch.branchName,
          status: "PENDING",
        });

      const overdueInvoices =
        await Invoice.countDocuments({
          branch: branch.branchName,
          status: "OVERDUE",
        });

      const newLeads =
        await Lead.countDocuments({
          branch: branch.branchName,
          stage: "new",
        });

      const { start, end } =
        getDayRange();

      const todaysBookings =
        await Booking.find({
          branch: branch.branchName,
          bookingDate: {
            $gte: start,
            $lte: end,
          },
        })
          .populate("workspaceId")
          .sort({
            startTime: 1,
            createdAt: -1,
          })
          .limit(6)
          .lean();

      const dashboardBookings =
        todaysBookings.length
          ? todaysBookings
          : await Booking.find({
              branch: branch.branchName,
              bookingStatus: "CONFIRMED",
            })
              .populate("workspaceId")
              .sort({
                bookingDate: 1,
                createdAt: -1,
              })
              .limit(6)
              .lean();

      const expiringClients =
        await Client.find({
          branch: branch.branchName,
          ...renewalFilter,
        })
          .sort({
            contractEndDate: 1,
            updatedAt: -1,
          })
          .limit(5)
          .lean();

      const recentClients =
        await Client.find({
          branch: branch.branchName,
        })
          .sort({ createdAt: -1 })
          .limit(3)
          .lean();

      const recentLeads =
        await Lead.find({
          branch: branch.branchName,
        })
          .sort({ createdAt: -1 })
          .limit(3)
          .lean();

      const recentInvoices =
        await Invoice.find({
          branch: branch.branchName,
        })
          .sort({ createdAt: -1 })
          .limit(3)
          .lean();

      const recentActivities = [
        ...recentClients.map((client) => ({
          title: "Client Onboarded",
          description: `${client.companyName} joined ${branch.branchName}`,
          time: formatTime(client.createdAt),
          createdAt: client.createdAt,
        })),
        ...dashboardBookings
          .slice(0, 3)
          .map((booking) => ({
            title: "Workspace Booked",
            description: `${booking.bookingType} reserved by ${booking.customerName}`,
            time:
              booking.startTime ||
              formatTime(booking.createdAt),
            createdAt: booking.createdAt,
          })),
        ...recentLeads.map((lead) => ({
          title: "New Lead Added",
          description: `${lead.name} enquired for ${lead.workspace}`,
          time: formatTime(lead.createdAt),
          createdAt: lead.createdAt,
        })),
        ...recentInvoices.map((invoice) => ({
          title: "Invoice Generated",
          description: `Invoice ${invoice.invoiceNumber} created`,
          time: formatTime(invoice.createdAt),
          createdAt: invoice.createdAt,
        })),
      ]
        .sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        )
        .slice(0, 6);

      const branchNext7Days = new Date();
      branchNext7Days.setDate(branchNext7Days.getDate() + 7);

      const [
        forecastBookings,
        openBranchLeads,
        scoredBranchLeads,
        renewalPredictionClients,
        branchProductivityRows,
      ] = await Promise.all([
        Booking.find({
          branch: branch.branchName,
          bookingStatus: "CONFIRMED",
          bookingDate: {
            $gte: new Date(),
            $lte: branchNext7Days,
          },
        }).lean(),
        Lead.find({
          branch: branch.branchName,
          stage: {
            $in: ["new", "contacted", "proposal", "payment"],
          },
        })
          .sort({ updatedAt: -1 })
          .limit(15)
          .lean(),
        Lead.find({
          branch: branch.branchName,
        })
          .sort({ updatedAt: -1 })
          .limit(6)
          .lean(),
        Client.find({
          branch: branch.branchName,
          ...renewalFilter,
        })
          .sort({
            contractEndDate: 1,
            updatedAt: -1,
          })
          .limit(6)
          .lean(),
        Lead.aggregate([
          {
            $match: {
              branch: branch.branchName,
            },
          },
          {
            $group: {
              _id: "$assignedTo",
              leadsHandled: { $sum: 1 },
              hotLeads: {
                $sum: {
                  $cond: [
                    {
                      $in: ["$priority", ["High"]],
                    },
                    1,
                    0,
                  ],
                },
              },
            },
          },
          {
            $sort: {
              leadsHandled: -1,
            },
          },
          {
            $limit: 4,
          },
        ]),
      ]);

      const aiInsights = {
        occupancyForecast: buildOccupancyForecast({
          totalSeats,
          occupiedSeats,
          nextBookings: forecastBookings,
          openLeads: openBranchLeads,
          renewalsDue,
        }),
        smartLeadScoring: scoredBranchLeads.map((lead) => {
          const score = getLeadScore(lead);

          return {
            id: lead._id,
            name: lead.name,
            company: lead.company,
            branch: lead.branch,
            workspace: lead.workspace,
            score,
            band: getLeadBand(score),
            nextAction:
              score >= 80
                ? "Call and move to payment"
                : score >= 60
                  ? "Send tailored proposal"
                  : "Nurture with availability update",
          };
        }),
        renewalPredictions:
          buildRenewalPredictions(renewalPredictionClients),
        chatbotSupport: buildChatbotInsights({
          pendingInvoices,
          renewalsDue,
          newLeads,
          availableSeats,
        }),
        employeeProductivity:
          buildProductivityAnalytics(branchProductivityRows),
        attendanceInsights: buildAttendanceInsights({
          todaysBookings: dashboardBookings.length,
          activeClients,
          availableSeats,
        }),
        businessIntelligence: buildBusinessIntelligence({
          totalRevenue: revenue,
          totalLeads: newLeads,
          totalClients: activeClients,
          pendingInvoices,
          overdueInvoices,
          occupancyRate: Number(occupancyRate),
        }),
        mobileExperience: mobileExperienceInsights,
      };

      res.json({

        branchId:
          branch._id,

        branchName:
          branch.branchName,

        city:
          branch.city,

        activeClients,

        totalSeats,

        occupiedSeats,

        availableSeats,

        occupancyRate,

        revenue,

        renewalsDue,

        pendingInvoices,

        overdueInvoices,

        newLeads,

        todaysBookings:
          dashboardBookings.map((booking) => ({
            id: booking._id,
            title:
              booking.notes ||
              booking.bookingType,
            customerName:
              booking.customerName,
            bookingType:
              booking.bookingType,
            workspaceName:
              booking.workspaceId?.workspaceName ||
              booking.bookingType,
            bookingDate:
              booking.bookingDate,
            startTime:
              booking.startTime || "",
            endTime:
              booking.endTime || "",
            status:
              booking.bookingStatus,
          })),

        recentActivities,

        expiringClients:
          expiringClients.map((client) => {
            const daysLeft =
              daysUntil(
                client.contractEndDate
              );

            return {
              id: client._id,
              company:
                client.companyName,
              contactPerson:
                client.contactPerson,
              daysLeft,
              amount:
                client.monthlyRent,
              status:
                client.status,
            };
          }),

        visitors:
          dashboardBookings.map((booking) => ({
            id: booking._id,
            name:
              booking.customerName,
            host:
              booking.workspaceId?.workspaceName ||
              booking.bookingType,
            status:
              booking.bookingStatus ===
              "CONFIRMED"
                ? "Checked In"
                : booking.bookingStatus,
          })),
        aiInsights,

      });

    }

    catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);



module.exports = router;
