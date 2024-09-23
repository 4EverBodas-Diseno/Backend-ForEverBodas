const request = require('supertest');
const express = require('express');
const notificationRoutes = require('../../../src/entities/notification/notification.routes');
const Notification = require('../../../src/entities/notification//notification.model');

// Mock de Mongoose
jest.mock('../../../src/entities/notification/notification.model');

const app = express();
app.use(express.json());
app.use('/notifications', notificationRoutes);

describe('Notification Routes', () => {
  describe('POST /notifications', () => {
    it('debería crear una nueva notificación', async () => {
      const newNotification = {
        NotificationID: 'notif123',
        Tipo: 'Alerta',
        Mensaje: 'Este es un mensaje de prueba',
        EventID: '1234567890'
      };

      Notification.prototype.save = jest.fn().mockResolvedValue(newNotification);

      const res = await request(app).post('/notifications').send(newNotification);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(newNotification);
    });

    it('debería devolver un error 400 si falla la creación', async () => {
      const newNotification = {
        NotificationID: 'notif123',
        Mensaje: 'Este es un mensaje de prueba'
        // Falta el campo Tipo y EventID
      };

      Notification.prototype.save = jest.fn().mockRejectedValue(new Error('Error al crear la notificación'));

      const res = await request(app).post('/notifications').send(newNotification);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /notifications', () => {
    it('debería obtener todas las notificaciones', async () => {
      const notifications = [{ NotificationID: 'notif123', Tipo: 'Alerta', Mensaje: 'Mensaje 1' }];

      Notification.find = jest.fn().mockResolvedValue(notifications);

      const res = await request(app).get('/notifications');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(notifications);
    });
  });

  describe('GET /notifications/:id', () => {
    it('debería obtener una notificación por ID', async () => {
      const notification = { NotificationID: 'notif123', Tipo: 'Alerta', Mensaje: 'Mensaje 1' };

      Notification.findById = jest.fn().mockResolvedValue(notification);

      const res = await request(app).get('/notifications/notif123');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(notification);
    });

    it('debería devolver un error 404 si la notificación no es encontrada', async () => {
      Notification.findById = jest.fn().mockResolvedValue(null);

      const res = await request(app).get('/notifications/notif123');

      expect(res.statusCode).toEqual(404);
      expect(res.body.message).toBe('Notification not found');
    });
  });

  describe('PUT /notifications/:id', () => {
    it('debería actualizar una notificación', async () => {
      const updatedNotification = { NotificationID: 'notif123', Tipo: 'Alerta', Mensaje: 'Mensaje actualizado' };

      Notification.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedNotification);

      const res = await request(app).put('/notifications/notif123').send({ Mensaje: 'Mensaje actualizado' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(updatedNotification);
    });
  });

  describe('DELETE /notifications/:id', () => {
    it('debería eliminar una notificación', async () => {
      Notification.findByIdAndDelete = jest.fn().mockResolvedValue({ NotificationID: 'notif123' });

      const res = await request(app).delete('/notifications/notif123');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Notification deleted');
    });
  });
});
