// src/entities/guest/guest.routes.js
const express = require('express');
const {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  deleteGuest
} = require('./guest.controller');

const router = express.Router();


router.post('/', createGuest);
router.get('/', getAllGuests);
router.get('/:id', getGuestById);
router.put('/:id', updateGuest);
router.delete('/:id', deleteGuest);


/**
 * @openapi
 * /guests:
 *   post:
 *     summary: Crea un nuevo invitado
 *     tags:
 *       - Guests
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               GuestID:
 *                 type: string
 *               WebPageID:
 *                 type: string
 *               UserID:
 *                 type: string
 *               Nombre:
 *                 type: string
 *               Correo:
 *                 type: string
 *               EstadoInvitacion:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       201:
 *         description: Invitado creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WebPageID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 EstadoInvitacion:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 URL:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /guests:
 *   get:
 *     summary: Obtiene todos los invitados
 *     tags:
 *       - Guests
 *     responses:
 *       200:
 *         description: Lista de invitados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   GuestID:
 *                     type: string
 *                   WebPageID:
 *                     type: string
 *                   UserID:
 *                     type: string
 *                   Nombre:
 *                     type: string
 *                   Correo:
 *                     type: string
 *                   EstadoInvitacion:
 *                     type: string
 *                   Telefono:
 *                     type: string
 *                   URL:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /guests/{id}:
 *   get:
 *     summary: Obtiene un invitado por ID
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del invitado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Invitado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WebPageID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 EstadoInvitacion:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 URL:
 *                   type: string
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /guests/{id}:
 *   put:
 *     summary: Actualiza un invitado
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del invitado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WebPageID:
 *                 type: string
 *               UserID:
 *                 type: string
 *               Nombre:
 *                 type: string
 *               Correo:
 *                 type: string
 *               EstadoInvitacion:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       200:
 *         description: Invitado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 WebPageID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 EstadoInvitacion:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 URL:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /guests/{id}:
 *   delete:
 *     summary: Elimina un invitado
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del invitado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Invitado eliminado
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
