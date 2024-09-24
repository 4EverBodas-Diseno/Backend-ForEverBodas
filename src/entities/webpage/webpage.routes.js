// src/entities/webpage/webpage.routes.js
const express = require('express');
const {
  createWebPage,
  getAllWebPages,
  getWebPageById,
  updateWebPage,
  deleteWebPage,
  getWebPageByWeddingID // Importar el nuevo controlador
} = require('./webpage.controller');

const router = express.Router();

router.post('/', createWebPage);
router.get('/', getAllWebPages);
router.get('/:id', getWebPageById);
router.get('/wedding/:id', getWebPageByWeddingID); // Ruta para obtener la página web por WeddingID
router.put('/:id', updateWebPage);
router.delete('/:id', deleteWebPage);

/**
 * @openapi
 * /webpages:
 *   post:
 *     summary: Crea una nueva página web
 *     tags:
 *       - WebPages
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               WebPageID:
 *                 type: string
 *               TemplateID:
 *                 type: string
 *               WeddingID:
 *                 type: string
 *               URLPage:
 *                 type: string
 *               colorPrimario:
 *                 type: string
 *               colorSecundario:
 *                 type: string
 *               colorLetra:
 *                 type: string
 *               tipografia:
 *                 type: string
 *               FechaCreacion:
 *                 type: string
 *                 format: date-time
 *               FechaActualizacion:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Página web creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 TemplateID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 colorPrimario:
 *                   type: string
 *                 colorSecundario:
 *                   type: string
 *                 colorLetra:
 *                   type: string
 *                 tipografia:
 *                   type: string
 *                 FechaCreacion:
 *                   type: string
 *                   format: date-time
 *                 FechaActualizacion:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /webpages:
 *   get:
 *     summary: Obtiene todas las páginas web
 *     tags:
 *       - WebPages
 *     responses:
 *       200:
 *         description: Lista de páginas web
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   WebPageID:
 *                     type: string
 *                   TemplateID:
 *                     type: string
 *                   WeddingID:
 *                     type: string
 *                   URLPage:
 *                     type: string
 *                   colorPrimario:
 *                     type: string
 *                   colorSecundario:
 *                     type: string
 *                   colorLetra:
 *                     type: string
 *                   tipografia:
 *                     type: string
 *                   FechaCreacion:
 *                     type: string
 *                     format: date-time
 *                   FechaActualizacion:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /webpages/{id}:
 *   get:
 *     summary: Obtiene una página web por ID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la página web
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Página web encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 TemplateID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 colorPrimario:
 *                   type: string
 *                 colorSecundario:
 *                   type: string
 *                 colorLetra:
 *                   type: string
 *                 tipografia:
 *                   type: string
 *                 FechaCreacion:
 *                   type: string
 *                   format: date-time
 *                 FechaActualizacion:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Página web no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /webpages/wedding/{id}:
 *   get:
 *     summary: Obtiene una página web por WeddingID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la boda (WeddingID)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Página web encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 TemplateID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 colorPrimario:
 *                   type: string
 *                 colorSecundario:
 *                   type: string
 *                 colorLetra:
 *                   type: string
 *                 tipografia:
 *                   type: string
 *                 FechaCreacion:
 *                   type: string
 *                   format: date-time
 *                 FechaActualizacion:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Página web no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /webpages/{id}:
 *   put:
 *     summary: Actualiza una página web
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la página web
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TemplateID:
 *                 type: string
 *               WeddingID:
 *                 type: string
 *               URLPage:
 *                 type: string
 *               colorPrimario:
 *                 type: string
 *               colorSecundario:
 *                 type: string
 *               colorLetra:
 *                 type: string
 *               tipografia:
 *                 type: string
 *               FechaCreacion:
 *                 type: string
 *                 format: date-time
 *               FechaActualizacion:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Página web actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 TemplateID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 colorPrimario:
 *                   type: string
 *                 colorSecundario:
 *                   type: string
 *                 colorLetra:
 *                   type: string
 *                 tipografia:
 *                   type: string
 *                 FechaCreacion:
 *                   type: string
 *                   format: date-time
 *                 FechaActualizacion:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Página web no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /webpages/{id}:
 *   delete:
 *     summary: Elimina una página web
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la página web
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Página web eliminada
 *       404:
 *         description: Página web no encontrada
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
