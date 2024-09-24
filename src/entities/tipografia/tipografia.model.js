const mongoose = require('mongoose');

const TypographySchema = new mongoose.Schema({
  TypographyID: { type: String, required: true, unique: true },
  Nombre: { type: String, required: true },     // Typography principal de la página
  URL: { type: String, required: true },   // Typography secundario de la página             
});

const Typography = mongoose.model('Typography', TypographySchema);

module.exports = Typography;
