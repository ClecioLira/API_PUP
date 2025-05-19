const express = require("express");
const router = express.Router();
const upload = require('../../storage');
const {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
} = require("../controllers/plantsController");
const { authenticateToken } = require("../middleware/authToken");

router.post("/", authenticateToken, upload.single('image'), createPlant);
router.get("/", getAllPlants);
router.get("/:id", getPlantById);
router.put("/:id", authenticateToken, upload.single('image'), updatePlant);
router.delete("/:id", authenticateToken, deletePlant);

module.exports = router;