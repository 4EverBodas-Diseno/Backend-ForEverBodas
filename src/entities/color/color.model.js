const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  ColorID: { type: String, required: true, unique: true },
  colorPrimario: { type: String, required: true },     // Color principal de la página
  colorSecundario: { type: String, required: true },   // Color secundario de la página
  colorLetra: { type: String, required: true },        // Color de la tipografía                 
});

const Color = mongoose.model('Color', ColorSchema);

module.exports = Color;
