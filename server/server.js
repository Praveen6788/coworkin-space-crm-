const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();



const app = express();



/* MIDDLEWARE */

app.use(cors());

app.use(express.json());



/* ROUTES */

const leadRoutes =
  require("./routes/leadRoutes");

app.use("/api/leads", leadRoutes);


// Client Routes
const clientRoutes  =  require("./routes/clientRoutes.js")

app.use("/api/clients", clientRoutes);


// Workspace Routes
const workspaceRoutes =
  require("./routes/workspaceRoutes");

app.use(
  "/api/workspaces",
  workspaceRoutes
);


// allocation routes
const allocationRoutes =
  require("./routes/allocationRoutes");

app.use(
  "/api/allocations",
  allocationRoutes
);

// invoice routes

const invoiceRoutes =
  require("./routes/invoiceRoutes");

app.use(
  "/api/invoices",
  invoiceRoutes
);




// branch routes
const branchRoutes =
  require("./routes/branchRoutes");

app.use(
  "/api/branches",
  branchRoutes
);




// Booking routes
const bookingRoutes =
  require("./routes/bookingRoutes");

app.use(
  "/api/bookings",
  bookingRoutes
);



const paymentRoutes =
  require("./routes/paymentRoutes");


  app.use(
  "/api/payments",
  paymentRoutes
);

/* DATABASE */



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected");



    app.listen(
      process.env.PORT,
      () => {

        console.log(
          `Server running on ${process.env.PORT}`
        );

      }
    );

  })
  .catch((err) =>
    console.log(err)
  );