const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
  {
    // Lead Reference

    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
    },

    // Company Information

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // Workspace Details

    branch: {
      type: String,
      required: true,
    },

    workspaceType: {
      type: String,
      enum: [
        "Private Cabin",
        "Dedicated Desk",
        "Hot Desk",
        "Meeting Room",
        "Day Pass",
      ],
      required: true,
    },

    seatsAllocated: {
      type: Number,
      default: 1,
    },

    // Contract Information

    contractStartDate: {
      type: Date,
    },

    contractEndDate: {
      type: Date,
    },

    moveInDate: {
      type: Date,
    },

    // Finance

    monthlyRent: {
      type: Number,
      default: 0,
    },

    securityDeposit: {
      type: Number,
      default: 0,
    },

    // Status

    status: {
      type: String,
      enum: [
        "PENDING",
        "ACTIVE",
        "MOVE_IN_PENDING",
        "RENEWAL_DUE",
        "EXITED",
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


module.exports =
  mongoose.model(
    "Client",
    clientSchema
  );