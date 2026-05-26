const mongoose = require("mongoose");



const leadSchema =
  new mongoose.Schema(

    {

      /* ---------------------------------------
         CLIENT DETAILS
      --------------------------------------- */

      name: {

        type: String,

        required: true

      },



      phone: {

        type: String,

        required: true

      },



      email: {

        type: String,

        default: ""

      },



      company: {

        type: String,

        default: ""

      },



      /* ---------------------------------------
         WORKSPACE DETAILS
      --------------------------------------- */

      branch: {

        type: String,

        required: true

      },



      workspace: {

        type: String,

        required: true

      },



      seats: {

        type: Number,

        default: 1

      },



      moveIn: {

        type: String,

        default: "Immediate"

      },



      budget: {

        type: String,

        default: ""

      },



      /* ---------------------------------------
         PIPELINE
      --------------------------------------- */

      stage: {

        type: String,



        enum: [

          "new",

          "contacted",

          "proposal",

          "payment",

          "movein"

        ],



        default: "new"

      },



      priority: {

        type: String,



        enum: [

          "High",

          "Medium",

          "Low"

        ],



        default: "Medium"

      },



      /* ---------------------------------------
         QUOTATION
      --------------------------------------- */

      quotationAmount: {

        type: String,

        default: "₹65,000"

      },



      discount: {

        type: String,

        default: "₹5,000"

      },



      finalAmount: {

        type: String,

        default: "₹60,000"

      },



      quotationStatus: {

        type: String,



        enum: [

          "Pending",

          "Sent",

          "Accepted",

          "Rejected"

        ],



        default: "Pending"

      },



      quotationNotes: {

        type: String,

        default: ""

      },



      clientCounterOffer: {

        type: String,

        default: ""

      },



      /* ---------------------------------------
         PAYMENT
      --------------------------------------- */

      paymentStatus: {

        type: String,



        enum: [

          "Pending",

          "Paid",

          "Failed"

        ],



        default: "Pending"

      },



      paymentMethod: {

        type: String,

        default: "Online"

      },



      paymentDate: {

        type: String,

        default: ""

      },



      transactionId: {

        type: String,

        default: ""

      },



      /* ---------------------------------------
         INVOICE
      --------------------------------------- */

      invoiceNumber: {

        type: String,

        default: ""

      },



      invoiceStatus: {

        type: String,



        enum: [

          "Not Generated",

          "Generated",

          "Sent"

        ],



        default: "Not Generated"

      },



      invoiceUrl: {

        type: String,

        default: ""

      },



      /* ---------------------------------------
         BOOKING / ACCESS
      --------------------------------------- */

      accessStatus: {

        type: String,



        enum: [

          "Pending",

          "Approved",

          "Completed"

        ],



        default: "Pending"

      },



      bookingStatus: {

        type: String,



        enum: [

          "Enquiry",

          "Proposal Sent",

          "Payment Pending",

          "Confirmed",

          "Completed"

        ],



        default: "Enquiry"

      },



      /* ---------------------------------------
         METADATA
      --------------------------------------- */

      source: {

        type: String,

        default: "Website"

      },



      assignedTo: {

        type: String,

        default: "Branch Admin"

      }

    },



    {

      timestamps: true

    }

  );



module.exports =
  mongoose.model(
    "Lead",
    leadSchema
  );