// src/entities/guest/guest.controller.js
const Guest = require('./guest.model');

// Crear un nuevo Guest
const createGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();

    // Obtener el total de invitados y confirmados
    const totalInvitados = await Guest.countDocuments();
    const totalConfirmados = await Guest.countDocuments({ Confirmado: true });

    res.status(201).json({
      guest,
      totalInvitados,
      totalConfirmados,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Guests
const getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find().populate('WebPageID').populate('UserID');

    // Obtener el total de invitados y confirmados
    const totalInvitados = await Guest.countDocuments();
    const totalConfirmados = await Guest.countDocuments({ Confirmado: true });

    res.status(200).json({
      guests,
      totalInvitados,
      totalConfirmados,
    });
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
    const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGuest) return res.status(404).json({ message: 'Guest not found' });

    // Recalcular totales solo si se cambió el estado de confirmación
    if (req.body.Confirmado !== undefined) {
      const totalConfirmados = await Guest.countDocuments({ Confirmado: true });
      res.status(200).json({
        updatedGuest,
        totalConfirmados,
      });
    } else {
      res.status(200).json(updatedGuest);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un Guest
const deleteGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndDelete(req.params.id);
    if (!guest) return res.status(404).json({ message: 'Guest not found' });

    // Obtener el total de invitados y confirmados después de eliminar
    const totalInvitados = await Guest.countDocuments();
    const totalConfirmados = await Guest.countDocuments({ Confirmado: true });

    res.status(200).json({
      message: 'Guest deleted',
      totalInvitados,
      totalConfirmados,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
};
