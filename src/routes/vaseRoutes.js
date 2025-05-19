const express = require("express");
const router = express.Router();
const upload = require("../../storage");
const {
  createVase,
  getAllVases,
  getVaseById,
  updateVase,
  deleteVase,
} = require("../controllers/vaseController");
const { authenticateToken } = require("../middleware/authToken");

router.post("/", authenticateToken, upload.single("image"), createVase);
router.get("/", getAllVases);
router.get("/:id", getVaseById);
router.put("/:id", authenticateToken, upload.single("image"), updateVase);
router.delete("/:id", authenticateToken, deleteVase);

module.exports = router;
