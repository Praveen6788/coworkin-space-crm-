const mongoose = require("mongoose");

const allocationSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },

    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },

    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },

    branch: {
      type: String,
      required: true,
    },

    allocatedSeats: {
      type: Number,
      required: true,
      min: 1,
    },

    allocatedBy: {
      type: String,
      default: "Admin",
    },

    allocationDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "ACTIVE",
        "RELEASED",
      ],
      default: "ACTIVE",
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

const Allocation = mongoose.model(
  "Allocation",
  allocationSchema
);

module.exports = Allocation;
