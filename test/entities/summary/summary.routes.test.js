const request = require('supertest');
const express = require('express');
const summaryRoutes = require('../../../src/entities/summary/summary.routes');
const Summary = require('../../../src/entities/summary/summary.model');

// Mock de Mongoose
jest.mock('../../../src/entities/summary/summary.model');

const app = express();
app.use(express.json());
app.use('/summaries', summaryRoutes);

describe('Summary Routes', () => {
  describe('POST /summaries', () => {
    it('debería crear un nuevo resumen', async () => {
      const newSummary = {
        SummaryID: 'summary123',
        TotalInvitados: 100,
        TotalConfirmado: 80,
        EventID: 'event123'
      };

      Summary.prototype.save = jest.fn().mockResolvedValue(newSummary);

      const res = await request(app).post('/summaries').send(newSummary);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(newSummary);
    });

    it('debería devolver un error 400 si falla la creación', async () => {
      const newSummary = {
        SummaryID: 'summary123',
        // Falta TotalInvitados y EventID
      };

      Summary.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el resumen'));

      const res = await request(app).post('/summaries').send(newSummary);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /summaries', () => {
    it('debería obtener todos los resúmenes', async () => {
      const summaries = [{ SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 80 }];

      Summary.find = jest.fn().mockResolvedValue(summaries);

      const res = await request(app).get('/summaries');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(summaries);
    });
  });

  describe('GET /summaries/:id', () => {
    it('debería obtener un resumen por ID', async () => {
      const summary = { SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 80 };

      Summary.findById = jest.fn().mockResolvedValue(summary);

      const res = await request(app).get('/summaries/summary123');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(summary);
    });

    it('debería devolver un error 404 si el resumen no es encontrado', async () => {
      Summary.findById = jest.fn().mockResolvedValue(null);

      const res = await request(app).get('/summaries/summary123');

      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toBe('Summary not found');
    });
  });

  describe('PUT /summaries/:id', () => {
    it('debería actualizar un resumen', async () => {
      const updatedSummary = { SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 90 };

      Summary.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedSummary);

      const res = await request(app).put('/summaries/summary123').send({ TotalConfirmado: 90 });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(updatedSummary);
    });
  });

  describe('DELETE /summaries/:id', () => {
    it('debería eliminar un resumen', async () => {
      Summary.findByIdAndDelete = jest.fn().mockResolvedValue({ SummaryID: 'summary123' });

      const res = await request(app).delete('/summaries/summary123');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Summary deleted');
    });
  });
});
