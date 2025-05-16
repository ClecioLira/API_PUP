require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./src/routes/categoryRoutes");
const plantsRoutes = require("./src/routes/plantsRoutes");
const vaseRoutes = require("./src/routes/vaseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/api/categories", categoryRoutes);
app.use("/api/plants", plantsRoutes);
app.use("/api/vases", vaseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
