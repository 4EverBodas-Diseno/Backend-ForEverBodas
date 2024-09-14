// src/entities/wellwish/wellwish.routes.js
const express = require('express');
const {
  createWellWish,
  getAllWellWishes,
  getWellWishById,
  updateWellWish,
  deleteWellWish
} = require('./wellwish.controller');

const router = express.Router();

router.post('/', createWellWish);
router.get('/', getAllWellWishes);
router.get('/:id', getWellWishById);
router.put('/:id', updateWellWish);
router.delete('/:id', deleteWellWish);


/**
 * @openapi
 * /wellwishes:
 *   post:
 *     summary: Crea un nuevo mensaje de buenos deseos
 *     tags:
 *       - WellWishes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WellWishID:
 *                 type: string
 *               EventID:
 *                 type: string
 *               GuestID:
 *                 type: string
 *               Mensaje:
 *                 type: string
 *               FechaEnvio:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Mensaje de buenos deseos creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WellWishID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 GuestID:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /wellwishes:
 *   get:
 *     summary: Obtiene todos los mensajes de buenos deseos
 *     tags:
 *       - WellWishes
 *     responses:
 *       200:
 *         description: Lista de mensajes de buenos deseos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   WellWishID:
 *                     type: string
 *                   EventID:
 *                     type: string
 *                   GuestID:
 *                     type: string
 *                   Mensaje:
 *                     type: string
 *                   FechaEnvio:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /wellwishes/{id}:
 *   get:
 *     summary: Obtiene un mensaje de buenos deseos por ID
 *     tags:
 *       - WellWishes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del mensaje de buenos deseos
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mensaje de buenos deseos encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WellWishID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 GuestID:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Mensaje de buenos deseos no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /wellwishes/{id}:
 *   put:
 *     summary: Actualiza un mensaje de buenos deseos
 *     tags:
 *       - WellWishes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del mensaje de buenos deseos
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
 *               GuestID:
 *                 type: string
 *               Mensaje:
 *                 type: string
 *               FechaEnvio:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Mensaje de buenos deseos actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WellWishID:
 *                   type: string
 *                 EventID:
 *                   type: string
 *                 GuestID:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Mensaje de buenos deseos no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /wellwishes/{id}:
 *   delete:
 *     summary: Elimina un mensaje de buenos deseos
 *     tags:
 *       - WellWishes
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del mensaje de buenos deseos
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mensaje de buenos deseos eliminado
 *       404:
 *         description: Mensaje de buenos deseos no encontrado
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
