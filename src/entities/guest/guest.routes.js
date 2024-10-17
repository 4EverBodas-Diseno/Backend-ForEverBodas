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
 *                 type: object
 *                 properties:
 *                   GuestID:
 *                     type: string
 *                   UserID:
 *                     type: string
 *                   Nombre:
 *                     type: string
 *                   Correo:
 *                     type: string
 *                   EstadoInvitacion:
 *                     type: string
 *                   Confirmado:
 *                     type: boolean
 *                   numMaxAcompanantes:
 *                     type: number
 *                   numAcompanantes:
 *                     type: number
 *                   Telefono:
 *                     type: string
 *                   URL:
 *                     type: string
 *       500:
 *         description: Error al obtener los invitados
 */
router.get('/user/:UserID', getGuestsByUserID);

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
 *                   type: object
 *                   properties:
 *                     GuestID:
 *                       type: string
 *                     UserID:
 *                       type: string
 *                     Nombre:
 *                       type: string
 *                     Correo:
 *                       type: string
 *                     EstadoInvitacion:
 *                       type: string
 *                     Confirmado:
 *                       type: boolean
 *                     numMaxAcompanantes:
 *                       type: number
 *                     numAcompanantes:
 *                       type: number
 *                     Telefono:
 *                       type: string
 *                     URL:
 *                       type: string
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

// Obtener todos los invitados agrupados por UserID
/**
 * @openapi
 * /guests:
 *   get:
 *     summary: Obtiene todos los invitados agrupados por UserID
 *     tags:
 *       - Guests
 *     responses:
 *       200:
 *         description: Lista de invitados agrupados por UserID con el total de invitados y confirmados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: El UserID al que pertenecen los invitados
 *                   guests:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         GuestID:
 *                           type: string
 *                         UserID:
 *                           type: string
 *                         Nombre:
 *                           type: string
 *                         Correo:
 *                           type: string
 *                         EstadoInvitacion:
 *                           type: string
 *                         Confirmado:
 *                           type: boolean
 *                         numMaxAcompanantes:
 *                           type: number
 *                         numAcompanantes:
 *                           type: number
 *                         Telefono:
 *                           type: string
 *                         URL:
 *                           type: string
 *                   totalInvitados:
 *                     type: number
 *                     description: Total de invitados por UserID
 *                   totalConfirmados:
 *                     type: number
 *                     description: Total de invitados confirmados por UserID
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllGuests);

// Obtener un invitado por GuestID
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
 *               type: object
 *               properties:
 *                 GuestID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Nombre:
 *                   type: string
 *                 Correo:
 *                   type: string
 *                 EstadoInvitacion:
 *                   type: string
 *                 Confirmado:
 *                   type: boolean
 *                 numMaxAcompanantes:
 *                   type: number
 *                 numAcompanantes:
 *                   type: number
 *                 Telefono:
 *                   type: string
 *                 URL:
 *                   type: string
 *       404:
 *         description: Invitado no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:GuestID', getGuestById);

// Actualizar parcialmente un Guest por GuestID
/**
 * @openapi
 * /guests/{GuestID}:
 *   patch:
 *     summary: Actualiza parcialmente un invitado
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
 *                   type: object
 *                   properties:
 *                     GuestID:
 *                       type: string
 *                     UserID:
 *                       type: string
 *                     Nombre:
 *                       type: string
 *                     Correo:
 *                       type: string
 *                     EstadoInvitacion:
 *                       type: string
 *                     Confirmado:
 *                       type: boolean
 *                     numMaxAcompanantes:
 *                       type: number
 *                     numAcompanantes:
 *                       type: number
 *                     Telefono:
 *                       type: string
 *                     URL:
 *                       type: string
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
router.patch('/:GuestID', updateGuest);

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
