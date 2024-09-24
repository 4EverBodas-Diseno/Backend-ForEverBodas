// src/entities/login/login.controller.js
const Login = require('./login.model');

// Registro de usuario (Sign Up)
const register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.save();
    res.status(201).json(login);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Inicio de sesión (Login)
const loginUser = async (req, res) => {
  try {
    const { Correo, Contraseña } = req.body;
    const user = await Login.findOne({ Correo });
    
    if (!user || user.Contraseña !== Contraseña) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    
    // Generar token o manejar sesión aquí
    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los logins
const getAllLogins = async (req, res) => {
  try {
    const logins = await Login.find();
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cerrar sesión (Logout)
const logoutUser = (req, res) => {
  // Manejo de cierre de sesión, como invalidar token o sesión
  res.status(200).json({ message: 'Sesión cerrada' });
};

// Cambiar contraseña (Change Password)
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await Login.findById(req.params.id);

    if (!user || user.Contraseña !== oldPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    user.Contraseña = newPassword;
    await user.save();
    res.status(200).json({ message: 'Contraseña cambiada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Recuperar contraseña (Forgot Password)
const forgotPassword = async (req, res) => {
  try {
    const { Correo } = req.body;
    const user = await Login.findOne({ Correo });

    if (!user) {
      return res.status(404).json({ message: 'Correo no encontrado' });
    }

    // Generar y enviar token de recuperación
    res.status(200).json({ message: 'Correo de recuperación enviado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  loginUser,
  getAllLogins, 
  logoutUser,
  changePassword,
  forgotPassword
};

