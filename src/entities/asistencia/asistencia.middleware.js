const { body, validationResult } = require('express-validator');

// Validaciones para crear una nueva asistencia
const validateCreateAsistencia = [
  body('GuestID').not().isEmpty().withMessage('GuestID is required'),
  body('EventID').not().isEmpty().withMessage('EventID is required'),
  body('Confirmacion').isBoolean().withMessage('Confirmacion must be a boolean'),
  body('Cant_Invitado').isInt({ min: 1 }).withMessage('Cant_Invitado must be a positive integer'),

  // Manejo de errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validaciones para actualizar asistencia
const validateUpdateAsistencia = [
  body('GuestID').optional().isString().withMessage('GuestID must be a valid ID'),
  body('EventID').optional().isString().withMessage('EventID must be a valid ID'),
  body('Confirmacion').optional().isBoolean().withMessage('Confirmacion must be a boolean'),
  body('Cant_Invitado').optional().isInt({ min: 1 }).withMessage('Cant_Invitado must be a positive integer'),

  // Manejo de errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateCreateAsistencia,
  validateUpdateAsistencia
};
