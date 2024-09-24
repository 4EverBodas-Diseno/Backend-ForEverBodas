// src/controllers/color.controller.js
const Color = require('../entities/color/color.model');

// Crear un nuevo color
exports.createColor = async (req, res) => {
  try {
    const { ColorID, colorPrimario, colorSecundario, colorLetra } = req.body;

    // Crear un nuevo documento de Color en la base de datos
    const newColor = new Color({ ColorID, colorPrimario, colorSecundario, colorLetra });
    await newColor.save();

    res.status(201).json({ message: 'Color creado con éxito', data: newColor });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el color', error: error.message });
  }
};

// Obtener todos los colores
exports.getAllColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json({ data: colors });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los colores', error: error.message });
  }
};

// Obtener un color por ID
exports.getColorById = async (req, res) => {
  try {
    const { id } = req.params;
    const color = await Color.findOne({ ColorID: id });

    if (!color) {
      return res.status(404).json({ message: 'Color no encontrado' });
    }

    res.status(200).json({ data: color });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el color', error: error.message });
  }
};

// Actualizar un color
exports.updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { colorPrimario, colorSecundario, colorLetra } = req.body;

    const updatedColor = await Color.findOneAndUpdate(
      { ColorID: id },
      { colorPrimario, colorSecundario, colorLetra },
      { new: true }
    );

    if (!updatedColor) {
      return res.status(404).json({ message: 'Color no encontrado' });
    }

    res.status(200).json({ message: 'Color actualizado con éxito', data: updatedColor });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el color', error: error.message });
  }
};

// Eliminar un color
exports.deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedColor = await Color.findOneAndDelete({ ColorID: id });

    if (!deletedColor) {
      return res.status(404).json({ message: 'Color no encontrado' });
    }

    res.status(200).json({ message: 'Color eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el color', error: error.message });
  }
};
