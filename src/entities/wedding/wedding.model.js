// src/entities/wedding/wedding.model.js
const mongoose = require('mongoose');

// Definición del esquema de bodas sin el campo _id
const weddingSchema = new mongoose.Schema({
  WeddingID: { type: String, required: true, unique: true }, // Identificador único para la boda
  UserID: { type: String, ref: 'User', required: true }, // Referencia al ID del usuario
  NombrePareja: { type: String, required: true }, // Nombre de la pareja
  FechaEvento: { type: Date, required: true }, // Fecha del evento
  Lugar: { type: String, required: true }, // Lugar de la boda
  Historia: { type: String } // Historia de la pareja (opcional)
}, { _id: false }); // Opción para no generar el campo _id

// Modelo de Mongoose para la boda
const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
