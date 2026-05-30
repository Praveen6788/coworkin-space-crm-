const express = require("express");

const Allocation = require("../models/Allocation");

const router = express.Router();



/* ==========================
   CREATE ALLOCATION
========================== */

router.post("/", async (req, res) => {
  try {
    const allocation =
      await Allocation.create(req.body);

    res.status(201).json(allocation);
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



/* ==========================
   GET ALL ALLOCATIONS
========================== */

router.get("/", async (req, res) => {
  try {

    const allocations =
      await Allocation.find()
        .populate("clientId")
        .populate("workspaceId")
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      allocations
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});



/* ==========================
   GET ALLOCATION BY ID
========================== */

router.get("/:id", async (req, res) => {

  try {

    const allocation =
      await Allocation.findById(
        req.params.id
      )
        .populate("clientId")
        .populate("workspaceId");

    if (!allocation) {

      return res.status(404).json({
        message:
          "Allocation not found",
      });

    }

    res.status(200).json(
      allocation
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});



/* ==========================
   UPDATE ALLOCATION
========================== */

router.patch("/:id", async (req, res) => {

  try {

    const allocation =
      await Allocation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!allocation) {

      return res.status(404).json({
        message:
          "Allocation not found",
      });

    }

    res.status(200).json(
      allocation
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});



/* ==========================
   DELETE ALLOCATION
========================== */

router.delete("/:id", async (req, res) => {

  try {

    const allocation =
      await Allocation.findByIdAndDelete(
        req.params.id
      );

    if (!allocation) {

      return res.status(404).json({
        message:
          "Allocation not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Allocation deleted successfully",
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