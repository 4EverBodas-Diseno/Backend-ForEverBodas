// src/entities/typography/typography.routes.js
const express = require('express');
const {
  createTypography,
  getAllTypographies,
  getTypographyById,
  updateTypography,
  deleteTypography
} = require('./typography.controller');

const router = express.Router();

// Crear una nueva tipografía
/**
 * @openapi
 * /typographies:
 *   post:
 *     summary: Crea una nueva tipografía
 *     tags:
 *       - Typographies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TypographyID:
 *                 type: string
 *               Nombre:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipografía creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 data:
 *                   $ref: '#/components/schemas/Typography'
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createTypography);

// Obtener todas las tipografías
/**
 * @openapi
 * /typographies:
 *   get:
 *     summary: Obtiene todas las tipografías
 *     tags:
 *       - Typographies
 *     responses:
 *       200:
 *         description: Lista de tipografías
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Typography'
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllTypographies);

// Obtener una tipografía por ID
/**
 * @openapi
 * /typographies/{id}:
 *   get:
 *     summary: Obtiene una tipografía por ID
 *     tags:
 *       - Typographies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tipografía
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipografía encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Typography'
 *       404:
 *         description: Tipografía no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', getTypographyById);

// Actualizar una tipografía
/**
 * @openapi
 * /typographies/{id}:
 *   put:
 *     summary: Actualiza una tipografía
 *     tags:
 *       - Typographies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tipografía
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               URL:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipografía actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Typography'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Tipografía no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', updateTypography);

// Eliminar una tipografía
/**
 * @openapi
 * /typographies/{id}:
 *   delete:
 *     summary: Elimina una tipografía
 *     tags:
 *       - Typographies
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tipografía
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipografía eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Tipografía no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', deleteTypography);

module.exports = router;
