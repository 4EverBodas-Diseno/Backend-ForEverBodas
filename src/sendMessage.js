// src/sendMessage.js
require('dotenv').config();
const twilio = require('twilio');

// Configura las credenciales de Twilio desde variables de entorno
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Define el mensaje y el número de destino
const numeroDestino = 'whatsapp:+51987654321'; // Reemplaza con el número al que quieres enviar el mensaje
const mensaje = 'Este es tu link de confirmación: http://tulinkdeconfirmacion.com';

// Enviar el mensaje
client.messages
    .create({
        body: mensaje,
        from: 'whatsapp:+14155238886', // Número de Twilio Sandbox para WhatsApp
        to: numeroDestino
    })
    .then(message => console.log(`Mensaje enviado con SID: ${message.sid}`))
    .catch(error => console.error('Error al enviar mensaje:', error));
