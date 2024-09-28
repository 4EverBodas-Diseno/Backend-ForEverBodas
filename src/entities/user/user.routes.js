const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserCompletedStatus,
  loginUser
} = require('./user.controller');

const router = express.Router();

// Obtener todos los usuarios
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
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
 *                   Apellido:
 *                     type: string
 *                   Correo:
 *                     type: string
 *                   FechaRegistro:
 *                     type: string
 *                     format: date-time
 *                   Completado:
 *                     type: boolean
 */
router.get('/', getAllUsers);

// Obtener un usuario por UserID
/**
 * @openapi
 * /users/{UserID}:
 *   get:
 *     summary: Obtiene un usuario por UserID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: UserID del usuario
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
 *                 Apellido:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 FechaRegistro:
 *                   type: string
 *                   format: date-time
 *                 Completado:
 *                   type: boolean
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:UserID', getUserById);

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
 *               UserID:
 *                 type: string
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
 *             required:
 *               - UserID
 *               - Nombre
 *               - Apellido
 *               - Correo
 *               - Password
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createUser);

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
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Apellido:
 *                   type: string
 *                 FechaRegistro:
 *                   type: string
 *                   format: date-time
 *                 Completado:
 *                   type: boolean
 *                   description: Estado de si el perfil está completado
 *       400:
 *         description: Error en la solicitud
 *       401:
 *         description: Credenciales inválidas
 */

router.post('/login', loginUser);

// Actualizar un usuario
/**
 * @openapi
 * /users/{UserID}:
 *   put:
 *     summary: Actualiza un usuario
 *     tags:
 *       - Users
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: UserID del usuario
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
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:UserID', updateUser);

// Eliminar un usuario
/**
 * @openapi
 * /users/{UserID}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags:
 *       - Users
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: UserID del usuario
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
router.delete('/:UserID', deleteUser);

// Actualizar el estado de "Completado" de un usuario
/**
 * @openapi
 * /users/{UserID}/completed:
 *   put:
 *     summary: Actualiza el estado de completado de un usuario
 *     tags:
 *       - Users
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: UserID del usuario
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
router.put('/:UserID/completed', updateUserCompletedStatus); // Cambiado a PUT

module.exports = router;
