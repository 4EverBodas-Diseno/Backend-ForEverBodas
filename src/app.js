// src/app.js
const express = require('express');
const userRoutes = require('./entities/user/user.routes');
//const productRoutes = require('./entities/product/product.routes');
const profileRoutes = require('./entities/profile/profile.routes'); // Agregado
const wellwishRoutes = require('./entities/wellWish/wellwish.routes'); // Agregado
const guestRoutes = require('./entities/guest/guest.routes'); // Agregado
const weddingRoutes = require('./entities/wedding/wedding.routes'); // Agregado
const templateRoutes = require('./entities/template/template.routes'); // Agregado
const webpageRoutes = require('./entities/webpage/webpage.routes'); // Agregado
const summaryRoutes = require('./entities/summary/summary.routes'); // Agregado
const notificationRoutes = require('./entities/notification/notification.routes'); // Agregado


const { swaggerUi, specs } = require('./swagger');



const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
//app.use('/api/products', productRoutes);
app.use('/api/profiles', profileRoutes); // Agregado
app.use('/api/wellwishes', wellwishRoutes); // Agregado
app.use('/api/guests', guestRoutes); // Agregado
app.use('/api/weddings', weddingRoutes); // Agregado
app.use('/api/templates', templateRoutes); // Agregado
app.use('/api/webpages', webpageRoutes); // Agregado
app.use('/api/summaries', summaryRoutes); // Agregado
app.use('/api/notifications', notificationRoutes); // Agregado


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


module.exports = app;