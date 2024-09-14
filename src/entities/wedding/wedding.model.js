// src/entities/wedding/wedding.model.js
const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema({
  WeddingID: { type: String, required: true, unique: true },
  ProfileID: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  NombrePareja: { type: String, required: true },
  FechaEvento: { type: Date, required: true },
  Lugar: { type: String, required: true },
  Historia: { type: String }
});

const Wedding = mongoose.model('Wedding', weddingSchema);

module.exports = Wedding;
