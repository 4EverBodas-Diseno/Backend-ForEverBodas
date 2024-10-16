// src/entities/whatsapp/whatsapp.routes.js
const express = require('express');
const twilio = require('twilio');
const router = express.Router();

// Configura las credenciales de Twilio
const accountSid = 'TU_ACCOUNT_SID';
const authToken = 'TU_AUTH_TOKEN';
const client = new twilio(accountSid, authToken);

// Endpoint para manejar mensajes entrantes de WhatsApp (ya configurado)
router.post('/inbound', (req, res) => {
    const mensajeEntrante = req.body.Body; // Mensaje recibido
    const numeroDeOrigen = req.body.From;  // Número del remitente

    console.log(`Mensaje recibido de ${numeroDeOrigen}: ${mensajeEntrante}`);

    // Respuesta automática personalizada
    const respuesta = 'Gracias por tu mensaje. ¿Cómo puedo ayudarte?';

    // Enviar respuesta en formato XML para Twilio
    res.set('Content-Type', 'text/xml');
    res.send(`
    <Response>
      <Message>${respuesta}</Message>
    </Response>
  `);
});

// Nuevo endpoint para enviar un mensaje de confirmación
router.post('/send', (req, res) => {
    const { numero } = req.body; // Recibe el número de WhatsApp al que enviar el mensaje
    const mensaje = 'PONER JESUS LINK DE CONFIRMACIÓN: http://tulinkdeconfirmacion.com';

    client.messages
        .create({
            body: mensaje,
            from: 'whatsapp:+14155238886', // Número de Twilio Sandbox para WhatsApp
            to: `whatsapp:${numero}`
        })
        .then(message => res.status(200).json({ message: 'Mensaje enviado', sid: message.sid }))
        .catch(error => res.status(500).json({ error: 'Error al enviar el mensaje', details: error }));
});

module.exports = router;
