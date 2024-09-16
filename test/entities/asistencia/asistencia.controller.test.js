const { createAsistencia, getAllAsistencias } = require('../../../src/entities/asistencia/asistencia.controller');
const Asistencia = require('../../../src/entities/asistencia/asistencia.model');

jest.mock('../../../src/entities/asistencia/asistencia.model'); // Mock del modelo Asistencia

describe('Asistencia Controller', () => {
  it('should create a new Asistencia and return 201 status', async () => {
    const req = { body: { GuestID: '60b8bfcf2f8fb814b56fa182', EventID: '60b8bfcf2f8fb814b56fa183', Confirmacion: true, Cant_Invitado: 3 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    jest.spyOn(Asistencia.prototype, 'save').mockResolvedValue(req.body); // Mock del método save

    await createAsistencia(req, res);

    // Aumentamos el timeout y forzamos el test
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  }, 10000); // Aumenta el timeout a 10 segundos

  it('should return all asistencias', async () => {
    const mockAsistencias = [{ GuestID: '60b8bfcf2f8fb814b56fa182', EventID: '60b8bfcf2f8fb814b56fa183', Confirmacion: true, Cant_Invitado: 3 }];
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    jest.spyOn(Asistencia, 'find').mockResolvedValue(mockAsistencias); // Mock de la búsqueda

    await getAllAsistencias(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAsistencias);
  }, 10000); // Aumenta el timeout a 10 segundos
});
