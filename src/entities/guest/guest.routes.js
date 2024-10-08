// src/entities/guest/guest.routes.js
const express = require('express');
const {
  createGuest,
  getAllGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
  getGuestsByUserID
} = require('./guest.controller');

const router = express.Router();

// Obtener todos los Guests relacionados a un UserID
/**
 * @openapi
 * /guests/user/{UserID}:
 *   get:
 *     summary: Obtiene todos los invitados relacionados a un UserID
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: UserID
 *         in: path
 *         required: true
 *         description: ID del usuario relacionado con los invitados
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de invitados relacionados a un usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Guest'
 *       500:
 *         description: Error al obtener los invitados
 */
router.get('/guests/user/:UserID', getGuestsByUserID);

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


// Obtener un Guest por GuestID
/**
 * @openapi
 * /guests/{GuestID}:
 *   get:
 *     summary: Obtiene un invitado por GuestID
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: GuestID
 *         in: path
 *         required: true
 *         description: GuestID del invitado
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
router.get('/:GuestID', getGuestById);

// Actualizar un Guest por GuestID
/**
 * @openapi
 * /guests/{GuestID}:
 *   put:
 *     summary: Actualiza un invitado
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: GuestID
 *         in: path
 *         required: true
 *         description: GuestID del invitado
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
router.put('/:GuestID', updateGuest);

// Eliminar un Guest por GuestID
/**
 * @openapi
 * /guests/{GuestID}:
 *   delete:
 *     summary: Elimina un invitado
 *     tags:
 *       - Guests
 *     parameters:
 *       - name: GuestID
 *         in: path
 *         required: true
 *         description: GuestID del invitado
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
router.delete('/:GuestID', deleteGuest);

module.exports = router;
