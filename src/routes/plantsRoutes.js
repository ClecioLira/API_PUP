const express = require("express");
const router = express.Router();
const {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
} = require("../controllers/plantsController");

router.post("/", createPlant);
router.get("/", getAllPlants);
router.get("/:id", getPlantById);
router.put("/:id", updatePlant);
router.delete("/:id", deletePlant);

module.exports = router;