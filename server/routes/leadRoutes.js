const express = require("express");

const router = express.Router();
const Client = require("../models/Client");

const Lead =
  require("../models/Lead");



/* ------------------------------
----------
   TEST ROUTE
---------------------------------------- */

router.get("/test", async (req, res) => {

  res.json({

    success: true,

    message: "API Working"

  });

});



/* ----------------------------------------
   GET LEADS
---------------------------------------- */

router.get("/", async (req, res) => {

  try {

    const leads =
      await Lead.find().sort({
        createdAt: -1
      });



    res.json(leads);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

});



/* ----------------------------------------
   CREATE LEAD
---------------------------------------- */

router.post("/", async (req, res) => {

  try {

    const lead =
      await Lead.create(req.body);



    res.status(201).json(lead);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

});

/* ----------------------------------------
   GET LEAD BY ID
---------------------------------------- */

router.get("/:id", async (req, res) => {

  try {

    const lead =
      await Lead.findById(req.params.id);

    if (!lead) {

      return res.status(404).json({
        message: "Lead not found"
      });

    }

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});



/* ----------------------------------------
   UPDATE LEAD
---------------------------------------- */

router.patch("/:id", async (req, res) => {

  try {

    const updatedLead =
      await Lead.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }

      );



    res.json(updatedLead);

  } catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

});

/* ==========================
   CONVERT LEAD TO CLIENT
========================== */

router.post("/:id/convert", async (req, res) => {

  try {

    const lead =
      await Lead.findById(
        req.params.id
      );

    if (!lead) {

      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });

    }

    const client =
      await Client.create({

        leadId: lead._id,

        companyName:
          lead.companyName,

        contactPerson:
          lead.name,

        email:
          lead.email,

        phone:
          lead.phone,

        branch:
          lead.branchInterested,

        workspaceType:
          lead.workspaceType,

        seatsAllocated:
          lead.seatsRequired || 1,

        status: "ACTIVE",

      });

    lead.stage =
      "CONVERTED";

    await lead.save();

    res.status(201).json({
      success: true,
      message:
        "Lead converted successfully",

      client,
    });

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
