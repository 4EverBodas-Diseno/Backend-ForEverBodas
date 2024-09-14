// src/entities/notification/notification.routes.js
const express = require('express');
const {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
} = require('./notification.controller');

const router = express.Router();


router.post('/', createNotification);
router.get('/', getAllNotifications);
router.get('/:id', getNotificationById);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);


/**
 * @openapi
 * /notifications:
 *   post:
 *     summary: Crea una nueva notificación
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NotificationID:
 *                 type: string
 *               Tipo:
 *                 type: string
 *               Mensaje:
 *                 type: string
 *               FechaEnvio:
 *                 type: string
 *                 format: date-time
 *               EventID:
 *                 type: string
 *     responses:
 *       201:
 *         description: Notificación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 NotificationID:
 *                   type: string
 *                 Tipo:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *                 EventID:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /notifications:
 *   get:
 *     summary: Obtiene todas las notificaciones
 *     tags:
 *       - Notifications
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   NotificationID:
 *                     type: string
 *                   Tipo:
 *                     type: string
 *                   Mensaje:
 *                     type: string
 *                   FechaEnvio:
 *                     type: string
 *                     format: date-time
 *                   EventID:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /notifications/{id}:
 *   get:
 *     summary: Obtiene una notificación por ID
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la notificación
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 NotificationID:
 *                   type: string
 *                 Tipo:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *                 EventID:
 *                   type: string
 *       404:
 *         description: Notificación no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /notifications/{id}:
 *   put:
 *     summary: Actualiza una notificación
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la notificación
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Tipo:
 *                 type: string
 *               Mensaje:
 *                 type: string
 *               FechaEnvio:
 *                 type: string
 *                 format: date-time
 *               EventID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notificación actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 NotificationID:
 *                   type: string
 *                 Tipo:
 *                   type: string
 *                 Mensaje:
 *                   type: string
 *                 FechaEnvio:
 *                   type: string
 *                   format: date-time
 *                 EventID:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Notificación no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /notifications/{id}:
 *   delete:
 *     summary: Elimina una notificación
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la notificación
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificación eliminada
 *       404:
 *         description: Notificación no encontrada
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
