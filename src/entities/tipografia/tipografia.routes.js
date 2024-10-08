// src/entities/tipografia/tipografia.routes.js
const express = require('express');
const {
  createTipografia,
  getAllTipografias,
  getTipografiaById,
  updateTipografia,
  deleteTipografia
} = require('./tipografia.controller');

const router = express.Router();

// Crear una nueva tipografía
/**
 * @openapi
 * /tipografias:
 *   post:
 *     summary: Crea una nueva tipografía
 *     tags:
 *       - Tipografías
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TipografiaID:
 *                 type: string
 *                 description: ID único de la tipografía
 *               Front:
 *                 type: string
 *                 description: Tipografía principal de la página
 *               FrontURL:
 *                 type: string
 *                 description: Tipografía secundaria de la página
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
 *                   type: object
 *                   properties:
 *                     TipografiaID:
 *                       type: string
 *                       description: ID único de la tipografía
 *                     Front:
 *                       type: string
 *                       description: Tipografía principal de la página
 *                     FrontURL:
 *                       type: string
 *                       description: Tipografía secundaria de la página
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createTipografia);

// Obtener todas las tipografías
/**
 * @openapi
 * /tipografias:
 *   get:
 *     summary: Obtiene todas las tipografías
 *     tags:
 *       - Tipografías
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
 *                     type: object
 *                     properties:
 *                       TipografiaID:
 *                         type: string
 *                         description: ID único de la tipografía
 *                       Front:
 *                         type: string
 *                         description: Tipografía principal de la página
 *                       FrontURL:
 *                         type: string
 *                         description: Tipografía secundaria de la página
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllTipografias);

// Obtener una tipografía por ID
/**
 * @openapi
 * /tipografias/{TipografiaID}:
 *   get:
 *     summary: Obtiene una tipografía por ID
 *     tags:
 *       - Tipografías
 *     parameters:
 *       - name: TipografiaID
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
 *               type: object
 *               properties:
 *                 TipografiaID:
 *                   type: string
 *                   description: ID único de la tipografía
 *                 Front:
 *                   type: string
 *                   description: Tipografía principal de la página
 *                 FrontURL:
 *                   type: string
 *                   description: Tipografía secundaria de la página
 *       404:
 *         description: Tipografía no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:TipografiaID', getTipografiaById);

// Actualizar una tipografía
/**
 * @openapi
 * /tipografias/{TipografiaID}:
 *   put:
 *     summary: Actualiza una tipografía
 *     tags:
 *       - Tipografías
 *     parameters:
 *       - name: TipografiaID
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
 *               Front:
 *                 type: string
 *                 description: Tipografía principal de la página
 *               FrontURL:
 *                 type: string
 *                 description: Tipografía secundaria de la página
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
 *                   type: object
 *                   properties:
 *                     TipografiaID:
 *                       type: string
 *                       description: ID único de la tipografía
 *                     Front:
 *                       type: string
 *                       description: Tipografía principal de la página
 *                     FrontURL:
 *                       type: string
 *                       description: Tipografía secundaria de la página
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Tipografía no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:TipografiaID', updateTipografia);

// Eliminar una tipografía
/**
 * @openapi
 * /tipografias/{TipografiaID}:
 *   delete:
 *     summary: Elimina una tipografía
 *     tags:
 *       - Tipografías
 *     parameters:
 *       - name: TipografiaID
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
router.delete('/:TipografiaID', deleteTipografia);

module.exports = router;
