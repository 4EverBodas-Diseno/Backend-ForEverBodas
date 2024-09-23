const request = require('supertest');
const express = require('express');
const guestRoutes = require('../../../src/entities/guest/guest.routes');
const Guest = require('../../../src/entities/guest/guest.model');

// Mock de Mongoose
jest.mock('../../../src/entities/guest/guest.model');

const app = express();
app.use(express.json());
app.use('/guests', guestRoutes);

describe('Guest Routes', () => {
  describe('POST /guests', () => {
    it('debería crear un nuevo invitado', async () => {
      const newGuest = {
        GuestID: '123',
        WebPageID: '1234567890',
        UserID: '1234567890',
        Nombre: 'John Doe',
        Correo: 'john@example.com'
      };

      Guest.prototype.save = jest.fn().mockResolvedValue(newGuest);

      const res = await request(app).post('/guests').send(newGuest);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(newGuest);
    });

    it('debería devolver un error 400 si falla la creación', async () => {
      const newGuest = {
        GuestID: '123',
        Nombre: 'John Doe'
        // Falta WebPageID y UserID
      };

      Guest.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el invitado'));

      const res = await request(app).post('/guests').send(newGuest);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /guests', () => {
    it('debería obtener todos los invitados', async () => {
      const guests = [{ GuestID: '123', Nombre: 'John Doe', Correo: 'john@example.com' }];

      Guest.find = jest.fn().mockResolvedValue(guests);

      const res = await request(app).get('/guests');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(guests);
    });
  });

  describe('GET /guests/:id', () => {
    it('debería obtener un invitado por ID', async () => {
      const guest = { GuestID: '123', Nombre: 'John Doe', Correo: 'john@example.com' };

      Guest.findById = jest.fn().mockResolvedValue(guest);

      const res = await request(app).get('/guests/123');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(guest);
    });

    it('debería devolver un error 404 si el invitado no es encontrado', async () => {
      Guest.findById = jest.fn().mockResolvedValue(null);

      const res = await request(app).get('/guests/123');

      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toBe('Guest not found');
    });
  });

  describe('PUT /guests/:id', () => {
    it('debería actualizar un invitado', async () => {
      const updatedGuest = { GuestID: '123', Nombre: 'John Doe Updated' };

      Guest.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedGuest);

      const res = await request(app).put('/guests/123').send({ Nombre: 'John Doe Updated' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(updatedGuest);
    });
  });

  describe('DELETE /guests/:id', () => {
    it('debería eliminar un invitado', async () => {
      Guest.findByIdAndDelete = jest.fn().mockResolvedValue({ GuestID: '123' });

      const res = await request(app).delete('/guests/123');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Guest deleted');
    });
  });
});
