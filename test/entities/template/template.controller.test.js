const { createTemplate, getAllTemplates, getTemplateById, updateTemplate, deleteTemplate } = require('../../../src/entities/template/template.controller');
const Template = require('../../../src/entities/template/template.model');

// Mockear los métodos de Mongoose
jest.mock('../../../src/entities/template/template.model');

describe('Template Controller', () => {

  describe('createTemplate', () => {
    it('debería crear un nuevo template', async () => {
      const req = { body: { name: 'Wedding Template', content: 'Template content' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.prototype.save = jest.fn().mockResolvedValue(req.body);

      await createTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('debería devolver error 400 si falla la creación', async () => {
      const req = { body: { name: 'Wedding Template' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el template'));

      await createTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear el template' });
    });
  });

  describe('getAllTemplates', () => {
    it('debería obtener todos los templates', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const templates = [{ name: 'Template 1', content: 'Content 1' }];

      Template.find.mockResolvedValue(templates);

      await getAllTemplates(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(templates);
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.find.mockRejectedValue(new Error('Error al obtener los templates'));

      await getAllTemplates(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener los templates' });
    });
  });

  describe('getTemplateById', () => {
    it('debería obtener un template por ID', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const template = { name: 'Template 1', content: 'Content 1' };

      Template.findById.mockResolvedValue(template);

      await getTemplateById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(template);
    });

    it('debería devolver error 404 si el template no es encontrado', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findById.mockResolvedValue(null);

      await getTemplateById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Template not found' });
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findById.mockRejectedValue(new Error('Error al obtener el template'));

      await getTemplateById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener el template' });
    });
  });

  describe('updateTemplate', () => {
    it('debería actualizar un template', async () => {
      const req = { params: { id: 'template123' }, body: { name: 'Template Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedTemplate = { name: 'Template Updated', content: 'Updated content' };

      Template.findByIdAndUpdate.mockResolvedValue(updatedTemplate);

      await updateTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedTemplate);
    });

    it('debería devolver error 404 si el template no es encontrado para actualizar', async () => {
      const req = { params: { id: 'template123' }, body: { name: 'Template Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findByIdAndUpdate.mockResolvedValue(null);

      await updateTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Template not found' });
    });

    it('debería devolver error 400 si falla la actualización', async () => {
      const req = { params: { id: 'template123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findByIdAndUpdate.mockRejectedValue(new Error('Error al actualizar el template'));

      await updateTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar el template' });
    });
  });

  describe('deleteTemplate', () => {
    it('debería eliminar un template', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findByIdAndDelete.mockResolvedValue({ name: 'Template Deleted' });

      await deleteTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Template deleted' });
    });

    it('debería devolver error 404 si el template no es encontrado para eliminar', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findByIdAndDelete.mockResolvedValue(null);

      await deleteTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Template not found' });
    });

    it('debería devolver error 500 si falla la eliminación', async () => {
      const req = { params: { id: 'template123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Template.findByIdAndDelete.mockRejectedValue(new Error('Error al eliminar el template'));

      await deleteTemplate(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar el template' });
    });
  });

});
