import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: "EMAIL É OBRIGATÓRIO" });
  }
  if (!password) {
    return res.status(400).json({ message: "SENHA É OBRIGATÓRIA" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "USUÁRIO NÃO ENCONTRADO" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "SENHA INCORRETA" });
  }

  try {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "24h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "ERRO AO REALIZAR LOGIN" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ message: "NOME É OBRIGATÓRIO" });
  }
  if (!email) {
    return res.status(400).json({ message: "EMAIL É OBRIGATÓRIO" });
  }
  if (!password) {
    return res.status(400).json({ message: "SENHA É OBRIGATÓRIA" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "USUÁRIO JÁ CADASTRADO" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "USUÁRIO CRIADO COM SUCESSO" });
  } catch (error) {
    res.status(500).json({ message: "ERRO AO CRIAR USUÁRIO" });
  }
};

export { login, register };