// src/index.js
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/database');

// Conectar a la base de datos
connectDB();

// Configurar el puerto
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});