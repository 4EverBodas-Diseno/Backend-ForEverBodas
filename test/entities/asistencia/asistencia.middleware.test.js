const { validateCreateAsistencia, validateUpdateAsistencia } = require('../../../src/entities/asistencia/asistencia.middleware');
const { validationResult } = require('express-validator');

// Mock de express-validator
jest.mock('express-validator', () => {
  const original = jest.requireActual('express-validator');
  return {
    ...original,
    validationResult: jest.fn()
  };
});

describe('Asistencia Middleware', () => {
  it('should return 400 if validation fails (missing fields)', async () => {
    const req = { body: { Cant_Invitado: 5 } }; // Falta GuestID y EventID
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validationResult.mockImplementationOnce(() => ({
      isEmpty: () => false,
      array: () => [{ msg: 'GuestID is required' }]
    }));

    await validateCreateAsistencia[validateCreateAsistencia.length - 1](req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      errors: expect.any(Array)
    }));
  });

  it('should pass validation with valid data', async () => {
    const req = {
      body: {
        GuestID: '60b8bfcf2f8fb814b56fa182',
        EventID: '60b8bfcf2f8fb814b56fa183',
        Confirmacion: true,
        Cant_Invitado: 5
      }
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validationResult.mockImplementationOnce(() => ({
      isEmpty: () => true
    }));

    await validateCreateAsistencia[validateCreateAsistencia.length - 1](req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
