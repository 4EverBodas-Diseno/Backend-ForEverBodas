const { createGuest, getAllGuests, getGuestById, updateGuest, deleteGuest } = require('../../../src/entities/guest/guest.controller');
const Guest = require('../../../src/entities/guest/guest.controller');

// Mockear los métodos de Mongoose
jest.mock('../../../src/entities/guest/guest.model');

describe('Guest Controller', () => {

  describe('createGuest', () => {
    it('debería crear un nuevo invitado', async () => {
      const req = { body: { GuestID: '123', Nombre: 'John Doe', Correo: 'john@example.com' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.prototype.save = jest.fn().mockResolvedValue(req.body);

      await createGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('debería devolver error 400 si falla la creación', async () => {
      const req = { body: { GuestID: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear el invitado'));

      await createGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear el invitado' });
    });
  });

  describe('getAllGuests', () => {
    it('debería obtener todos los invitados', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const guests = [{ GuestID: '123', Nombre: 'John Doe' }];

      Guest.find.mockResolvedValue(guests);

      await getAllGuests(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(guests);
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.find.mockRejectedValue(new Error('Error al obtener los invitados'));

      await getAllGuests(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener los invitados' });
    });
  });

  describe('getGuestById', () => {
    it('debería obtener un invitado por ID', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const guest = { GuestID: '123', Nombre: 'John Doe' };

      Guest.findById.mockResolvedValue(guest);

      await getGuestById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(guest);
    });

    it('debería devolver error 404 si el invitado no es encontrado', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findById.mockResolvedValue(null);

      await getGuestById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Guest not found' });
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findById.mockRejectedValue(new Error('Error al obtener el invitado'));

      await getGuestById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener el invitado' });
    });
  });

  describe('updateGuest', () => {
    it('debería actualizar un invitado', async () => {
      const req = { params: { id: '123' }, body: { Nombre: 'John Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const guest = { GuestID: '123', Nombre: 'John Updated' };

      Guest.findByIdAndUpdate.mockResolvedValue(guest);

      await updateGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(guest);
    });

    it('debería devolver error 404 si el invitado no es encontrado para actualización', async () => {
      const req = { params: { id: '123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findByIdAndUpdate.mockResolvedValue(null);

      await updateGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Guest not found' });
    });

    it('debería devolver error 400 si falla la actualización', async () => {
      const req = { params: { id: '123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findByIdAndUpdate.mockRejectedValue(new Error('Error al actualizar el invitado'));

      await updateGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar el invitado' });
    });
  });

  describe('deleteGuest', () => {
    it('debería eliminar un invitado', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findByIdAndDelete.mockResolvedValue({ GuestID: '123' });

      await deleteGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Guest deleted' });
    });

    it('debería devolver error 404 si el invitado no es encontrado para eliminar', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findByIdAndDelete.mockResolvedValue(null);

      await deleteGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Guest not found' });
    });

    it('debería devolver error 500 si falla la eliminación', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Guest.findByIdAndDelete.mockRejectedValue(new Error('Error al eliminar el invitado'));

      await deleteGuest(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar el invitado' });
    });
  });

});
