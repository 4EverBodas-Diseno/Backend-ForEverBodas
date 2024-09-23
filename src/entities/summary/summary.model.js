// src/entities/summary/summary.model.test.js
const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  SummaryID: { type: String, required: true, unique: true },
  TotalInvitados: { type: Number, required: true },
  TotalConfirmado: { type: Number, required: true },
  EventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true }
});

const Summary = mongoose.model('Summary', summarySchema);

module.exports = Summary;
