const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema(
  {
    branch: {
      type: String,
      required: true,
      trim: true,
    },

    workspaceName: {
      type: String,
      required: true,
      trim: true,
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

    floor: {
      type: String,
      default: "",
    },

    totalSeats: {
      type: Number,
      required: true,
      min: 1,
    },

    occupiedSeats: {
      type: Number,
      default: 0,
      min: 0,
    },

    availableSeats: {
      type: Number,
      default: 0,
      min: 0,
    },

    hourlyRate: {
      type: Number,
      default: 0,
    },

    dailyRate: {
      type: Number,
      default: 0,
    },

    monthlyRate: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "AVAILABLE",
        "PARTIALLY_OCCUPIED",
        "FULLY_OCCUPIED",
        "MAINTENANCE",
      ],
      default: "AVAILABLE",
    },
  },
  {
    timestamps: true,
  }
);



workspaceSchema.pre("save", function () {

  this.availableSeats =
    this.totalSeats - this.occupiedSeats;

  if (this.occupiedSeats === 0) {
    this.status = "AVAILABLE";
  }

  else if (
    this.occupiedSeats >= this.totalSeats
  ) {
    this.status = "FULLY_OCCUPIED";
  }

  else {
    this.status = "PARTIALLY_OCCUPIED";
  }

  
});



const Workspace =
  mongoose.model(
    "Workspace",
    workspaceSchema
  );

module.exports = Workspace;