const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    bookingType: {
      type: String,
      enum: [
        "Meeting Room",
        "Day Pass",
        "Hot Desk",
      ],
      required: true,
    },

    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String,
    },

    endTime: {
      type: String,
    },

    seatsBooked: {
      type: Number,
      default: 1,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "PENDING",
        "PAID",
        "REFUNDED",
      ],
      default: "PAID",
    },

    bookingStatus: {
      type: String,
      enum: [
        "CONFIRMED",
        "CANCELLED",
        "COMPLETED",
      ],
      default: "CONFIRMED",
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

const Booking =
  mongoose.model(
    "Booking",
    bookingSchema
  );

module.exports = Booking;
