const express = require("express");
const Workspace = require("../models/Workspace");
const Client =
  require("../models/Client");
const Allocation =
  require("../models/Allocation");
const router = express.Router();

/* ==========================
   CREATE WORKSPACE
========================== */

router.post("/", async (req, res) => {
  try {
    const workspace =
      await Workspace.create(req.body);

    res.status(201).json(workspace);
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   GET ALL WORKSPACES
========================== */

/* ==========================
   GET ALL WORKSPACES
========================== */

router.get("/", async (req, res) => {
  try {
    const filter = {}

    if (req.query.branch) {
      filter.branch = req.query.branch
    }

    const workspaces = await Workspace.find(filter).sort({
      createdAt: -1,
    })

    res.status(200).json(workspaces)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

/* ==========================
   GET WORKSPACE BY ID
========================== */

router.get("/:id", async (req, res) => {
  try {
    const workspace =
      await Workspace.findById(
        req.params.id
      );

    if (!workspace) {
      return res.status(404).json({
        message: "Workspace not found",
      });
    }

    res.status(200).json(workspace);
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   UPDATE WORKSPACE
========================== */

router.patch("/:id", async (req, res) => {
  try {
    const workspace =
      await Workspace.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!workspace) {
      return res.status(404).json({
        message: "Workspace not found",
      });
    }

    res.status(200).json(workspace);
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   DELETE WORKSPACE
========================== */

router.delete("/:id", async (req, res) => {
  try {
    const workspace =
      await Workspace.findByIdAndDelete(
        req.params.id
      );

    if (!workspace) {
      return res.status(404).json({
        message: "Workspace not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Workspace deleted successfully",
    });
  }

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



/* ==========================
   ALLOCATE WORKSPACE
========================== */

router.post("/allocate", async (req, res) => {

  try {

    const {
      clientId,
      workspaceId,
      allocatedSeats,
      branch,
    } = req.body;

    const workspace =
      await Workspace.findById(
        workspaceId
      );

    if (!workspace) {

      return res.status(404).json({
        message:
          "Workspace not found",
      });

    }

    if (
      workspace.availableSeats <
      allocatedSeats
    ) {

      return res.status(400).json({
        message:
          "Not enough seats available",
      });

    }

    const allocation =
      await Allocation.create({

        clientId,
        workspaceId,
        allocatedSeats,
        branch,

      });

    workspace.occupiedSeats +=
      allocatedSeats;

    workspace.availableSeats -=
      allocatedSeats;

    await workspace.save();

    res.status(201).json(
      allocation
    );

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }

});

module.exports = router;
