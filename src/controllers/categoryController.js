import Category from "../models/Category.js";

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "IMAGEM É OBRIGATÓRIA" });
  }

  try {
    const imageUrl = req.file.path;
    const newCategory = new Category({ name, imageUrl });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO CRIAR CATEGORIA" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR CATEGORIAS" });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "CATEGORIA NÃO ENCONTRADA" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR CATEGORIA" });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "IMAGEM É OBRIGATÓRIA" });
  }

  try {
    const imageUrl = req.file.path;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, imageUrl },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "CATEGORIA NÃO ENCONTRADA" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO ATUALIZAR CATEGORIA" });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "CATEGORIA NÃO ENCONTRADA" });
    }
    res.status(200).json({ message: "CATEGORIA EXCLUÍDA COM SUCESSO" });
  } catch (error) {
    res.status(500).json({ message: "ERRO AO EXCLUIR CATEGORIA" });
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
