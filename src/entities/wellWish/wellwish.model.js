// src/entities/wellwish/wellwish.model.js
const mongoose = require('mongoose');

const wellWishSchema = new mongoose.Schema({
  WellWishID: { type: String, required: true, unique: true },
  EventID: { String, ref: 'Event', required: true },
  GuestID: { type: String, ref: 'User', required: true },
  Mensaje: { type: String, required: true },
  FechaEnvio: { type: Date, default: Date.now }
});

const WellWish = mongoose.model('WellWish', wellWishSchema);

module.exports = WellWish;
