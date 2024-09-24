// src/entities/guest/guest.model.js
const mongoose = require('mongoose');

// Definir el esquema de invitado
const guestSchema = new mongoose.Schema({
  GuestID: { type: String, required: true, unique: true },
  WebPageID: { type: mongoose.Schema.Types.ObjectId, ref: 'WebPage', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  EstadoInvitacion: { type: String, enum: ['I', 'C', 'R'], default: 'Invitado' },
  Telefono: { type: String },
  URL: { type: String },
  Confirmado: { type: Boolean, default: false },
  numMaxAcompanantes: { type: Number, default: 0 }, 
  numAcompanantes: { type: Number, default: 0 }, 
});


guestSchema.virtual('totalInvitados').get(function () {
  return this.model('Guest').countDocuments();
});


guestSchema.virtual('totalConfirmados').get(function () {
  return this.model('Guest').countDocuments({ Confirmado: true });
});


guestSchema.set('toJSON', { virtuals: true });

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
