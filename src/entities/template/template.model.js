// src/entities/template/template.model.test.js
const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  TemplateID: { type: String, required: true, unique: true },
  NombrePlantilla: { type: String, required: true },
  TypographyNom: { type: String },
  URLTypography: { type: String },
  ColorPrim: { type: String },
  ColorSec: { type: String },
  ColorLetra: { type: String }
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
