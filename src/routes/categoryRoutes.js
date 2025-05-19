const express = require("express");
const router = express.Router();
const upload = require("../../storage");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { authenticateToken } = require("../middleware/authToken");

router.post("/", authenticateToken, upload.single("image"), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticateToken, upload.single("image"), updateCategory);
router.delete("/:id", authenticateToken, deleteCategory);

module.exports = router;
