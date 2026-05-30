const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },

    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },

    branch: {
      type: String,
      required: true,
    },

    billingMonth: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    gst: {
      type: Number,
      default: 18,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    paidDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "PAID",
        "OVERDUE",
        "CANCELLED",
      ],
      default: "PENDING",
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

const Invoice =
  mongoose.model(
    "Invoice",
    invoiceSchema
  );

module.exports = Invoice;