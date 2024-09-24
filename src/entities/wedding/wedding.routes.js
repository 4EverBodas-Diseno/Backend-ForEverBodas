// src/entities/wedding/wedding.routes.js
const express = require('express');
const {
  createWedding,
  getAllWeddings,
  getWeddingById,
  updateWedding,
  deleteWedding
} = require('./wedding.controller');

const router = express.Router();


router.post('/', createWedding);
router.get('/', getAllWeddings);
router.get('/:id', getWeddingById);
router.put('/:id', updateWedding);
router.delete('/:id', deleteWedding);

/**
 * @openapi
 * /weddings:
 *   post:
 *     summary: Crea una nueva boda
 *     tags:
 *       - Weddings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WeddingID:
 *                 type: string
 *               EventID:
 *                 type: string
 *               UserID:
 *                 type: string
 *               NombrePareja:
 *                 type: string
 *               FechaEvento:
 *                 type: string
 *                 format: date-time
 *               Lugar:
 *                 type: string
 *               Historia:
 *                 type: string
 *     responses:
 *       201:
 *         description: Boda creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WeddingID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 NombrePareja:
 *                   type: string
 *                 FechaEvento:
 *                   type: string
 *                   format: date-time
 *                 Lugar:
 *                   type: string
 *                 Historia:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /weddings:
 *   get:
 *     summary: Obtiene todas las bodas
 *     tags:
 *       - Weddings
 *     responses:
 *       200:
 *         description: Lista de bodas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   WeddingID:
 *                     type: string
 *                   EventID:
 *                     type: string
 *                   UserID:
 *                     type: string
 *                   NombrePareja:
 *                     type: string
 *                   FechaEvento:
 *                     type: string
 *                     format: date-time
 *                   Lugar:
 *                     type: string
 *                   Historia:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /weddings/{id}:
 *   get:
 *     summary: Obtiene una boda por ID
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la boda
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Boda encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WeddingID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 NombrePareja:
 *                   type: string
 *                 FechaEvento:
 *                   type: string
 *                   format: date-time
 *                 Lugar:
 *                   type: string
 *                 Historia:
 *                   type: string
 *       404:
 *         description: Boda no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /weddings/{id}:
 *   put:
 *     summary: Actualiza una boda
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la boda
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               EventID:
 *                 type: string
 *               UserID:
 *                 type: string
 *               NombrePareja:
 *                 type: string
 *               FechaEvento:
 *                 type: string
 *                 format: date-time
 *               Lugar:
 *                 type: string
 *               Historia:
 *                 type: string
 *     responses:
 *       200:
 *         description: Boda actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WeddingID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 NombrePareja:
 *                   type: string
 *                 FechaEvento:
 *                   type: string
 *                   format: date-time
 *                 Lugar:
 *                   type: string
 *                 Historia:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Boda no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /weddings/{id}:
 *   delete:
 *     summary: Elimina una boda
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la boda
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Boda eliminada
 *       404:
 *         description: Boda no encontrada
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
