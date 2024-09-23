const { createNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification } = require('./notification.controller');
const Notification = require('../../../src/entities/notification/notification.model');

// Mockear los métodos de Mongoose
jest.mock('../../../src/entities/notification/notification.model');

describe('Notification Controller', () => {

  describe('createNotification', () => {
    it('debería crear una nueva notificación', async () => {
      const req = { body: { title: 'New Notification', description: 'Notification description' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.prototype.save = jest.fn().mockResolvedValue(req.body);

      await createNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('debería devolver error 400 si falla la creación', async () => {
      const req = { body: { title: 'New Notification' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear la notificación'));

      await createNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al crear la notificación' });
    });
  });

  describe('getAllNotifications', () => {
    it('debería obtener todas las notificaciones', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const notifications = [{ title: 'Notification 1', description: 'Description 1' }];

      Notification.find.mockResolvedValue(notifications);

      await getAllNotifications(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(notifications);
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.find.mockRejectedValue(new Error('Error al obtener las notificaciones'));

      await getAllNotifications(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener las notificaciones' });
    });
  });

  describe('getNotificationById', () => {
    it('debería obtener una notificación por ID', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const notification = { title: 'Notification 1', description: 'Description 1' };

      Notification.findById.mockResolvedValue(notification);

      await getNotificationById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(notification);
    });

    it('debería devolver error 404 si la notificación no es encontrada', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findById.mockResolvedValue(null);

      await getNotificationById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Notification not found' });
    });

    it('debería devolver error 500 si falla la búsqueda', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findById.mockRejectedValue(new Error('Error al obtener la notificación'));

      await getNotificationById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener la notificación' });
    });
  });

  describe('updateNotification', () => {
    it('debería actualizar una notificación', async () => {
      const req = { params: { id: '123' }, body: { title: 'Notification Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedNotification = { title: 'Notification Updated', description: 'Description updated' };

      Notification.findByIdAndUpdate.mockResolvedValue(updatedNotification);

      await updateNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedNotification);
    });

    it('debería devolver error 404 si la notificación no es encontrada para actualización', async () => {
      const req = { params: { id: '123' }, body: { title: 'Notification Updated' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findByIdAndUpdate.mockResolvedValue(null);

      await updateNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Notification not found' });
    });

    it('debería devolver error 400 si falla la actualización', async () => {
      const req = { params: { id: '123' }, body: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findByIdAndUpdate.mockRejectedValue(new Error('Error al actualizar la notificación'));

      await updateNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar la notificación' });
    });
  });

  describe('deleteNotification', () => {
    it('debería eliminar una notificación', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findByIdAndDelete.mockResolvedValue({ title: 'Notification Deleted' });

      await deleteNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Notification deleted' });
    });

    it('debería devolver error 404 si la notificación no es encontrada para eliminar', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findByIdAndDelete.mockResolvedValue(null);

      await deleteNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Notification not found' });
    });

    it('debería devolver error 500 si falla la eliminación', async () => {
      const req = { params: { id: '123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Notification.findByIdAndDelete.mockRejectedValue(new Error('Error al eliminar la notificación'));

      await deleteNotification(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar la notificación' });
    });
  });

});
