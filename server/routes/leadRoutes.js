const express = require("express");

const router = express.Router();

const Lead =
  require("../models/Lead");



/* ----------------------------------------
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



module.exports = router;