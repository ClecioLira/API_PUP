import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

cloudinary.config({ CLOUDINARY_URL: process.env.CLOUDINARY_URL });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "photos",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;
