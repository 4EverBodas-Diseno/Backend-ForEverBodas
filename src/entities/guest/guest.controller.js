// src/entities/guest/guest.controller.js
const Guest = require('./guest.model');

// Crear un nuevo Guest
const createGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();

    // Calcular totalInvitados y totalConfirmados
    const totalInvitados = await Guest.countDocuments();
    const totalConfirmados = await Guest.countDocuments({ confirmed: true });

    res.status(201).json({
      guest,
      totalInvitados,
      totalConfirmados,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los Guests agrupados por UserID
const getAllGuests = async (req, res) => {
  try {
    // Agrupar los guests por UserID
    const guests = await Guest.aggregate([
      {
        $group: {
          _id: "$UserID", // Agrupar por UserID (cadena de texto)
          guests: { $push: "$$ROOT" }, // Agrupar los datos de invitados por UserID
          totalInvitados: { $sum: 1 }, // Contar el total de invitados por UserID
          totalConfirmados: {
            $sum: { $cond: [{ $eq: ["$Confirmado", true] }, 1, 0] }, // Contar confirmados por UserID
          },
        },
      },
    ]);

    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Obtener un Guest por GuestID
const getGuestById = async (req, res) => {
  try {
    const guest = await Guest.findOne({ GuestID: req.params.GuestID }); // Busca por GuestID
    if (!guest) return res.status(404).json({ message: 'Guest not found' });

    res.status(200).json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un Guest
const updateGuest = async (req, res) => {
  try {
    const updatedGuest = await Guest.findOneAndUpdate({ GuestID: req.params.GuestID }, req.body, { new: true }); // Busca por GuestID
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

// Obtener todos los Guests relacionados a un UserID
const getGuestsByUserID = async (req, res) => {
  const { UserID } = req.params;
  try {
    const guests = await Guest.find({ UserID });
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los Guests: ' + error.message });
  }
};



// Eliminar un Guest
const deleteGuest = async (req, res) => {
  try {
    const guest = await Guest.findOneAndDelete({ GuestID: req.params.GuestID }); // Busca por GuestID
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
  getGuestsByUserID,
  deleteGuest,
};
