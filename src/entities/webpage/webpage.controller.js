// src/entities/webpage/webpage.controller.js
const WebPage = require('./webpage.model');

// Crear una nueva WebPage
const createWebPage = async (req, res) => {
  try {
    const webpage = new WebPage(req.body);
    await webpage.save();
    res.status(201).json(webpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las WebPages
const getAllWebPages = async (req, res) => {
  try {
    const webpages = await WebPage.find().populate('TemplateID').populate('EventID');
    res.status(200).json(webpages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una WebPage por ID
const getWebPageById = async (req, res) => {
  try {
    const webpage = await WebPage.findById(req.params.id).populate('TemplateID').populate('EventID');
    if (!webpage) return res.status(404).json({ message: 'WebPage not found' });
    res.status(200).json(webpage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una WebPage
const updateWebPage = async (req, res) => {
  try {
    const webpage = await WebPage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!webpage) return res.status(404).json({ message: 'WebPage not found' });
    res.status(200).json(webpage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una WebPage
const deleteWebPage = async (req, res) => {
  try {
    const webpage = await WebPage.findByIdAndDelete(req.params.id);
    if (!webpage) return res.status(404).json({ message: 'WebPage not found' });
    res.status(200).json({ message: 'WebPage deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWebPage,
  getAllWebPages,
  getWebPageById,
  updateWebPage,
  deleteWebPage
};
