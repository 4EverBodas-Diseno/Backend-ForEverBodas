// src/entities/webpage/webpage.model.js
const mongoose = require('mongoose');

const webpageSchema = new mongoose.Schema({
  WebPageID: { type: String, required: true, unique: true },
  TemplateID: { type: mongoose.Schema.Types.ObjectId, ref: 'Template', required: true },
  EventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true },
  URLPage: { type: String, required: true },
  colorPrimario: { type: String, required: true },     // Color principal de la página
  colorSecundario: { type: String, required: true },   // Color secundario de la página
  colorLetra: { type: String, required: true },        // Color de la tipografía
  tipografia: { type: String, required: true },        // Tipografía utilizada
  URL: { type: String, required: true },               // URL adicional si es necesario
  FechaCreacion: { type: Date, default: Date.now },
  FechaActualizacion: { type: Date, default: Date.now }
});

const WebPage = mongoose.model('WebPage', webpageSchema);

module.exports = WebPage;
