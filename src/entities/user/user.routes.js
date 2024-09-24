// src/entities/user/user.routes.js
const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserCompletedStatus, // Importa la función controladora para actualizar el estado de completado
  loginUser // Importa la función controladora para login
} = require('./user.controller');

const {
  validateCreateUser,
  validateUpdateUser,
  validateLogin // Importa el middleware de validación para login
} = require('./user.middleware');

const router = express.Router();

// Obtener todos los usuarios
router.get('/', getAllUsers);

// Obtener un usuario por ID
router.get('/:id', getUserById);

// Eliminar un usuario
router.delete('/:id', deleteUser);

// Crear un nuevo usuario
/**
 * @openapi
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Apellido:
 *                 type: string
 *               Correo:
 *                 type: string
 *                 format: email
 *               Password:
 *                 type: string
 *               FechaRegistro:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', validateCreateUser, createUser);

// Login de usuario
/**
 * @openapi
 * /users/login:
 *   post:
 *     summary: Autentica a un usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Correo:
 *                 type: string
 *                 format: email
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login exitoso"
 *                 token:
 *                   type: string
 *                   description: Token JWT del usuario
 *       400:
 *         description: Error en la solicitud
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', validateLogin, loginUser); // Añade el endpoint de login

// Actualizar un usuario
/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Actualiza un usuario
 *     tags:
 *       - Users
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
 *               Nombre:
 *                 type: string
 *               Apellido:
 *                 type: string
 *               Correo:
 *                 type: string
 *                 format: email
 *               Password:
 *                 type: string
 *               FechaRegistro:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', validateUpdateUser, updateUser);

// Eliminar un usuario
/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', deleteUser);

// Actualizar el estado de "Completado" de un usuario
/**
 * @openapi
 * /users/{id}/completed:
 *   patch:
 *     summary: Actualiza el estado de completado de un usuario
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estado de completado actualizado a true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Apellido:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 Completado:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch('/:id/completed', updateUserCompletedStatus); // Añade el nuevo endpoint PATCH

module.exports = router;
