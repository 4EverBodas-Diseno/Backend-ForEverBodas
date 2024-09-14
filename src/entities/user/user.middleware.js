// src/entities/user/user.middleware.js
const { body, validationResult } = require('express-validator');

// Validaciones para crear un nuevo usuario
const validateCreateUser = [
  body('Nombre')
    .isString().withMessage('Nombre debe ser una cadena de caracteres')
    .notEmpty().withMessage('Nombre es obligatorio'),
  
  body('Correo')
    .isEmail().withMessage('Correo debe ser una dirección de correo electrónico válida')
    .notEmpty().withMessage('Correo es obligatorio'),

  body('Contraseña')
    .isLength({ min: 6 }).withMessage('Contraseña debe tener al menos 6 caracteres')
    .notEmpty().withMessage('Contraseña es obligatoria'),

  body('FechaRegistro')
    .isISO8601().withMessage('FechaRegistro debe ser una fecha en formato ISO 8601')
    .notEmpty().withMessage('FechaRegistro es obligatorio'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validaciones para actualizar un usuario
const validateUpdateUser = [
  body('Nombre')
    .optional()
    .isString().withMessage('Nombre debe ser una cadena de caracteres'),
  
  body('Correo')
    .optional()
    .isEmail().withMessage('Correo debe ser una dirección de correo electrónico válida'),

  body('Contraseña')
    .optional()
    .isLength({ min: 6 }).withMessage('Contraseña debe tener al menos 6 caracteres'),

  body('FechaRegistro')
    .optional()
    .isISO8601().withMessage('FechaRegistro debe ser una fecha en formato ISO 8601'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateCreateUser,
  validateUpdateUser
};
