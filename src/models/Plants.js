const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    trend: {
      type: Boolean,
      default: false,
    },
    bestSelling: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
