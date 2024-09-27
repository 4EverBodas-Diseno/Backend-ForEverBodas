// src/entities/profile/profile.routes.js
const express = require('express');
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  updateProfilePartial
} = require('./profile.controller');

const router = express.Router();

router.post('/', createProfile);
router.get('/', getAllProfiles);
router.get('/:profileID', getProfileById);
router.put('/:profileID', updateProfile);
router.patch('/:profileID', updateProfilePartial);
router.delete('/:profileID', deleteProfile);


/**
 * @openapi
 * /profiles:
 *   post:
 *     summary: Crea un nuevo perfil
 *     tags:
 *       - Profiles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               profileID:
 *                 type: string
 *               UserID:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               FechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Perfil creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profileID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /profiles:
 *   get:
 *     summary: Obtiene todos los perfiles
 *     tags:
 *       - Profiles
 *     responses:
 *       200:
 *         description: Lista de perfiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   profileID:
 *                     type: string
 *                   UserID:
 *                     type: string
 *                   Telefono:
 *                     type: string
 *                   Direccion:
 *                     type: string
 *                   FechaNacimiento:
 *                     type: string
 *                     format: date
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{profileID}:
 *   get:
 *     summary: Obtiene un perfil por profileID
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: profileID
 *         in: path
 *         required: true
 *         description: ID del perfil
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profileID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{profileID}:
 *   put:
 *     summary: Actualiza un perfil
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: profileID
 *         in: path
 *         required: true
 *         description: ID del perfil
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Telefono:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               FechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Perfil actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profileID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{profileID}:
 *   patch:
 *     summary: Actualiza parcialmente un perfil
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: profileID
 *         in: path
 *         required: true
 *         description: ID del perfil
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
 *               Telefono:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               FechaNacimiento:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Perfil actualizado parcialmente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profileID:
 *                   type: string
 *                 UserID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{profileID}:
 *   delete:
 *     summary: Elimina un perfil
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: profileID
 *         in: path
 *         required: true
 *         description: ID del perfil
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil eliminado
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
