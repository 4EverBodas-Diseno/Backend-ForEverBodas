// src/entities/wellwish/wellwish.model.js
const mongoose = require('mongoose');

const wellWishSchema = new mongoose.Schema({
  WellWishID: { type: String, required: true, unique: true }, // Identificador único
  WeddingID: { type: String, ref: 'Wedding', required: true }, // Referencia a Wedding
  GuestID: { type: String, ref: 'User', required: true }, // Referencia a User
  Mensaje: { type: String, required: true }, // Mensaje de felicitación
  FechaEnvio: { type: Date, default: Date.now } // Fecha de envío, por defecto la fecha actual
}, { _id: false }); // Desactiva el campo _id por defecto

const WellWish = mongoose.model('WellWish', wellWishSchema);

module.exports = WellWish;
