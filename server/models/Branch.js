const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    branchName: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    managerName: {
      type: String,
      default: "",
    },

    managerEmail: {
      type: String,
      default: "",
    },

    managerPhone: {
      type: String,
      default: "",
    },

    totalCapacity: {
      type: Number,
      default: 0,
    },

    occupiedCapacity: {
      type: Number,
      default: 0,
    },

    availableCapacity: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "ACTIVE",
        "INACTIVE",
        "UNDER_MAINTENANCE",
      ],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

branchSchema.pre("save", function () {

  this.availableCapacity =
    this.totalCapacity -
    this.occupiedCapacity;

});

const Branch = mongoose.model(
  "Branch",
  branchSchema
);

module.exports = Branch;