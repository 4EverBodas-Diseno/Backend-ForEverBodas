// src/entities/guest/guest.controller.test.js
const Guest = require('./guest.model');

// Crear un nuevo Guest
const createGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json(guest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Guests
const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find().populate('WebPageID').populate('UserID');
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un Guest por ID
const getGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id).populate('WebPageID').populate('UserID');
    if (!guest) return res.status(404).json({ message: 'Guest not found' });
    res.status(200).json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un Guest
const updateGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!guest) return res.status(404).json({ message: 'Guest not found' });
    res.status(200).json(guest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un Guest
const deleteGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndDelete(req.params.id);
    if (!guest) return res.status(404).json({ message: 'Guest not found' });
    res.status(200).json({ message: 'Guest deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  deleteGuest
};
