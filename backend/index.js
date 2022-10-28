require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const MONGO_URI = process.env.MONGO_URI;
const FRONTEND_URL= process.env.FRONTEND_ORIGIN;

const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);
