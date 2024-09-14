// src/entities/asistencia/asistencia.middleware.js
const { body, validationResult } = require('express-validator');

// Validaciones para crear una nueva asistencia
const validateCreateAsistencia = [
  body('GuestID')
    .isString().withMessage('GuestID debe ser un identificador válido')
    .notEmpty().withMessage('GuestID es obligatorio'),

  body('EventID')
    .isString().withMessage('EventID debe ser un identificador válido')
    .notEmpty().withMessage('EventID es obligatorio'),

  body('Confirmacion')
    .isBoolean().withMessage('Confirmacion debe ser un valor booleano (true o false)')
    .notEmpty().withMessage('Confirmacion es obligatoria'),

  body('Cant_Invitado')
    .isInt({ min: 0 }).withMessage('Cant_Invitado debe ser un número entero no negativo')
    .notEmpty().withMessage('Cant_Invitado es obligatorio'),
  
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
  body('GuestID')
    .optional()
    .isString().withMessage('GuestID debe ser un identificador válido'),
  
  body('EventID')
    .optional()
    .isString().withMessage('EventID debe ser un identificador válido'),

  body('Confirmacion')
    .optional()
    .isBoolean().withMessage('Confirmacion debe ser un valor booleano (true o false)'),

  body('Cant_Invitado')
    .optional()
    .isInt({ min: 0 }).withMessage('Cant_Invitado debe ser un número entero no negativo'),
  
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