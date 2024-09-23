// src/entities/summary/summary.routes.test.js
const express = require('express');
const {
  createSummary,
  getAllSummaries,
  getSummaryById,
  updateSummary,
  deleteSummary
} = require('./summary.controller');

const router = express.Router();

router.post('/', createSummary);
router.get('/', getAllSummaries);
router.get('/:id', getSummaryById);
router.put('/:id', updateSummary);
router.delete('/:id', deleteSummary);


/**
 * @openapi
 * /summaries:
 *   post:
 *     summary: Crea un nuevo resumen
 *     tags:
 *       - Summaries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SummaryID:
 *                 type: string
 *               TotalInvitados:
 *                 type: integer
 *               TotalConfirmado:
 *                 type: integer
 *               EventID:
 *                 type: string
 *     responses:
 *       201:
 *         description: Resumen creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 SummaryID:
 *                   type: string
 *                 TotalInvitados:
 *                   type: integer
 *                 TotalConfirmado:
 *                   type: integer
 *                 EventID:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /summaries:
 *   get:
 *     summary: Obtiene todos los resúmenes
 *     tags:
 *       - Summaries
 *     responses:
 *       200:
 *         description: Lista de resúmenes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   SummaryID:
 *                     type: string
 *                   TotalInvitados:
 *                     type: integer
 *                   TotalConfirmado:
 *                     type: integer
 *                   EventID:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /summaries/{id}:
 *   get:
 *     summary: Obtiene un resumen por ID
 *     tags:
 *       - Summaries
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del resumen
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resumen encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 SummaryID:
 *                   type: string
 *                 TotalInvitados:
 *                   type: integer
 *                 TotalConfirmado:
 *                   type: integer
 *                 EventID:
 *                   type: string
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /summaries/{id}:
 *   put:
 *     summary: Actualiza un resumen
 *     tags:
 *       - Summaries
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del resumen
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TotalInvitados:
 *                 type: integer
 *               TotalConfirmado:
 *                 type: integer
 *               EventID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resumen actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 SummaryID:
 *                   type: string
 *                 TotalInvitados:
 *                   type: integer
 *                 TotalConfirmado:
 *                   type: integer
 *                 EventID:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /summaries/{id}:
 *   delete:
 *     summary: Elimina un resumen
 *     tags:
 *       - Summaries
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del resumen
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resumen eliminado
 *       404:
 *         description: Resumen no encontrado
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
