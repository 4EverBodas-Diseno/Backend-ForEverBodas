// src/entities/profile/profile.routes.js
const express = require('express');
const {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile
} = require('./profile.controller');

const router = express.Router();


router.post('/', createProfile);
router.get('/', getAllProfiles);
router.get('/:id', getProfileById);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);


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
 *               userID:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               Direccion:
 *                 type: string
 *               FechaNacimiento:
 *                 type: string
 *                 format: date
 *               NombrePareja:
 *                 type: string
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
 *                 userID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *                 NombrePareja:
 *                   type: string
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
 *                   userID:
 *                     type: string
 *                   Telefono:
 *                     type: string
 *                   Direccion:
 *                     type: string
 *                   FechaNacimiento:
 *                     type: string
 *                     format: date
 *                   NombrePareja:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{id}:
 *   get:
 *     summary: Obtiene un perfil por ID
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: id
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
 *                 userID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *                 NombrePareja:
 *                   type: string
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{id}:
 *   put:
 *     summary: Actualiza un perfil
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: id
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
 *               NombrePareja:
 *                 type: string
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
 *                 userID:
 *                   type: string
 *                 Telefono:
 *                   type: string
 *                 Direccion:
 *                   type: string
 *                 FechaNacimiento:
 *                   type: string
 *                   format: date
 *                 NombrePareja:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Perfil no encontrado
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /profiles/{id}:
 *   delete:
 *     summary: Elimina un perfil
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: id
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
