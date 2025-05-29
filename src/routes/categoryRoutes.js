import express from "express";
import upload from "../storage.js";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import authenticateToken from "../middleware/authToken.js";

const router = express.Router();

router.post("/", authenticateToken, upload.single("image"), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticateToken, upload.single("image"), updateCategory);
router.delete("/:id", authenticateToken, deleteCategory);

export default router;