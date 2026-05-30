const express = require("express");

const Lead = require("../models/Lead");
const Client = require("../models/Client");
const Branch = require("../models/Branch");
const Workspace = require("../models/Workspace");
const Invoice = require("../models/Invoice");
const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

const router = express.Router();



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
          ).toFixed(1)
        : 0;

    const recentLeads =
      await Lead.find()
        .sort({ createdAt: -1 })
        .limit(5);

    const recentPayments =
      await Payment.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.json({

      totalLeads,
      totalClients,
      totalBranches,
      totalBookings,

      totalRevenue,

      pendingInvoices,

      occupancyRate,

      recentLeads,
      recentPayments,

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

      res.json({

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