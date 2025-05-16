const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({ CLOUDINARY_URL: process.env.CLOUDINARY_URL });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "photos",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

module.exports = upload;
