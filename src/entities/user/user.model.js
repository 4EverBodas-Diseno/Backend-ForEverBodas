// src/entities/user/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UserID: { type: String, required: true, unique: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true, unique: true },
  Contraseña: { type: String, required: true },
  FechaRegistro: { type: Date, default: Date.now },
  Completado: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;