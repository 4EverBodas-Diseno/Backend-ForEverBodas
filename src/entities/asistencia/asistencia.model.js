// src/entities/asistencia/asistencia.model.js
const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  GuestID: { type: String, ref: 'Guest', required: true },
  EventID: { type: String, ref: 'Wedding', required: true },
  Confirmacion: { type: Boolean, required: true },
  Cant_Invitado: { type: Number, required: true }
});

const Asistencia = mongoose.model('Asistencia', asistenciaSchema);

module.exports = Asistencia;
