// src/entities/wedding/wedding.model.js
const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema({
  WeddingID: { type: String, required: true, unique: true },
  UserID: { type: String, ref: 'User', required: true },
  NombrePareja: { type: String, required: true },
  FechaEvento: { type: Date, required: true },
  Lugar: { type: String, required: true },
  Historia: { type: String }
});


const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
