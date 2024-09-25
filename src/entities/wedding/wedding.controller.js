// src/entities/wedding/wedding.controller.js
const Wedding = require('./wedding.model');

// Crear un nuevo Wedding
const createWedding = async (req, res) => {
  try {
    const wedding = new Wedding(req.body);
    await wedding.save();
    res.status(201).json(wedding);
  } catch (error) {
    console.error(error); // Registro del error
    res.status(400).json({ message: 'Error creating wedding' });
  }
};

// Obtener todos los Weddings
const getAllWeddings = async (req, res) => {
  try {
    const weddings = await Wedding.find().populate('userID'); // Verifica que 'userID' sea correcto
    res.status(200).json(weddings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching weddings' });
  }
};

// Obtener un Wedding por ID
const getWeddingById = async (req, res) => {
  try {
    const wedding = await Wedding.findById(req.params.id).populate('userID'); // Verifica que 'userID' sea correcto
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the wedding' });
  }
};

// Obtener un Wedding por el ID del usuario
const getWeddingByUserID = async (req, res) => {
  try {
    const wedding = await Wedding.findOne({ userID: req.params.id }).populate('userID'); // Consistencia en el nombre
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the wedding' });
  }
};

// Actualizar un Wedding (PUT - actualización completa)
const updateWedding = async (req, res) => {
  try {
    const wedding = await Wedding.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating wedding' });
  }
};

// Actualizar parcialmente un Wedding (PATCH - actualización parcial)
const updateWeddingPartial = async (req, res) => {
  try {
    const wedding = await Wedding.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json(wedding);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating wedding' });
  }
};

// Eliminar un Wedding
const deleteWedding = async (req, res) => {
  try {
    const wedding = await Wedding.findByIdAndDelete(req.params.id);
    if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
    res.status(200).json({ message: 'Wedding deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the wedding' });
  }
};

module.exports = {
  createWedding,
  getAllWeddings,
  getWeddingById,
  updateWedding,
  updateWeddingPartial,
  deleteWedding,
  getWeddingByUserID
};
