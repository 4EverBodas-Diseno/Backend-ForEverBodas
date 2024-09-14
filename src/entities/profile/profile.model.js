// src/entities/profile/profile.model.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  profileID: { type: String, required: true, unique: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  Telefono: { type: String },
  Direccion: { type: String },
  FechaNacimiento: { type: Date },
  NombrePareja: { type: String }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
