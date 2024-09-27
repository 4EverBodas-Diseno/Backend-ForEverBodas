// src/entities/asistencia/asistencia.routes.js
const express = require('express');
const {
  createAsistencia,
  getAllAsistencias,
  getAsistenciaById,
  updateAsistencia,
  deleteAsistencia
} = require('./asistencia.controller');

const {
  validateCreateAsistencia,
  validateUpdateAsistencia
} = require('./asistencia.middleware');

const router = express.Router();

// Crear una nueva asistencia
router.post('/', validateCreateAsistencia, createAsistencia);

// Obtener todas las asistencias
router.get('/', getAllAsistencias);

// Obtener una asistencia por GuestID (en lugar de ID)
router.get('/guest/:guestId', getAsistenciaById); // Modificado para buscar por GuestID

// Actualizar una asistencia por GuestID
router.put('/guest/:guestId', validateUpdateAsistencia, updateAsistencia); // Modificado para buscar por GuestID

// Eliminar una asistencia por GuestID
router.delete('/guest/:guestId', deleteAsistencia); // Modificado para buscar por GuestID

/**
 * @openapi
 * /asistencias:
 *   post:
 *     summary: Crea una nueva asistencia
 *     tags:
 *       - Asistencias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               GuestID:
 *                 type: string
 *               WeddingID:
 *                 type: string
 *               Confirmacion:
 *                 type: boolean
 *               Cant_Invitado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Asistencia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 Confirmacion:
 *                   type: boolean
 *                 Cant_Invitado:
 *                   type: integer
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /asistencias:
 *   get:
 *     summary: Obtiene todas las asistencias
 *     tags:
 *       - Asistencias
 *     responses:
 *       200:
 *         description: Lista de asistencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   GuestID:
 *                     type: string
 *                   WeddingID:
 *                     type: string
 *                   Confirmacion:
 *                     type: boolean
 *                   Cant_Invitado:
 *                     type: integer
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /asistencias/guest/{guestId}:
 *   get:
 *     summary: Obtiene una asistencia por GuestID
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: guestId
 *         in: path
 *         required: true
 *         description: GuestID de la asistencia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asistencia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 Confirmacion:
 *                   type: boolean
 *                 Cant_Invitado:
 *                   type: integer
 *       404:
 *         description: Asistencia no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /asistencias/guest/{guestId}:
 *   put:
 *     summary: Actualiza una asistencia
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: guestId
 *         in: path
 *         required: true
 *         description: GuestID de la asistencia
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               GuestID:
 *                 type: string
 *               WeddingID:
 *                 type: string
 *               Confirmacion:
 *                 type: boolean
 *               Cant_Invitado:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Asistencia actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 Confirmacion:
 *                   type: boolean
 *                 Cant_Invitado:
 *                   type: integer
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Asistencia no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /asistencias/guest/{guestId}:
 *   delete:
 *     summary: Elimina una asistencia
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: guestId
 *         in: path
 *         required: true
 *         description: GuestID de la asistencia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asistencia eliminada
 *       404:
 *         description: Asistencia no encontrada
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
