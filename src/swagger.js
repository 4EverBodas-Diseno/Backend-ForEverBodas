// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definir la configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API 4EverBodas',
      version: '1.0.0',
      description: 'Documentación de la API usando Swagger, mostrando los diferentes endpoints y sus respectivos parámetros y respuestas'
    },
    servers: [
      {
        url: 'http://localhost:5000/api',  // Asegúrate de que esta URL sea correcta
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./src/entities/user/user.routes.test.js',
        './src/entities/profile/profile.routes.test.js', // Agregado para la entidad Profile
        './src/entities/guest/guest.routes.test.js', // Agregado para la entidad Guest
        './src/entities/summary/summary.routes.test.js', // Agregado para la entidad Summary
        './src/entities/asistencia/asistencia.routes.test.js',
        './src/entities/notification/notification.routes.test.js',
        './src/entities/template/template.routes.test.js',
        './src/entities/webpage/webpage.routes.test.js',
        './src/entities/wedding/wedding.routes.test.js',
        './src/entities/wellwish/wellwish.routes.test.js'

  ] // Apunta al archivo correcto de las rutas
};

// Generar especificaciones de Swagger
const specs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  specs
};
