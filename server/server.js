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