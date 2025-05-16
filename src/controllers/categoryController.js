const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name || !req.file) {
    return res.status(400).json({ message: "NOME E IMAGEM SÃO OBRIGATÓRIOS" });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  try {
    const newCategory = new Category({ name, imageUrl });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO CRIAR CATEGORIA" });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR CATEGORIAS" });
  }
};

exports.getCategoryById = async (req, res) => {
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

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  if (!name || !req.file) {
    return res.status(400).json({ message: "NOME E IMAGEM SÃO OBRIGATÓRIOS" });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  try {
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

exports.deleteCategory = async (req, res) => {
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
