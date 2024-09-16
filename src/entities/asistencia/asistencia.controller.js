const Asistencia = require('./asistencia.model');

// Crear una nueva Asistencia
const createAsistencia = async (req, res) => {
  try {
    const asistencia = new Asistencia(req.body);
    await asistencia.save();
    res.status(201).json(asistencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las Asistencias
const getAllAsistencias = async (req, res) => {
  try {
    const asistencias = await Asistencia.find().populate('GuestID EventID');
    res.status(200).json(asistencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una Asistencia por ID
const getAsistenciaById = async (req, res) => {
  try {
    const asistencia = await Asistencia.findById(req.params.id).populate('GuestID EventID');
    if (!asistencia) return res.status(404).json({ message: 'Asistencia not found' });
    res.status(200).json(asistencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una Asistencia
const updateAsistencia = async (req, res) => {
  try {
    const asistencia = await Asistencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!asistencia) return res.status(404).json({ message: 'Asistencia not found' });
    res.status(200).json(asistencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una Asistencia
const deleteAsistencia = async (req, res) => {
  try {
    const asistencia = await Asistencia.findByIdAndDelete(req.params.id);
    if (!asistencia) return res.status(404).json({ message: 'Asistencia not found' });
    res.status(200).json({ message: 'Asistencia deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAsistencia,
  getAllAsistencias,
  getAsistenciaById,
  updateAsistencia,
  deleteAsistencia
};
