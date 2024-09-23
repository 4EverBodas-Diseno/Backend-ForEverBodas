// src/entities/template/template.routes.test.js
const express = require('express');
const {
  createTemplate,
  getAllTemplates,
  getTemplateById,
  updateTemplate,
  deleteTemplate
} = require('./template.controller');

const router = express.Router();

router.post('/', createTemplate);
router.get('/', getAllTemplates);
router.get('/:id', getTemplateById);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);


/**
 * @openapi
 * /templates:
 *   post:
 *     summary: Crea una nueva plantilla
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TemplateID:
 *                 type: string
 *               NombrePlantilla:
 *                 type: string
 *               TypograhyNom:
 *                 type: string
 *               URLTypography:
 *                 type: string
 *               ColorPrim:
 *                 type: string
 *               ColorSec:
 *                 type: string
 *               ColorLetra:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plantilla creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 TemplateID:
 *                   type: string
 *                 NombrePlantilla:
 *                   type: string
 *                 TypograhyNom:
 *                   type: string
 *                 URLTypography:
 *                   type: string
 *                 ColorPrim:
 *                   type: string
 *                 ColorSec:
 *                   type: string
 *                 ColorLetra:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @openapi
 * /templates:
 *   get:
 *     summary: Obtiene todas las plantillas
 *     tags:
 *       - Templates
 *     responses:
 *       200:
 *         description: Lista de plantillas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   TemplateID:
 *                     type: string
 *                   NombrePlantilla:
 *                     type: string
 *                   TypograhyNom:
 *                     type: string
 *                   URLTypography:
 *                     type: string
 *                   ColorPrim:
 *                     type: string
 *                   ColorSec:
 *                     type: string
 *                   ColorLetra:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /templates/{id}:
 *   get:
 *     summary: Obtiene una plantilla por ID
 *     tags:
 *       - Templates
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la plantilla
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plantilla encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 TemplateID:
 *                   type: string
 *                 NombrePlantilla:
 *                   type: string
 *                 TypograhyNom:
 *                   type: string
 *                 URLTypography:
 *                   type: string
 *                 ColorPrim:
 *                   type: string
 *                 ColorSec:
 *                   type: string
 *                 ColorLetra:
 *                   type: string
 *       404:
 *         description: Plantilla no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /templates/{id}:
 *   put:
 *     summary: Actualiza una plantilla
 *     tags:
 *       - Templates
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la plantilla
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NombrePlantilla:
 *                 type: string
 *               TypograhyNom:
 *                 type: string
 *               URLTypography:
 *                 type: string
 *               ColorPrim:
 *                 type: string
 *               ColorSec:
 *                 type: string
 *               ColorLetra:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plantilla actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 TemplateID:
 *                   type: string
 *                 NombrePlantilla:
 *                   type: string
 *                 TypograhyNom:
 *                   type: string
 *                 URLTypography:
 *                   type: string
 *                 ColorPrim:
 *                   type: string
 *                 ColorSec:
 *                   type: string
 *                 ColorLetra:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Plantilla no encontrada
 *       500:
 *         description: Error del servidor
 */

/**
 * @openapi
 * /templates/{id}:
 *   delete:
 *     summary: Elimina una plantilla
 *     tags:
 *       - Templates
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la plantilla
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plantilla eliminada
 *       404:
 *         description: Plantilla no encontrada
 *       500:
 *         description: Error del servidor
 */

module.exports = router;
