const User = require('./user.model');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { Correo } = req.body;

    // Validar si ya existe un usuario con el mismo correo
    const existingUser = await User.findOne({ Correo });
    if (existingUser) {
      return res.status(400).json({ message: 'Ya existe un usuario con este correo' });
    }

    const user = new User(req.body);
    user.Password = req.body.Password; // Esto debería ser asegurado en la creación, pero considera usar hashing en producción
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

// Actualizar el estado de completado de un usuario (PUT)
const updateUserCompletedStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Actualiza el estado de completado
    user.Completado = true;
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
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    if (Password !== user.Password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Enviar la información del usuario (sin la contraseña) al cliente
    res.status(200).json({
      UserID: user._id,
      Nombre: user.Nombre,
      Apellido: user.Apellido, // Asegúrate de que 'Apellido' exista en el esquema de User
      FechaRegistro: user.FechaRegistro, // Asegúrate de que 'FechaRegistro' exista en el esquema
      message: 'Login exitoso',
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserCompletedStatus, // Esta ruta ahora usa PUT
  loginUser,
};
