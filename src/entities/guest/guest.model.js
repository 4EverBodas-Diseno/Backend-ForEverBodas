// src/entities/guest/guest.model.js
const mongoose = require('mongoose');

// Definir el esquema de invitado
const guestSchema = new mongoose.Schema({
  GuestID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User', required: true },
  Nombre: { type: String, required: true },
  Apellido: { type: String, required: true },
  Correo: { type: String, required: true },
  EstadoInvitacion: { type: String }, 
  Telefono: { type: String },
  URL: { type: String },
  Confirmado: { type: Boolean, default: false },
  numMaxAcompanantes: { type: Number, default: 0 }, 
  numAcompanantes: { type: Number, default: 0 }, 
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;