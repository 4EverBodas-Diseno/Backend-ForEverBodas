const mongoose = require('mongoose');
const Profile = require('../../../src/entities/profile/profile.model');

describe('Profile Model', () => {
  it('debería lanzar un error si falta un campo requerido', () => {
    const profile = new Profile({
      profileID: 'profile123',
      // Falta el campo userID
    });

    const error = profile.validateSync();
    expect(error.errors.userID).toBeDefined();
  });

  it('debería guardar un perfil válido sin errores', async () => {
    const profile = new Profile({
      profileID: 'profile123',
      userID: mongoose.Types.ObjectId(),
      Telefono: '555-1234',
      Direccion: '123 Main St',
      FechaNacimiento: new Date(),
      NombrePareja: 'Jane Doe'
    });

    const savedProfile = await profile.save();
    expect(savedProfile.profileID).toBe('profile123');
    expect(savedProfile.Telefono).toBe('555-1234');
    expect(savedProfile.Direccion).toBe('123 Main St');
  });

  it('debería asignar correctamente la FechaNacimiento', () => {
    const profile = new Profile({
      profileID: 'profile123',
      userID: mongoose.Types.ObjectId(),
      FechaNacimiento: new Date('1990-01-01')
    });

    expect(profile.FechaNacimiento.toISOString()).toBe('1990-01-01T00:00:00.000Z');
  });
});
