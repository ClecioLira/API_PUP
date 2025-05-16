const Vase = require("../models/Vase");

exports.createVase = async (req, res) => {
  const { name, description, price} = req.body;

  if (!name || !req.file || !description || !price) {
    return res
      .status(400)
      .json({
        message: "NOME, IMAGEM, DESCRIÇÃO E PREÇO SÃO OBRIGATÓRIOS",
      });
  }

  try {
    const imageUrl = req.file.path;
    const newVase = new Vase({
      name,
      imageUrl,
      description,
      price,
    });
    await newVase.save();
    res.status(201).json(newVase);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO CRIAR VASO" });
  }
};

exports.getAllVases = async (req, res) => {
  try {
    const Vases = await Vase.find();
    res.status(200).json(Vases);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR VASOS" });
  }
};

exports.getVaseById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const Vase = await Vase.findById(id);
    if (!Vase) {
      return res.status(404).json({ message: "VASO NÃO ENCONTRADO" });
    }
    res.status(200).json(Vase);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR VASO" });
  }
};

exports.updateVase = async (req, res) => {
  const { id } = req.params;
  const { name, description, price} = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  if (!name || !req.file || !description || !price) {
    return res
      .status(400)
      .json({
        message: "NOME, IMAGEM, DESCRIÇÃO E PREÇO SÃO OBRIGATÓRIOS",
      });
  }

  try {
    const imageUrl = req.file.path;
    const updatedVase = await Vase.findByIdAndUpdate(
      id,
      { name, imageUrl, description, price},
      { new: true }
    );
    if (!updatedVase) {
      return res.status(404).json({ message: "VASO NÃO ENCONTRADA" });
    }
    res.status(200).json(updatedVase);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO ATUALIZAR VASO" });
  }
};

exports.deleteVase = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const deletedVase = await Vase.findByIdAndDelete(id);
    if (!deletedVase) {
      return res.status(404).json({ message: "VASO NÃO ENCONTRADA" });
    }
    res.status(200).json({ message: "VASO EXCLUÍDO COM SUCESSO" });
  } catch (error) {
    res.status(500).json({ message: "ERRO AO EXCLUIR VASO" });
  }
};
