// src/entities/webpage/webpage.controller.js
const WebPage = require('./webpage.model');

// Crear una nueva WebPage
const createWebPage = async (req, res) => {
  try {
    // Validar si ya existe una WebPage asociada a la misma WeddingID
    const existingWebPage = await WebPage.findOne({ WeddingID: req.body.WeddingID });
    if (existingWebPage) {
      return res.status(400).json({ message: 'Ya existe una WebPage asociada a esta boda.' });
    }

    // Si no existe, crear la nueva WebPage
    const webpage = new WebPage(req.body);
    await webpage.save();
    res.status(201).json(webpage);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la WebPage: ' + error.message });
  }
};

// Obtener todas las WebPages
const getAllWebPages = async (req, res) => {
  try {
    const webpages = await WebPage.find();
    res.status(200).json(webpages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las WebPages: ' + error.message });
  }
};

// Obtener una WebPage por WebPageID
const getWebPageById = async (req, res) => {
  try {
    const webpage = await WebPage.findOne({ WebPageID: req.params.id });
    if (!webpage) return res.status(404).json({ message: 'WebPage no encontrada.' });
    res.status(200).json(webpage);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la WebPage: ' + error.message });
  }
};

// Obtener una WebPage por el ID de la boda
const getWebPageByWeddingID = async (req, res) => {
  try {
    const webpage = await WebPage.findOne({ WeddingID: req.params.id });
    if (!webpage) return res.status(404).json({ message: 'WebPage no encontrada.' + error.message });
    res.status(200).json(webpage);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la WebPage por WeddingID: ' + error.message });
  }
};

// Obtener todos los colores
const getAllColors = async (req, res) => {
  try {
    const primaryColors = await WebPage.distinct('Styles.primaryColor');
    const secondaryColors = await WebPage.distinct('Styles.secondaryColor');
    const allColors = [...new Set([...primaryColors, ...secondaryColors])]; // Eliminar duplicados
    res.status(200).json(allColors);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los colores: ' + error.message });
  }
};

// Obtener todas las tipografías
const getAllTypographies = async (req, res) => {
  try {
    const typographies = await WebPage.distinct('Styles.Typography');
    res.status(200).json(typographies);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tipografías: ' + error.message });
  }
};

// Actualizar una WebPage
const updateWebPage = async (req, res) => {
  try {
    const webpage = await WebPage.findOneAndUpdate({ WebPageID: req.params.id }, req.body, { new: true });
    if (!webpage) return res.status(404).json({ message: 'WebPage no encontrada.' });
    res.status(200).json(webpage);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la WebPage: ' + error.message });
  }
};

// Eliminar una WebPage
const deleteWebPage = async (req, res) => {
  try {
    const webpage = await WebPage.findOneAndDelete({ WebPageID: req.params.id });
    if (!webpage) return res.status(404).json({ message: 'WebPage no encontrada.' });
    res.status(200).json({ message: 'WebPage eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la WebPage: ' + error.message });
  }
};

module.exports = {
  createWebPage,
  getAllWebPages,
  getWebPageById,
  updateWebPage,
  deleteWebPage,
  getWebPageByWeddingID,
  getAllColors,
  getAllTypographies,
};
