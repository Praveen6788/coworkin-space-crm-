const express = require("express");

const Invoice =
  require("../models/Invoice");
const Client =
  require("../models/Client");
const router =
  express.Router();



/* ==========================
   CREATE INVOICE
========================== */

router.post("/", async (req, res) => {

  try {

    const invoice =
      await Invoice.create(
        req.body
      );

    res
      .status(201)
      .json(invoice);

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



/* ==========================
   GET ALL INVOICES
========================== */

router.get("/", async (req, res) => {

  try {

    const invoices =
      await Invoice.find()
        .populate("clientId")
        .sort({
          createdAt: -1,
        });

    res
      .status(200)
      .json(invoices);

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



/* ==========================
   GET INVOICE BY ID
========================== */

router.get("/:id", async (req, res) => {

  try {

    const invoice =
      await Invoice.findById(
        req.params.id
      )
        .populate("clientId");

    if (!invoice) {

      return res.status(404).json({
        message:
          "Invoice not found",
      });

    }

    res
      .status(200)
      .json(invoice);

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



/* ==========================
   UPDATE INVOICE
========================== */

router.patch("/:id", async (req, res) => {

  try {

    const invoice =
      await Invoice.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!invoice) {

      return res.status(404).json({
        message:
          "Invoice not found",
      });

    }

    res
      .status(200)
      .json(invoice);

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});



/* ==========================
   DELETE INVOICE
========================== */

router.delete("/:id", async (req, res) => {

  try {

    const invoice =
      await Invoice.findByIdAndDelete(
        req.params.id
      );

    if (!invoice) {

      return res.status(404).json({
        message:
          "Invoice not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Invoice deleted successfully",
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
   GENERATE INVOICE
========================== */

router.post(
  "/generate/:clientId",
  async (req, res) => {

    try {

      const client =
        await Client.findById(
          req.params.clientId
        );

      if (!client) {

        return res.status(404).json({
          message:
            "Client not found",
        });

      }

      const amount =
        client.monthlyRent;

      const gst =
        amount * 0.18;

      const totalAmount =
        amount + gst;

      const invoice =
        await Invoice.create({

          clientId:
            client._id,

          invoiceNumber:
            `INV-${Date.now()}`,

          branch:
            client.branch,

          billingMonth:
            new Date()
              .toLocaleString(
                "default",
                {
                  month: "long",
                  year: "numeric",
                }
              ),

          amount,

          gst: 18,

          totalAmount,

          dueDate:
            new Date(
              Date.now() +
              7 * 24 * 60 * 60 * 1000
            ),

        });

      res.status(201).json(
        invoice
      );

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }

  }
);

module.exports = router;