// src/entities/profile/profile.model.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    profileID: { type: String, required: true, unique: true },
    UserID: { type: String, ref: 'User', required: true },
    Telefono: { type: String },
    Direccion: { type: String },
    FechaNacimiento: { type: Date },
  });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;