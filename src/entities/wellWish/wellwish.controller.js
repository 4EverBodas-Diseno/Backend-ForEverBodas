// src/entities/wellwish/wellwish.controller.js
const WellWish = require('./wellwish.model');

// Crear un nuevo WellWish
const createWellWish = async (req, res) => {
  try {
    const wellWish = new WellWish(req.body);
    await wellWish.save();
    res.status(201).json(wellWish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los WellWishes
const getAllWellWishes = async (req, res) => {
  try {
    const wellWishes = await WellWish.find().populate('WeddingID').populate('GuestID'); // Cambiado a WeddingID
    res.status(200).json(wellWishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un WellWish por WellWishID
const getWellWishById = async (req, res) => {
  try {
    const wellWish = await WellWish.findOne({ WellWishID: req.params.id }) // Cambiado a WellWishID
      .populate('WeddingID') // Cambiado a WeddingID
      .populate('GuestID');
    if (!wellWish) return res.status(404).json({ message: 'WellWish not found' });
    res.status(200).json(wellWish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un WellWish
const updateWellWish = async (req, res) => {
  try {
    const wellWish = await WellWish.findOneAndUpdate(
      { WellWishID: req.params.id }, // Cambiado a WellWishID
      req.body,
      { new: true }
    );
    if (!wellWish) return res.status(404).json({ message: 'WellWish not found' });
    res.status(200).json(wellWish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un WellWish
const deleteWellWish = async (req, res) => {
  try {
    const wellWish = await WellWish.findOneAndDelete({ WellWishID: req.params.id }); // Cambiado a WellWishID
    if (!wellWish) return res.status(404).json({ message: 'WellWish not found' });
    res.status(200).json({ message: 'WellWish deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWellWish,
  getAllWellWishes,
  getWellWishById,
  updateWellWish,
  deleteWellWish
};
