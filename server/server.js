const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();



const app = express();
const PORT =
  process.env.PORT || 5000;



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

const dashboardRoutes =
  require("./routes/dashboardRoutes");

app.use(
  "/api/dashboard",
  dashboardRoutes
);

/* DATABASE */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "connecting",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) => {
    console.log("MongoDB connection failed");
    console.log(err.message);
  });
