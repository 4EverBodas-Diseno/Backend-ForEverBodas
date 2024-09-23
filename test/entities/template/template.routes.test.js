const request = require('supertest');
const express = require('express');
const templateRoutes = require('../../../src/entities/template/template.routes');
const Template = require('../../../src/entities/template/template.model');

// Mock de Mongoose
jest.mock('./template.model');

const app = express();
app.use(express.json());
app.use('/templates', templateRoutes);

describe('Template Routes', () => {
  describe('POST /templates', () => {
    it('debería crear un nuevo template', async () => {
      const newTemplate = {
        TemplateID: 'template123',
        NombrePlantilla: 'Plantilla Boda',
        TypographyNom: 'Arial',
        URLTypography: 'https://fonts.google.com',
        ColorPrim: '#FFFFFF',
        ColorSec: '#000000',
        ColorLetra: '#333333'
      };

      Template.prototype.save = jest.fn().mockResolvedValue(newTemplate);

      const res = await request(app).post('/templates').send(newTemplate);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(newTemplate);
    });

    it('debería devolver un error 400 si falta algún campo requerido', async () => {
      const newTemplate = {
        TemplateID: 'template123',
        // Falta NombrePlantilla
      };

      Template.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear la plantilla'));

      const res = await request(app).post('/templates').send(newTemplate);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /templates', () => {
    it('debería obtener todas las plantillas', async () => {
      const templates = [{ TemplateID: 'template123', NombrePlantilla: 'Plantilla Boda' }];

      Template.find = jest.fn().mockResolvedValue(templates);

      const res = await request(app).get('/templates');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(templates);
    });
  });

  describe('GET /templates/:id', () => {
    it('debería obtener una plantilla por ID', async () => {
      const template = { TemplateID: 'template123', NombrePlantilla: 'Plantilla Boda' };

      Template.findById = jest.fn().mockResolvedValue(template);

      const res = await request(app).get('/templates/template123');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(template);
    });

    it('debería devolver error 404 si la plantilla no es encontrada', async () => {
      Template.findById = jest.fn().mockResolvedValue(null);

      const res = await request(app).get('/templates/template123');

      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toBe('Template not found');
    });
  });

  describe('PUT /templates/:id', () => {
    it('debería actualizar una plantilla', async () => {
      const updatedTemplate = { TemplateID: 'template123', NombrePlantilla: 'Plantilla Actualizada' };

      Template.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedTemplate);

      const res = await request(app).put('/templates/template123').send({ NombrePlantilla: 'Plantilla Actualizada' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(updatedTemplate);
    });
  });

  describe('DELETE /templates/:id', () => {
    it('debería eliminar una plantilla', async () => {
      Template.findByIdAndDelete = jest.fn().mockResolvedValue({ TemplateID: 'template123' });

      const res = await request(app).delete('/templates/template123');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Template deleted');
    });
  });
});
