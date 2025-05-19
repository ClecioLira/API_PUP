const Plant = require("../models/Plants");

exports.createPlant = async (req, res) => {
  const { name, description, category, price, trend, bestSelling } = req.body;

  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!req.file) {
    return res.status(400).json({ message: "IMAGEM É OBRIGATÓRIA" });
  }
  if (!description) {
    return res.status(400).json({ message: "DESCRIÇÃO É OBRIGATÓRIA" });
  }
  if (!category) {
    return res.status(400).json({ message: "CATEGORIA É OBRIGATÓRIA" });
  }
  if (!price) {
    return res.status(400).json({ message: "PREÇO É OBRIGATÓRIO" });
  }

  try {
    const imageUrl = req.file.path;
    const newPlant = new Plant({
      name,
      imageUrl,
      description,
      category,
      price,
      trend,
      bestSelling,
    });
    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO CRIAR PLANTA" });
  }
};

exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR PLANTAS" });
  }
};

exports.getPlantById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const plant = await Plant.findById(id);
    if (!plant) {
      return res.status(404).json({ message: "PLANTA NÃO ENCONTRADA" });
    }
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO BUSCAR PLANTA" });
  }
};

exports.updatePlant = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, newPrice, trend, bestSelling } =
    req.body;

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
  if (!category) {
    return res.status(400).json({ message: "CATEGORIA É OBRIGATÓRIA" });
  }
  if (!price) {
    return res.status(400).json({ message: "PREÇO É OBRIGATÓRIO" });
  }

  try {
    const imageUrl = req.file.path;
    const updatedPlant = await Plant.findByIdAndUpdate(
      id,
      {
        name,
        imageUrl,
        description,
        category,
        price,
        newPrice,
        trend,
        bestSelling,
      },
      { new: true }
    );
    if (!updatedPlant) {
      return res.status(404).json({ message: "PLANTA NÃO ENCONTRADA" });
    }
    res.status(200).json(updatedPlant);
  } catch (error) {
    res.status(500).json({ message: "ERRO AO ATUALIZAR PLANTA" });
  }
};

exports.deletePlant = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID NÃO INFORMADO" });
  }

  try {
    const deletedPlant = await Plant.findByIdAndDelete(id);
    if (!deletedPlant) {
      return res.status(404).json({ message: "PLANTA NÃO ENCONTRADA" });
    }
    res.status(200).json({ message: "PLANTA EXCLUÍDA COM SUCESSO" });
  } catch (error) {
    res.status(500).json({ message: "ERRO AO EXCLUIR PLANTA" });
  }
};
