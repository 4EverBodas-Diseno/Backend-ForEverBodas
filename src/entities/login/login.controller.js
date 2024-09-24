// src/entities/login/login.routes.js
const express = require('express');
const {
  register,
  loginUser,
  logoutUser,
  changePassword,
  forgotPassword,
} = require('./login.controller');

const router = express.Router();

// Registro de usuario
/**
 * @openapi
 * /login/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               LoginID:
 *                 type: string
 *               Nombre:
 *                 type: string
 *               Correo:
 *                 type: string
 *                 format: email
 *               Contraseña:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', register);

// Iniciar sesión
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Inicia sesión
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Correo:
 *                 type: string
 *                 format: email
 *               Contraseña:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión iniciada exitosamente
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/login', loginUser);

// Cerrar sesión
/**
 * @openapi
 * /login/logout:
 *   post:
 *     summary: Cierra la sesión del usuario
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 */
router.post('/logout', logoutUser);

// Cambiar contraseña
/**
 * @openapi
 * /login/change-password/{id}:
 *   put:
 *     summary: Cambia la contraseña del usuario
 *     tags:
 *       - Login
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña cambiada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/change-password/:id', changePassword);

// Recuperar contraseña
/**
 * @openapi
 * /login/forgot-password:
 *   post:
 *     summary: Inicia el proceso de recuperación de contraseña
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Correo:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Instrucciones de recuperación enviadas
 *       404:
 *         description: Correo no encontrado
 */
router.post('/forgot-password', forgotPassword);

module.exports = router;
