import express from "express";
import upload from "../storage.js";
import {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
} from "../controllers/plantsController.js";
import authenticateToken from "../middleware/authToken.js";

const router = express.Router();

router.post("/", authenticateToken, upload.single("image"), createPlant);
router.get("/", getAllPlants);
router.get("/:id", getPlantById);
router.put("/:id", authenticateToken, upload.single("image"), updatePlant);
router.delete("/:id", authenticateToken, deletePlant);

export default router;
