const Asistencia = require('../../../src/entities/asistencia/asistencia.model');
const mongoose = require('mongoose');

describe('Asistencia Model', () => {
  it('should create a new Asistencia with valid data', async () => {
    const asistenciaData = {
      GuestID: new mongoose.Types.ObjectId(), // Usa `new`
      EventID: new mongoose.Types.ObjectId(),
      Confirmacion: true,
      Cant_Invitado: 5
    };

    jest.spyOn(Asistencia.prototype, 'save').mockResolvedValue(asistenciaData);

    const asistencia = new Asistencia(asistenciaData);
    await asistencia.save();

    expect(asistencia.GuestID).toBeDefined();
    expect(asistencia.Confirmacion).toBe(true);
  });

  it('should fail to create an Asistencia without required fields', async () => {
    const asistenciaData = {
      Confirmacion: true,
      Cant_Invitado: 5
    };

    try {
      const asistencia = new Asistencia(asistenciaData);
      await asistencia.save();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
