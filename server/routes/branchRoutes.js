const express = require("express");

const Branch =
  require("../models/Branch");

const router =
  express.Router();



router.post("/", async (req, res) => {

  try {

    const branch =
      await Branch.create(
        req.body
      );

    res.status(201).json(
      branch
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

    const branches =
      await Branch.find()
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      branches
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

    const branch =
      await Branch.findById(
        req.params.id
      );

    if (!branch) {

      return res.status(404).json({
        message:
          "Branch not found",
      });

    }

    res.status(200).json(
      branch
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

    const branch =
      await Branch.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!branch) {

      return res.status(404).json({
        message:
          "Branch not found",
      });

    }

    res.status(200).json(
      branch
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

    const branch =
      await Branch.findByIdAndDelete(
        req.params.id
      );

    if (!branch) {

      return res.status(404).json({
        message:
          "Branch not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Branch deleted successfully",
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