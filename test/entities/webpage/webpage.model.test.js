// src/entities/webpage/webpage.model.test.js
const mongoose = require('mongoose');

const webpageSchema = new mongoose.Schema({
  WebPageID: { type: String, required: true, unique: true },
  TemplateID: { type: mongoose.Schema.Types.ObjectId, ref: 'Template', required: true },
  EventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true },
  URLPage: { type: String, required: true },
  FechaCreacion: { type: Date, default: Date.now },
  FechaActualizacion: { type: Date, default: Date.now }
});

const WebPage = mongoose.model('WebPage', webpageSchema);

module.exports = WebPage;
