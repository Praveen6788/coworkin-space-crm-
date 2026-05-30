    const express = require("express");

    const Invoice =
  require("../models/Invoice");

const Payment =
  require("../models/Payment");

const router =
  express.Router();



router.post("/", async (req, res) => {

  try {

    const payment =
      await Payment.create(
        req.body
      );

    res.status(201).json(
      payment
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

    const payments =
      await Payment.find()
        .populate("clientId")
        .populate("invoiceId")
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      payments
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

    const payment =
      await Payment.findById(
        req.params.id
      )
        .populate("clientId")
        .populate("invoiceId");

    if (!payment) {

      return res.status(404).json({
        message:
          "Payment not found",
      });

    }

    res.status(200).json(
      payment
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

    const payment =
      await Payment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!payment) {

      return res.status(404).json({
        message:
          "Payment not found",
      });

    }

    res.status(200).json(
      payment
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

    const payment =
      await Payment.findByIdAndDelete(
        req.params.id
      );

    if (!payment) {

      return res.status(404).json({
        message:
          "Payment not found",
      });

    }

    res.status(200).json({
      success: true,
      message:
        "Payment deleted successfully",
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
   RECORD PAYMENT
========================== */

router.post(
  "/invoice/:invoiceId",
  async (req, res) => {

    try {

      const invoice =
        await Invoice.findById(
          req.params.invoiceId
        );

      if (!invoice) {

        return res.status(404).json({
          message:
            "Invoice not found",
        });

      }

      const payment =
        await Payment.create({

          invoiceId:
            invoice._id,

          clientId:
            invoice.clientId,

          amount:
            invoice.totalAmount,

          paymentMode:
            req.body.paymentMode ||
            "UPI",

          transactionId:
            req.body.transactionId ||
            "",

          status:
            "RECEIVED",

        });

      invoice.status =
        "PAID";

      invoice.paidDate =
        new Date();

      await invoice.save();

      res.status(201).json({
        payment,
        invoice,
      });

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