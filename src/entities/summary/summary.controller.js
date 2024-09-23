// src/entities/summary/summary.controller.test.js
const Summary = require('./summary.model');

// Crear un nuevo Summary
const createSummary = async (req, res) => {
  try {
    const summary = new Summary(req.body);
    await summary.save();
    res.status(201).json(summary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Summaries
const getAllSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find().populate('EventID');
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un Summary por ID
const getSummaryById = async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id).populate('EventID');
    if (!summary) return res.status(404).json({ message: 'Summary not found' });
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un Summary
const updateSummary = async (req, res) => {
  try {
    const summary = await Summary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!summary) return res.status(404).json({ message: 'Summary not found' });
    res.status(200).json(summary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un Summary
const deleteSummary = async (req, res) => {
  try {
    const summary = await Summary.findByIdAndDelete(req.params.id);
    if (!summary) return res.status(404).json({ message: 'Summary not found' });
    res.status(200).json({ message: 'Summary deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSummary,
  getAllSummaries,
  getSummaryById,
  updateSummary,
  deleteSummary
};
