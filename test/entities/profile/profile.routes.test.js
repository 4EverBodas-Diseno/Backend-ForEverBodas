const request = require('supertest');
const express = require('express');
const profileRoutes = require('../../../src/entities/profile/profile.routes');
const Profile = require('../../../src/entities/profile/profile.model');

// Mock de Mongoose
jest.mock('../../../src/entities/profile/profile.model');

const app = express();
app.use(express.json());
app.use('/profiles', profileRoutes);

describe('Profile Routes', () => {
  describe('POST /profiles', () => {
    it('debería crear un nuevo perfil', async () => {
      const newProfile = {
        profileID: 'profile123',
        userID: '1234567890',
        Telefono: '555-1234',
        Direccion: '123 Main St',
        FechaNacimiento: '1990-01-01',
        NombrePareja: 'Jane Doe'
      };

      Profile.prototype.save = jest.fn().mockResolvedValue(newProfile);

      const res = await request(app).post('/profiles').send(newProfile);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(newProfile);
    });

    it('debería devolver un error 400 si falla la creación', async () => {
      const newProfile = {
        profileID: 'profile123',
        // Falta el campo userID
      };

      Profile.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el perfil'));

      const res = await request(app).post('/profiles').send(newProfile);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /profiles', () => {
    it('debería obtener todos los perfiles', async () => {
      const profiles = [{ profileID: 'profile123', userID: '1234567890', Telefono: '555-1234' }];

      Profile.find = jest.fn().mockResolvedValue(profiles);

      const res = await request(app).get('/profiles');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(profiles);
    });
  });

  describe('GET /profiles/:id', () => {
    it('debería obtener un perfil por ID', async () => {
      const profile = { profileID: 'profile123', userID: '1234567890', Telefono: '555-1234' };

      Profile.findById = jest.fn().mockResolvedValue(profile);

      const res = await request(app).get('/profiles/profile123');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(profile);
    });

    it('debería devolver un error 404 si el perfil no es encontrado', async () => {
      Profile.findById = jest.fn().mockResolvedValue(null);

      const res = await request(app).get('/profiles/profile123');

      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toBe('Profile not found');
    });
  });

  describe('PUT /profiles/:id', () => {
    it('debería actualizar un perfil', async () => {
      const updatedProfile = { profileID: 'profile123', userID: '1234567890', Telefono: '555-1234' };

      Profile.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedProfile);

      const res = await request(app).put('/profiles/profile123').send({ Telefono: '555-1234' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(updatedProfile);
    });
  });

  describe('DELETE /profiles/:id', () => {
    it('debería eliminar un perfil', async () => {
      Profile.findByIdAndDelete = jest.fn().mockResolvedValue({ profileID: 'profile123' });

      const res = await request(app).delete('/profiles/profile123');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Profile deleted');
    });
  });
});
