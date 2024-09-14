// src/entities/user/user.routes.js
const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('./user.controller');

const {
    validateCreateUser,
    validateUpdateUser
  } = require('./user.middleware');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);



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
 *               Correo:
 *                 type: string
 *                 format: email
 *               Contraseña:
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

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   UserID:
 *                     type: string
 *                   Nombre:
 *                     type: string
 *                   Correo:
 *                     type: string
 *                   Contraseña:
 *                     type: string
 *                   FechaRegistro:
 *                     type: string
 *                     format: date
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
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
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 Contraseña:
 *                   type: string
 *                 FechaRegistro:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */

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
 *               Correo:
 *                 type: string
 *                 format: email
 *               Contraseña:
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

module.exports = router;
