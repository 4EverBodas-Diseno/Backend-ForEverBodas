// src/app.js
const express = require('express');
const userRoutes = require('./entities/user/user.routes');
// const productRoutes = require('./entities/product/product.routes');
const profileRoutes = require('./entities/profile/profile.routes');
const wellwishRoutes = require('./entities/wellWish/wellwish.routes');
const guestRoutes = require('./entities/guest/guest.routes');
const weddingRoutes = require('./entities/wedding/wedding.routes');
const templateRoutes = require('./entities/template/template.routes');
const webpageRoutes = require('./entities/webpage/webpage.routes');
const summaryRoutes = require('./entities/summary/summary.routes');
const notificationRoutes = require('./entities/notification/notification.routes');
const asistenciaRoutes = require('./entities/asistencia/asistencia.routes'); // Agregado

const { swaggerUi, specs } = require('./swagger');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/wellwishes', wellwishRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/weddings', weddingRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/webpages', webpageRoutes);
app.use('/api/summaries', summaryRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/asistencias', asistenciaRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
