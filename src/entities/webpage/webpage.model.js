// src/entities/webpage/webpage.model.js
const mongoose = require('mongoose');

const webpageSchema = new mongoose.Schema({
  WebPageID: { type: String, required: true, unique: true },
  WeddingID: { type: String, ref: 'Wedding', required: true },
  URLPage: { type: String, required: true },
  TypographyID: { type: String, ref: 'Typography', required: true }, // Referencia al TypographyID del modelo Typography
  ColorID: { type: String, ref: 'Color', required: true } // Referencia al ColorID del modelo Color
});

const WebPage = mongoose.model('WebPage', webpageSchema);

module.exports = WebPage;
