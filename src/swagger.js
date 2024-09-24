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
        url: 'https://backend-foreverbodas.onrender.com/api',  
        description: 'Servidor en producción'
      }
    ]
  },
  apis: ['./src/entities/user/user.routes.js',
        './src/entities/profile/profile.routes.js', 
        './src/entities/guest/guest.routes.js', 
        './src/entities/asistencia/asistencia.routes.js',
        './src/entities/notification/notification.routes.js',
        './src/entities/webpage/webpage.routes.js',
        './src/entities/wedding/wedding.routes.js',
        './src/entities/wellwish/wellwish.routes.js',
        './src/entities/login/login.routes.js'
        

  ] // Apunta al archivo correcto de las rutas
};

// Generar especificaciones de Swagger
const specs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  specs
};
