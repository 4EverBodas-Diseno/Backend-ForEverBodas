// src/entities/webpage/webpage.model.js
const mongoose = require('mongoose');

const webpageSchema = new mongoose.Schema({
  WebPageID: { type: String, required: true, unique: true },
  WeddingID: { type: String, ref: 'Wedding', required: true },
  URLPage: { type: String, required: true },
  Styles: {
    primaryColor: { type: String, required: true },
    secondaryColor: { type: String, required: true },
    Typography: { type: String, required: true } // Atributo para el tipo de tipografía
  }
});

const WebPage = mongoose.model('WebPage', webpageSchema);

module.exports = WebPage;