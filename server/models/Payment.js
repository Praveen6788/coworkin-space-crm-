const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },

    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMode: {
      type: String,
      enum: [
        "UPI",
        "BANK_TRANSFER",
        "CASH",
        "CARD",
        "CHEQUE",
      ],
      default: "UPI",
    },

    transactionId: {
      type: String,
      default: "",
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "RECEIVED",
        "FAILED",
      ],
      default: "RECEIVED",
    },

    receivedBy: {
      type: String,
      default: "Finance Team",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Payment =
  mongoose.model(
    "Payment",
    paymentSchema
  );

module.exports = Payment;