// src/entities/notification/notification.model.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  NotificationID: { type: String, required: true, unique: true },
  Tipo: { type: String, required: true },
  Mensaje: { type: String, required: true },
  FechaEnvio: { type: Date, default: Date.now },
  EventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Wedding', required: true }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
