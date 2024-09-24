const User = require('./user.model');
const bcrypt = require('bcrypt'); // Si estás usando bcrypt para hashear contraseñas
const jwt = require('jsonwebtoken'); // Si estás usando JWT para autenticar usuarios

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    // Hashea la contraseña antes de guardarla (asegurando que estás usando bcrypt)
    user.Password = await bcrypt.hash(req.body.Password, 10);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar el estado de completado de un usuario a true
const updateUserCompletedStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.Completado = true; // Actualiza el campo de completado a true
    await user.save();

    res.status(200).json({ message: 'User completed status updated', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login de usuario
const loginUser = async (req, res) => {
  try {
    const { Correo, Password } = req.body;

    // Busca al usuario por correo
    const user = await User.findOne({ Correo });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verifica la contraseña usando bcrypt
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({
      message: 'Login exitoso',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserCompletedStatus,
  loginUser,
};
