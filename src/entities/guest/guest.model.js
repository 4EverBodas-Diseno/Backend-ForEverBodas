// src/entities/guest/guest.model.js
const mongoose = require('mongoose');

// Definir el esquema de invitado
const guestSchema = new mongoose.Schema({
  GuestID: { type: String, required: true, unique: true },
  WebPageID: { type: String, ref: 'WebPage', required: true },
  UserID: { type: String, ref: 'User', required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  EstadoInvitacion: { type: String, enum: ['I', 'C', 'R'], default: 'I' }, // Cambiado a 'I'
  Telefono: { type: String },
  URL: { type: String },
  Confirmado: { type: Boolean, default: false },
  numMaxAcompanantes: { type: Number, default: 0 }, 
  numAcompanantes: { type: Number, default: 0 }, 
});

// Definir las propiedades virtuales para total de invitados y confirmados
guestSchema.virtual('totalInvitados').get(function () {
  return this.model('Guest').countDocuments();
});

guestSchema.virtual('totalConfirmados').get(function () {
  return this.model('Guest').countDocuments({ Confirmado: true });
});

// Configuración para incluir las propiedades virtuales al convertir a JSON
guestSchema.set('toJSON', { virtuals: true });

// Eliminar el campo _id del modelo
guestSchema.set('id', false); // Opcional si no quieres el id en el objeto devuelto

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;