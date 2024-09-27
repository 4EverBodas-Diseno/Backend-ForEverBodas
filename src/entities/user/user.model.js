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

// Opcionalmente, elimina el campo _id si no lo quieres
userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
