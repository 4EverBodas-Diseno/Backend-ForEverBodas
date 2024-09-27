// src/entities/asistencia/asistencia.model.js
const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  GuestID: { type: String, ref: 'Guest', required: true },
  WeddingID: { type: String, ref: 'Wedding', required: true },
  Confirmacion: { type: Boolean, required: true },
  Cant_Invitado: { type: Number, required: true }
}, { _id: false }); // Aquí se elimina el campo _id

const Asistencia = mongoose.model('Asistencia', asistenciaSchema);

module.exports = Asistencia;