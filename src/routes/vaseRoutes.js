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

router.post("/", upload.single("image"), createVase);
router.get("/", getAllVases);
router.get("/:id", getVaseById);
router.put("/:id", upload.single("image"), updateVase);
router.delete("/:id", deleteVase);

module.exports = router;
