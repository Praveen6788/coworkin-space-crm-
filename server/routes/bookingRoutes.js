const express = require("express");

const Booking =
  require("../models/Booking");

const router =
  express.Router();



router.post("/", async (req, res) => {

  try {

    const booking =
      await Booking.create(
        req.body
      );

    res.status(201).json(
      booking
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



router.get("/", async (req, res) => {

  try {

    const bookings =
      await Booking.find()
        .populate("workspaceId")
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      bookings
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



router.get("/:id", async (req, res) => {

  try {

    const booking =
      await Booking.findById(
        req.params.id
      )
        .populate("workspaceId");

    if (!booking) {

      return res.status(404).json({
        message:
          "Booking not found",
      });

    }

    res.status(200).json(
      booking
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



router.patch("/:id", async (req, res) => {

  try {

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!booking) {

      return res.status(404).json({
        message:
          "Booking not found",
      });

    }

    res.status(200).json(
      booking
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



router.delete("/:id", async (req, res) => {

  try {

    const booking =
      await Booking.findByIdAndDelete(
        req.params.id
      );

    if (!booking) {

      return res.status(404).json({
        message:
          "Booking not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Booking deleted successfully",
    });

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



module.exports = router;