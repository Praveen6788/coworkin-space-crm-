const express = require("express");
const Invoice = require("../models/Invoice");
const Client = require("../models/Client");
const Workspace = require("../models/Workspace");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate("clientId")
      .sort({ createdAt: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/client/:clientId", async (req, res) => {
  try {
    const invoices = await Invoice.find({ clientId: req.params.clientId })
      .sort({ createdAt: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate("clientId");
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true,
    });
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.status(200).json({ success: true, message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ← FIXED: accepts workspaceId in body so rate is read directly
// Frontend sends: { workspaceId: selectedWorkspace._id }
router.post("/generate/:clientId", async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) return res.status(404).json({ message: "Client not found" });

    // Get rate directly from workspace passed by frontend
    const workspace = req.body.workspaceId
      ? await Workspace.findById(req.body.workspaceId)
      : null;

    const baseAmount =
      workspace?.monthlyRate ||
      workspace?.dailyRate ||
      workspace?.hourlyRate ||
      client.monthlyRent ||
      0;

    if (baseAmount === 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot generate invoice: no rate found on workspace or client.",
      });
    }

    const gstPercent = 18;
    const totalAmount = baseAmount + baseAmount * (gstPercent / 100);

    const invoice = await Invoice.create({
      clientId: client._id,
      workspaceId: workspace?._id,
      allocatedSeats:
        Number(req.body.allocatedSeats) ||
        client.seatsAllocated ||
        1,
      invoiceNumber: `INV-${Date.now()}`,
      branch: req.body.branch || client.branch,
      billingMonth: new Date().toLocaleString("default", {
        month: "long", year: "numeric",
      }),
      amount: baseAmount,
      gst: gstPercent,
      totalAmount,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
