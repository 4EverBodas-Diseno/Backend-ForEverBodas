// src/app.js
const express = require('express');
const cors = require('cors'); // Importa CORS
const userRoutes = require('./entities/user/user.routes');
const profileRoutes = require('./entities/profile/profile.routes'); // Agregado
const wellwishRoutes = require('./entities/wellWish/wellwish.routes'); // Agregado
const colorRoutes = require('./entities/color/color.routes'); // Agregado
const guestRoutes = require('./entities/guest/guest.routes'); // Agregado
const tipografiaRoutes = require('./entities/tipografia/tipografia.routes'); // Agregado
const weddingRoutes = require('./entities/wedding/wedding.routes'); // Agregado
const webpageRoutes = require('./entities/webpage/webpage.routes'); // Agregado
const notificationRoutes = require('./entities/notification/notification.routes'); // Agregado

const { swaggerUi, specs } = require('./swagger');

const app = express();

// Middlewares
app.use(cors()); // Configura CORS para permitir solicitudes desde cualquier origen
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tipografias', tipografiaRoutes); // Agregado
app.use('/api/colors', colorRoutes);
app.use('/api/profiles', profileRoutes); // Agregado
app.use('/api/wellwishes', wellwishRoutes); // Agregado
app.use('/api/guests', guestRoutes); // Agregado
app.use('/api/weddings', weddingRoutes); // Agregado
app.use('/api/webpages', webpageRoutes); // Agregado
app.use('/api/notifications', notificationRoutes); // Agregado


//endpoint para la mensajeria por whatsapp por el api de twilio
/*app.post('/api/sendwhatsapp', (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      body: req.body.message,
      to: 'whatsapp:+573204269290'
    })
    .then(message => res.send(message.sid));
});*/

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
