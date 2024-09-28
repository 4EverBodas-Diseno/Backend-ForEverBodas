const User = require('./user.model');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { Correo, UserID } = req.body;

    // Validar si ya existe un usuario con el mismo correo o UserID
    const existingUser = await User.findOne({ Correo });
    const existingUserID = await User.findOne({ UserID });

    if (existingUser || existingUserID) {
      return res.status(400).json({ message: 'Ya existe un usuario con este correo o UserID' });
    }

    const user = new User(req.body);
    user.Password = req.body.Password; // En producción, usa hashing para asegurar las contraseñas
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

// Obtener un usuario por UserID
const getUserById = async (req, res) => {
  try {
    // Busca por UserID, no por _id
    const user = await User.findOne({ UserID: req.params.UserID });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario por UserID
const updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ UserID: req.params.UserID }, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar el estado de completado
const updateUserCompletedStatus = async (req, res) => {
  try {
    const user = await User.findOne({ UserID: req.params.UserID });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Actualiza el estado de completado
    user.Completado = true;
    await user.save();

    res.status(200).json({ message: 'Estado de completado actualizado', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario por UserID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ UserID: req.params.UserID });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado' });
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
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    if (Password !== user.Password) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Enviar la información del usuario (sin la contraseña) al cliente
    res.status(200).json({
      UserID: user.UserID,
      Nombre: user.Nombre,
      Apellido: user.Apellido,
      FechaRegistro: user.FechaRegistro,
      Completado: user.Completado, // Asegúrate de incluir el atributo Completado
      message: 'Login exitoso',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
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
