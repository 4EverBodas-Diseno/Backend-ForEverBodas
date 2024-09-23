const mongoose = require('mongoose');
const Guest = require('../../../src/entities/guest/guest.model');

describe('Guest Model', () => {
  it('debería lanzar un error si falta un campo requerido', () => {
    const guest = new Guest({
      GuestID: '123',
      // Falta el campo WebPageID y UserID
      Nombre: 'John Doe',
      Correo: 'john@example.com'
    });

    const error = guest.validateSync();
    expect(error.errors.WebPageID).toBeDefined();
    expect(error.errors.UserID).toBeDefined();
  });

  it('debería guardar un invitado válido sin errores', async () => {
    const guest = new Guest({
      GuestID: '123',
      WebPageID: mongoose.Types.ObjectId(),
      UserID: mongoose.Types.ObjectId(),
      Nombre: 'John Doe',
      Correo: 'john@example.com'
    });

    const savedGuest = await guest.save();
    expect(savedGuest.GuestID).toBe('123');
    expect(savedGuest.Nombre).toBe('John Doe');
    expect(savedGuest.Correo).toBe('john@example.com');
  });

  it('debería tener el valor predeterminado de EstadoInvitacion como "Invitado"', () => {
    const guest = new Guest({
      GuestID: '123',
      WebPageID: mongoose.Types.ObjectId(),
      UserID: mongoose.Types.ObjectId(),
      Nombre: 'John Doe',
      Correo: 'john@example.com'
    });

    expect(guest.EstadoInvitacion).toBe('Invitado');
  });
});
