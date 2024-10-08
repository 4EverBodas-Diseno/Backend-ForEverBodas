// src/entities/profile/profile.controller.js
const Profile = require('./profile.model');

const createProfile = async (req, res) => {
  try {
    console.log(req.body);  // Verifica lo que está en el cuerpo de la solicitud
    const { UserID, ...rest } = req.body;
    if (!UserID) {
      return res.status(400).json({ message: 'UserID is required' });
    }
    const profile = new Profile({ UserID, ...rest });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los perfiles
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un perfil por profileID
const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({ profileID: req.params.profileID });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un perfil por UserID
const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ UserID: req.params.UserID }); // Buscar por UserID

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the profile' });
  }
};

// Actualizar un perfil
const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { profileID: req.params.id },
      req.body,
      { new: true }
    );
    if (!profile) return res.status(404).json({ message: error.message });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un perfil parcialmente
const updateProfilePartial = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { profileID: req.params.id },
      req.body,
      { new: true }
    );
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un perfil
const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ profileID: req.params.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json({ message: 'Profile deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  getProfileByUserId,  // Nueva ruta para buscar por UserID
  updateProfile,
  deleteProfile,
  updateProfilePartial
};