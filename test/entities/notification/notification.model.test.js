const mongoose = require('mongoose');
const Notification = require('../../../src/entities/notification/notification.model');

describe('Notification Model', () => {

  it('debería lanzar un error si falta un campo requerido', () => {
    const notification = new Notification({
      NotificationID: 'notif123',
      // Falta el campo Tipo, Mensaje, EventID
    });

    const error = notification.validateSync();
    expect(error.errors.Tipo).toBeDefined();
    expect(error.errors.Mensaje).toBeDefined();
    expect(error.errors.EventID).toBeDefined();
  });

  it('debería guardar una notificación válida sin errores', async () => {
    const notification = new Notification({
      NotificationID: 'notif123',
      Tipo: 'Alerta',
      Mensaje: 'Este es un mensaje de prueba',
      EventID: mongoose.Types.ObjectId()
    });

    const savedNotification = await notification.save();
    expect(savedNotification.NotificationID).toBe('notif123');
    expect(savedNotification.Tipo).toBe('Alerta');
    expect(savedNotification.Mensaje).toBe('Este es un mensaje de prueba');
    expect(savedNotification.EventID).toBeDefined();
  });

  it('debería asignar la fecha de envío predeterminada correctamente', () => {
    const notification = new Notification({
      NotificationID: 'notif123',
      Tipo: 'Alerta',
      Mensaje: 'Este es un mensaje de prueba',
      EventID: mongoose.Types.ObjectId()
    });

    expect(notification.FechaEnvio).toBeInstanceOf(Date);
  });
});
