const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UserID: {
    type: String,
    required: true,
    unique: true // Asegúrate de que sea único
  },
  Nombre: String,
  Apellido: String,
  Correo: String,
  Password: String,
  FechaRegistro: {
    type: Date,
    default: Date.now
  },
  Completado: {
    type: Boolean,
    default: false
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
