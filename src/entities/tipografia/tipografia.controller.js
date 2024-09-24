// src/controllers/typography.controller.js
const Typography = require('../entities/typography/typography.model');

// Crear una nueva tipografía
exports.createTypography = async (req, res) => {
  try {
    const { TypographyID, Nombre, URL } = req.body;

    // Crear un nuevo documento de Typography en la base de datos
    const newTypography = new Typography({ TypographyID, Nombre, URL });
    await newTypography.save();

    res.status(201).json({ message: 'Tipografía creada con éxito', data: newTypography });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tipografía', error: error.message });
  }
};

// Obtener todas las tipografías
exports.getAllTypographies = async (req, res) => {
  try {
    const typographies = await Typography.find();
    res.status(200).json({ data: typographies });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tipografías', error: error.message });
  }
};

// Obtener una tipografía por ID
exports.getTypographyById = async (req, res) => {
  try {
    const { id } = req.params;
    const typography = await Typography.findOne({ TypographyID: id });

    if (!typography) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ data: typography });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la tipografía', error: error.message });
  }
};

// Actualizar una tipografía
exports.updateTypography = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre, URL } = req.body;

    const updatedTypography = await Typography.findOneAndUpdate(
      { TypographyID: id },
      { Nombre, URL },
      { new: true }
    );

    if (!updatedTypography) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ message: 'Tipografía actualizada con éxito', data: updatedTypography });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tipografía', error: error.message });
  }
};

// Eliminar una tipografía
exports.deleteTypography = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTypography = await Typography.findOneAndDelete({ TypographyID: id });

    if (!deletedTypography) {
      return res.status(404).json({ message: 'Tipografía no encontrada' });
    }

    res.status(200).json({ message: 'Tipografía eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tipografía', error: error.message });
  }
};
