const express = require('express');
const {
  createWedding,
  getAllWeddings,
  getWeddingById,
  updateWedding,
  deleteWedding,
  getWeddingByUserID,
  updateWeddingPartial
} = require('./wedding.controller');

const router = express.Router();

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
router.post('/', createWedding);

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
router.get('/', getAllWeddings);

/**
 * @openapi
 * /weddings/{WeddingID}:
 *   get:
 *     summary: Obtiene una boda por WeddingID
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: WeddingID
 *         in: path
 *         required: true
 *         description: WeddingID de la boda
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
router.get('/:WeddingID', getWeddingById);

/**
 * @openapi
 * /weddings/user/{UserID}:
 *   get:
 *     summary: Obtiene una boda por el ID del usuario
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: ID del usuario
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
router.get('/user/:UserID', getWeddingByUserID);

/**
 * @openapi
 * /weddings/{WeddingID}:
 *   put:
 *     summary: Actualiza una boda
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: WeddingID
 *         in: path
 *         required: true
 *         description: WeddingID de la boda
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WeddingID:
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
router.put('/:WeddingID', updateWedding);

/**
 * @openapi
 * /weddings/{WeddingID}:
 *   patch:
 *     summary: Actualiza parcialmente una boda
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: WeddingID
 *         in: path
 *         required: true
 *         description: WeddingID de la boda
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WeddingID:
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
 *         description: Boda actualizada parcialmente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WeddingID:
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
router.patch('/:WeddingID', updateWeddingPartial);

/**
 * @openapi
 * /weddings/{WeddingID}:
 *   delete:
 *     summary: Elimina una boda
 *     tags:
 *       - Weddings
 *     parameters:
 *       - name: WeddingID
 *         in: path
 *         required: true
 *         description: WeddingID de la boda
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
router.delete('/:WeddingID', deleteWedding);

module.exports = router;