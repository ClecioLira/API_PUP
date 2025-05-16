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

router.post("/", upload.single('image'), createPlant);
router.get("/", getAllPlants);
router.get("/:id", getPlantById);
router.put("/:id", upload.single('image'), updatePlant);
router.delete("/:id", deletePlant);

module.exports = router;