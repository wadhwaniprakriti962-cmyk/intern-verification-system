const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const internRoutes = require("./routes/internRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/interns", internRoutes);

// home route
app.get("/", (req, res) => {
  res.send("Internship Verification System API is running");
});

// start server AFTER DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});