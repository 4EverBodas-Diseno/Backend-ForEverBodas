// src/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Tiempo de espera antes de fallar en la selección del servidor
      socketTimeoutMS: 45000,          // Tiempo de espera antes de cerrar la conexión por inactividad
      useFindAndModify: false,         // Para evitar advertencias de Mongoose
      useCreateIndex: true             // Para optimizar la creación de índices
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
