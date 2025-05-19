import Vase from "../models/Vase.js";

const createVase = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "IMAGEM É OBRIGATÓRIA" });
  }
  if (!description) {
    return res.status(400).json({ message: "DESCRIÇÃO É OBRIGATÓRIA" });
  }
  if (!price) {
    return res.status(400).json({ message: "PREÇO É OBRIGATÓRIO" });
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

const getAllVases = async (req, res) => {
  try {
    const Vases = await Vase.find();
    res.status(200).json(Vases);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR VASOS" });
  }
};

const getVaseById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const vase = await Vase.findById(id);
    if (!Vase) {
      return res.status(404).json({ message: "VASO NÃO ENCONTRADO" });
    }
    res.status(200).json(vase);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR VASO" });
  }
};

const updateVase = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "IMAGEM É OBRIGATÓRIA" });
  }
  if (!description) {
    return res.status(400).json({ message: "DESCRIÇÃO É OBRIGATÓRIA" });
  }
  if (!price) {
    return res.status(400).json({ message: "PREÇO É OBRIGATÓRIO" });
  }

  try {
    const imageUrl = req.file.path;
    const updatedVase = await Vase.findByIdAndUpdate(
      id,
      { name, imageUrl, description, price },
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

const deleteVase = async (req, res) => {
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

export {
  createVase,
  getAllVases,
  getVaseById,
  updateVase,
  deleteVase,
};
