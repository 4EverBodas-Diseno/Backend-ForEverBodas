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

// Crear un nuevo Guest
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
 *               Confirmado:
 *                 type: boolean
 *                 description: Indica si el invitado ha confirmado su asistencia
 *               numMaxAcompanantes:
 *                 type: number
 *                 description: Número máximo de acompañantes permitidos
 *               numAcompanantes:
 *                 type: number
 *                 description: Número de acompañantes confirmados
 *               Telefono:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       201:
 *         description: Invitado creado exitosamente con el total de invitados y confirmados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 guest:
 *                   $ref: '#/components/schemas/Guest'
 *                 totalInvitados:
 *                   type: number
 *                   description: Total de invitados
 *                 totalConfirmados:
 *                   type: number
 *                   description: Total de invitados confirmados
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createGuest);

// Obtener todos los Guests
/**
 * @openapi
 * /guests:
 *   get:
 *     summary: Obtiene todos los invitados
 *     tags:
 *       - Guests
 *     responses:
 *       200:
 *         description: Lista de invitados con el total de invitados y confirmados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 guests:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Guest'
 *                 totalInvitados:
 *                   type: number
 *                   description: Total de invitados
 *                 totalConfirmados:
 *                   type: number
 *                   description: Total de invitados confirmados
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllGuests);

// Obtener un Guest por ID
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
 *               $ref: '#/components/schemas/Guest'
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', getGuestById);

// Actualizar un Guest
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
 *               Confirmado:
 *                 type: boolean
 *               numMaxAcompanantes:
 *                 type: number
 *               numAcompanantes:
 *                 type: number
 *               Telefono:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       200:
 *         description: Invitado actualizado y total de confirmados recalculado si es necesario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedGuest:
 *                   $ref: '#/components/schemas/Guest'
 *                 totalConfirmados:
 *                   type: number
 *                   description: Total de confirmados tras la actualización
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', updateGuest);

// Eliminar un Guest
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
 *         description: Invitado eliminado y totales de invitados y confirmados actualizados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Invitado eliminado exitosamente
 *                 totalInvitados:
 *                   type: number
 *                   description: Total de invitados después de eliminar
 *                 totalConfirmados:
 *                   type: number
 *                   description: Total de confirmados después de eliminar
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', deleteGuest);

module.exports = router;
