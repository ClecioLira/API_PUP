const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploads");

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Nenhum arquivo enviado" });

  res.status(200).json({
    message: "Upload realizado com sucesso",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

module.exports = router;
