const express = require("express");
const Invoice = require("../models/Invoice");
const Payment = require("../models/Payment");
const Allocation = require("../models/Allocation");
const Branch = require("../models/Branch");
const Client = require("../models/Client");
const Workspace = require("../models/Workspace");
const router = express.Router();

const activateAllocationForInvoice = async (invoice) => {
  if (!invoice?.workspaceId) {
    return null;
  }

  const allocatedSeats =
    Number(invoice.allocatedSeats) || 1;

  let allocation = await Allocation.findOne({
    invoiceId: invoice._id,
  });

  if (allocation?.status === "ACTIVE") {
    return allocation;
  }

  const workspace = await Workspace.findById(
    invoice.workspaceId
  );

  if (!workspace) {
    throw new Error("Workspace not found for paid invoice");
  }

  if (workspace.availableSeats < allocatedSeats) {
    throw new Error("Not enough seats available to activate allocation");
  }

  if (!allocation) {
    allocation = await Allocation.create({
      clientId: invoice.clientId,
      invoiceId: invoice._id,
      workspaceId: invoice.workspaceId,
      branch: invoice.branch,
      allocatedSeats,
      allocatedBy: "Payment Automation",
      status: "ACTIVE",
    });
  } else {
    allocation.status = "ACTIVE";
    allocation.allocatedSeats = allocatedSeats;
    allocation.allocationDate = new Date();
    await allocation.save();
  }

  workspace.occupiedSeats += allocatedSeats;
  workspace.availableSeats =
    workspace.totalSeats - workspace.occupiedSeats;
  await workspace.save();

  const branch = await Branch.findOne({
    branchName: invoice.branch,
  });

  if (branch) {
    branch.occupiedCapacity += allocatedSeats;
    branch.availableCapacity =
      branch.totalCapacity - branch.occupiedCapacity;
    await branch.save();
  }

  await Client.findByIdAndUpdate(invoice.clientId, {
    status: "ACTIVE",
    seatsAllocated: allocatedSeats,
    branch: invoice.branch,
  });

  return allocation;
};

const finalizeReceivedPayment = async (payment) => {
  if (payment.status !== "RECEIVED") {
    return { payment };
  }

  const invoice = await Invoice.findById(payment.invoiceId);

  if (!invoice) {
    throw new Error("Invoice not found for payment");
  }

  invoice.status = "PAID";
  invoice.paidDate = invoice.paidDate || new Date();
  await invoice.save();

  const allocation =
    await activateAllocationForInvoice(invoice);

  return {
    payment,
    invoice,
    allocation,
  };
};

router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    const result = await finalizeReceivedPayment(payment);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("clientId")
      .populate("invoiceId")
      .sort({ createdAt: -1 });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/client/:clientId", async (req, res) => {
  try {
    const payments = await Payment.find({ clientId: req.params.clientId })
      .populate("invoiceId")
      .sort({ createdAt: -1 });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("clientId")
      .populate("invoiceId");
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    const result = await finalizeReceivedPayment(payment);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json({ success: true, message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/invoice/:invoiceId", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.invoiceId);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    const payment = await Payment.create({
      invoiceId: invoice._id,
      clientId: invoice.clientId,
      amount: invoice.totalAmount,
      paymentMode: req.body.paymentMode || "UPI",
      transactionId: req.body.transactionId || "",
      status: "RECEIVED",
    });

    const result = await finalizeReceivedPayment(payment);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
