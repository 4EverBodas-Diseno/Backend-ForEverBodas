// src/app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./entities/user/user.routes');
const profileRoutes = require('./entities/profile/profile.routes');
const wellwishRoutes = require('./entities/wellWish/wellwish.routes');
const colorRoutes = require('./entities/color/color.routes');
const guestRoutes = require('./entities/guest/guest.routes');
const tipografiaRoutes = require('./entities/tipografia/tipografia.routes');
const weddingRoutes = require('./entities/wedding/wedding.routes');
const webpageRoutes = require('./entities/webpage/webpage.routes');
const notificationRoutes = require('./entities/notification/notification.routes');
const whatsappRoutes = require('./entities/whatsapp/whatsapp.routes'); // Importa la ruta de WhatsApp

const { swaggerUi, specs } = require('./swagger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para interpretar el body en formato URL encoded, necesario para Twilio

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tipografias', tipografiaRoutes);
app.use('/api/colors', colorRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/wellwishes', wellwishRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/weddings', weddingRoutes);
app.use('/api/webpages', webpageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/whatsapp', whatsappRoutes); // Ruta para WhatsApp

// Documentación de la API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
