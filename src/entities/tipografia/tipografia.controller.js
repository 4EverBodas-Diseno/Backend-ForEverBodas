// src/controllers/tipografia.controller.js
const Tipografia = require('./tipografia.model');

// Crear una nueva tipografía
exports.createTipografia = async (req, res) => {
  try {
    const { TipografiaID, Front, FrontURL } = req.body;

    // Crear un nuevo documento de Tipografia en la base de datos
    const newTipografia = new Tipografia({ TipografiaID, Front, FrontURL });
    await newTipografia.save();

    res.status(201).json({ message: 'Tipografía creada con éxito', data: newTipografia });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tipografía', error: error.message });
  }
};

// Obtener todas las tipografías
exports.getAllTipografias = async (req, res) => {
  try {
    const tipografias = await Tipografia.find();
    res.status(200).json({ data: tipografias });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tipografías', error: error.message });
  }
};

// Obtener una tipografía por TipografiaID
exports.getTipografiaById = async (req, res) => {
  try {
    const { TipografiaID } = req.params;
    const tipografia = await Tipografia.findOne({ TipografiaID });

    if (!tipografia) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ data: tipografia });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la tipografía', error: error.message });
  }
};

// Actualizar una tipografía
exports.updateTipografia = async (req, res) => {
  try {
    const { TipografiaID } = req.params;
    const { Front, FrontURL } = req.body;

    const updatedTipografia = await Tipografia.findOneAndUpdate(
      { TipografiaID },
      { Front, FrontURL },
      { new: true }
    );

    if (!updatedTipografia) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ message: 'Tipografía actualizada con éxito', data: updatedTipografia });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tipografía', error: error.message });
  }
};

// Eliminar una tipografía
exports.deleteTipografia = async (req, res) => {
  try {
    const { TipografiaID } = req.params;
    const deletedTipografia = await Tipografia.findOneAndDelete({ TipografiaID });

    if (!deletedTipografia) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ message: 'Tipografía eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tipografía', error: error.message });
  }
};
