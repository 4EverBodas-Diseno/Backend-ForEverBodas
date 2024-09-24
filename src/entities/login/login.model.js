// src/entities/Login/Login.model.js
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  LoginID: { type: String, required: true, unique: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true, unique: true },
  Contraseña: { type: String, required: true },
});

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;
