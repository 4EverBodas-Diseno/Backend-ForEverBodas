// src/entities/wedding/wedding.controller.js
const Wedding = require('./wedding.model');

// Crear un nuevo Wedding
const createWedding = async (req, res) => {
  try {
    const wedding = new Wedding(req.body);
    await wedding.save();
    res.status(201).json(wedding);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Weddings
const getAllWeddings = async (req, res) => {
  try {
    const weddings = await Wedding.find().populate('ProfileID');
    res.status(200).json(weddings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un Wedding por ID
const getWeddingById = async (req, res) => {
  try {
    const wedding = await Wedding.findById(req.params.id).populate('ProfileID');
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un Wedding
const updateWedding = async (req, res) => {
  try {
    const wedding = await Wedding.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un Wedding
const deleteWedding = async (req, res) => {
  try {
    const wedding = await Wedding.findByIdAndDelete(req.params.id);
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json({ message: 'Wedding deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWedding,
  getAllWeddings,
  getWeddingById,
  updateWedding,
  deleteWedding
};
