const { createSummary, getAllSummaries, getSummaryById, updateSummary, deleteSummary } = require('../../../src/entities/summary/summary.controller');
const Summary = require('../../../src/entities/summary/summary.model');

// Mockear los métodos de Mongoose
jest.mock('../../../src/entities/summary/summary.model');

describe('Summary Controller', () => {

  describe('createSummary', () => {
    it('debería crear un nuevo resumen', async () => {
      const req = { body: { SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 80, EventID: 'event123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.prototype.save = jest.fn().mockResolvedValue(req.body);

      await createSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('debería devolver error 400 si falla la creación', async () => {
      const req = { body: { SummaryID: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el resumen'));

      await createSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear el resumen' });
    });
  });

  describe('getAllSummaries', () => {
    it('debería obtener todos los resúmenes', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const summaries = [{ SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 80 }];

      Summary.find.mockResolvedValue(summaries);

      await getAllSummaries(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(summaries);
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.find.mockRejectedValue(new Error('Error al obtener los resúmenes'));

      await getAllSummaries(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener los resúmenes' });
    });
  });

  describe('getSummaryById', () => {
    it('debería obtener un resumen por ID', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const summary = { SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 80 };

      Summary.findById.mockResolvedValue(summary);

      await getSummaryById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(summary);
    });

    it('debería devolver error 404 si el resumen no es encontrado', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findById.mockResolvedValue(null);

      await getSummaryById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Summary not found' });
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findById.mockRejectedValue(new Error('Error al obtener el resumen'));

      await getSummaryById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener el resumen' });
    });
  });

  describe('updateSummary', () => {
    it('debería actualizar un resumen', async () => {
      const req = { params: { id: 'summary123' }, body: { TotalConfirmado: 90 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedSummary = { SummaryID: 'summary123', TotalInvitados: 100, TotalConfirmado: 90 };

      Summary.findByIdAndUpdate.mockResolvedValue(updatedSummary);

      await updateSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedSummary);
    });

    it('debería devolver error 404 si el resumen no es encontrado para actualizar', async () => {
      const req = { params: { id: 'summary123' }, body: { TotalConfirmado: 90 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findByIdAndUpdate.mockResolvedValue(null);

      await updateSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Summary not found' });
    });

    it('debería devolver error 400 si falla la actualización', async () => {
      const req = { params: { id: 'summary123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findByIdAndUpdate.mockRejectedValue(new Error('Error al actualizar el resumen'));

      await updateSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar el resumen' });
    });
  });

  describe('deleteSummary', () => {
    it('debería eliminar un resumen', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findByIdAndDelete.mockResolvedValue({ SummaryID: 'summary123' });

      await deleteSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Summary deleted' });
    });

    it('debería devolver error 404 si el resumen no es encontrado para eliminar', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findByIdAndDelete.mockResolvedValue(null);

      await deleteSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Summary not found' });
    });

    it('debería devolver error 500 si falla la eliminación', async () => {
      const req = { params: { id: 'summary123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Summary.findByIdAndDelete.mockRejectedValue(new Error('Error al eliminar el resumen'));

      await deleteSummary(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar el resumen' });
    });
  });

});
