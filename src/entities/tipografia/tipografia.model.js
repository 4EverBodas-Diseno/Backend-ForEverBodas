const mongoose = require('mongoose');

const TipografiaSchema = new mongoose.Schema({
  TipografiaID: { type: String, required: true, unique: true },
  Front: { type: String, required: true },     // Tipografía principal de la página
  FrontURL: { type: String, required: true },   // Tipografía secundaria de la página             
});

const Tipografia = mongoose.model('Tipografia', TipografiaSchema);

module.exports = Tipografia;
