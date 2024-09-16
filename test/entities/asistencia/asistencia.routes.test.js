const request = require('supertest');
const app = require('../../../src/app'); // Asegúrate de importar tu servidor Express
const mongoose = require('mongoose'); // Asegúrate de que mongoose esté disponible

describe('Asistencia Routes', () => {
  afterAll(async () => {
    await mongoose.connection.close(); // Cierra la conexión de la base de datos después de las pruebas
  });

  it('should create a new asistencia', async () => {
    const newAsistencia = {
      GuestID: '60b8bfcf2f8fb814b56fa182',
      EventID: '60b8bfcf2f8fb814b56fa183',
      Confirmacion: true,
      Cant_Invitado: 3,
    };

    const response = await request(app).post('/api/asistencias').send(newAsistencia);

    if (response.status === 400) {
      console.error(response.body); // Esto imprimirá el error devuelto por el servidor si ocurre una validación fallida
    }

    expect(response.status).toBe(201);
    expect(response.body.GuestID).toBe(newAsistencia.GuestID);
  }, 10000); // Aumenta el timeout a 10 segundos

  it('should get all asistencias', async () => {
    const response = await request(app).get('/api/asistencias');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  }, 10000); // Aumenta el timeout a 10 segundos
});
