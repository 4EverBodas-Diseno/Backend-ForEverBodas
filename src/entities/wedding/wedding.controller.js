const Wedding = require('./wedding.model');

// Crear un nuevo Wedding
const createWedding = async (req, res) => {
  try {
    const { WeddingID, UserID } = req.body; // Cambiado a WeddingID

    // Validar si ya existe una boda asociada al UserID
    const existingWedding = await Wedding.findOne({ UserID });
    if (existingWedding) {
      return res.status(400).json({ message: 'Este usuario ya tiene una boda asociada' });
    }

    // Si no existe, crear una nueva boda
    const wedding = new Wedding(req.body);
    await wedding.save();
    res.status(201).json(wedding);
  } catch (error) {
    console.error('Error creating wedding:', error); // Registro del error
    res.status(400).json({ message: 'Error creating wedding' });
  }
};

// Obtener todos los Weddings
const getAllWeddings = async (req, res) => {
  try {
    const weddings = await Wedding.find();
    res.status(200).json(weddings);
  } catch (error) {
    console.error('Error fetching weddings:', error);
    res.status(500).json({ message: 'An error occurred while fetching weddings' });
  }
};

// Obtener un Wedding por WeddingID
const getWeddingById = async (req, res) => {
  try {
    const wedding = await Wedding.findOne({ WeddingID: req.params.WeddingID }).populate('UserID'); // Cambiado a WeddingID
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
    const wedding = await Wedding.findOne({ UserID: req.params.UserID }).populate('UserID'); // Consistencia en el nombre
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
    const wedding = await Wedding.findOneAndUpdate({ WeddingID: req.params.WeddingID }, req.body, { new: true }); // Cambiado a WeddingID
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
    const wedding = await Wedding.findOneAndUpdate({ WeddingID: req.params.WeddingID }, { $set: req.body }, { new: true }); // Cambiado a WeddingID
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
    const wedding = await Wedding.findOneAndDelete({ WeddingID: req.params.WeddingID }); // Cambiado a WeddingID
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
  getWeddingByUserID,
};
