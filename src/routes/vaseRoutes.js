import express from "express";
import upload from "../../storage.js";
import {
  createVase,
  getAllVases,
  getVaseById,
  updateVase,
  deleteVase,
} from "../controllers/vaseController.js";
import authenticateToken from "../middleware/authToken.js";

const router = express.Router();

router.post("/", authenticateToken, upload.single("image"), createVase);
router.get("/", getAllVases);
router.get("/:id", getVaseById);
router.put("/:id", authenticateToken, upload.single("image"), updateVase);
router.delete("/:id", authenticateToken, deleteVase);

export default router;
