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


router.post('/', createAsistencia);
router.get('/', getAllAsistencias);
router.get('/:id', getAsistenciaById);
router.put('/:id', updateAsistencia);
router.delete('/:id', deleteAsistencia);



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
 *               EventID:
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
 *                 EventID:
 *                   type: string
 *                 Confirmacion:
 *                   type: boolean
 *                 Cant_Invitado:
 *                   type: integer
 *       400:
 *         description: Error en la solicitud
 */

router.post('/', validateCreateAsistencia, createAsistencia);


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
 *                   EventID:
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
 * /asistencias/{id}:
 *   get:
 *     summary: Obtiene una asistencia por ID
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la asistencia
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
 *                 EventID:
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
 * /asistencias/{id}:
 *   put:
 *     summary: Actualiza una asistencia
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la asistencia
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
 *               EventID:
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
 *                 EventID:
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

router.put('/:id', validateUpdateAsistencia, updateAsistencia);

/**
 * @openapi
 * /asistencias/{id}:
 *   delete:
 *     summary: Elimina una asistencia
 *     tags:
 *       - Asistencias
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la asistencia
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
