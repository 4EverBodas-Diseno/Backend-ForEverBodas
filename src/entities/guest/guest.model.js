// src/entities/guest/guest.model.js
const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  GuestID: { type: String, required: true, unique: true },
  WebPageID: { type: mongoose.Schema.Types.ObjectId, ref: 'WebPage', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  EstadoInvitacion: { type: String, enum: ['Invitado', 'Confirmado', 'Rechazado'], default: 'Invitado' },
  Telefono: { type: String },
  URL: { type: String }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
