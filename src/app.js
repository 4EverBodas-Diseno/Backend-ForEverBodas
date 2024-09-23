// src/app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' }); // Cargar variables de entorno desde .env y especificar la ruta

// Verificar si la variable de entorno se está cargando correctamente
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();

// Middleware
app.use(express.json());

// Conectar a MongoDB usando la URI de la variable de entorno
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('Error: MONGO_URI no está definido en el archivo .env');
} else {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Conectado a MongoDB');
        })
        .catch((error) => {
            console.error('Error conectando a MongoDB:', error);
        });
}

// Rutas
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

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Inicializar el servidor en el puerto especificado en la variable de entorno o el puerto 5000 por defecto
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;
