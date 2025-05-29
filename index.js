import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import plantsRoutes from "./src/routes/plantsRoutes.js";
import vaseRoutes from "./src/routes/vaseRoutes.js";
import loginRoutes from "./src/routes/loginRoutes.js";
import registerRoutes from "./src/routes/registerRoutes.js";

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

app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/plants", plantsRoutes);
app.use("/api/vases", vaseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
