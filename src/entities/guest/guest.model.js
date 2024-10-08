// src/entities/guest/guest.model.js
const mongoose = require('mongoose');

// Definir el esquema de invitados
const guestSchema = new mongoose.Schema({
  GuestID: { type: String, required: true, unique: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  EstadoInvitacion: { type: String },
  Telefono: { type: String },
  URL: { type: String },
  Confirmado: { type: Boolean, default: false },
  numMaxAcompanantes: { type: Number, default: 0 },
  numAcompanantes: { type: Number, default: 0 },
});

// Definir el esquema de usuario con el arreglo de invitados
const userSchema = new mongoose.Schema({
  UserID: { type: String, ref: 'User',required: true },
  Guests: [guestSchema] // Arreglo de objetos invitados
});

// Verificar si el modelo ya existe antes de crearlo
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
