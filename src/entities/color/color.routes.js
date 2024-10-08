// src/entities/color/color.routes.js
const express = require('express');
const {
  createColor,
  getAllColors,
  getColorById,
  updateColor,
  deleteColor
} = require('./color.controller');

const router = express.Router();

// Crear un nuevo Color
/**
 * @openapi
 * /colors:
 *   post:
 *     summary: Crea un nuevo esquema de color
 *     tags:
 *       - Colors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ColorID:
 *                 type: string
 *                 description: Identificador único del color
 *               colorPrimario:
 *                 type: string
 *                 description: Color principal de la página (código hexadecimal)
 *               colorSecundario:
 *                 type: string
 *                 description: Color secundario de la página (código hexadecimal)
 *               colorLetra:
 *                 type: string
 *                 description: Color de la tipografía (código hexadecimal)
 *     responses:
 *       201:
 *         description: Color creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ColorID:
 *                   type: string
 *                   description: Identificador único del esquema de color
 *                 colorPrimario:
 *                   type: string
 *                   description: Color principal de la página
 *                 colorSecundario:
 *                   type: string
 *                   description: Color secundario de la página
 *                 colorLetra:
 *                   type: string
 *                   description: Color de la tipografía
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createColor);

// Obtener todos los Colors
/**
 * @openapi
 * /colors:
 *   get:
 *     summary: Obtiene todos los esquemas de color
 *     tags:
 *       - Colors
 *     responses:
 *       200:
 *         description: Lista de esquemas de color
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ColorID:
 *                     type: string
 *                     description: Identificador único del esquema de color
 *                   colorPrimario:
 *                     type: string
 *                     description: Color principal de la página
 *                   colorSecundario:
 *                     type: string
 *                     description: Color secundario de la página
 *                   colorLetra:
 *                     type: string
 *                     description: Color de la tipografía
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllColors);


// Obtener un Color por ID
/**
 * @openapi
 * /colors/{id}:
 *   get:
 *     summary: Obtiene un esquema de color por ID
 *     tags:
 *       - Colors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del esquema de color
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Esquema de color encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ColorID:
 *                   type: string
 *                   description: Identificador único del esquema de color
 *                 colorPrimario:
 *                   type: string
 *                   description: Color principal de la página
 *                 colorSecundario:
 *                   type: string
 *                   description: Color secundario de la página
 *                 colorLetra:
 *                   type: string
 *                   description: Color de la tipografía
 *       404:
 *         description: Esquema de color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', getColorById);

// Actualizar un Color
/**
 * @openapi
 * /colors/{id}:
 *   put:
 *     summary: Actualiza un esquema de color
 *     tags:
 *       - Colors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del esquema de color
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               colorPrimario:
 *                 type: string
 *                 description: Nuevo color principal (código hexadecimal)
 *               colorSecundario:
 *                 type: string
 *                 description: Nuevo color secundario (código hexadecimal)
 *               colorLetra:
 *                 type: string
 *                 description: Nuevo color de la tipografía (código hexadecimal)
 *     responses:
 *       200:
 *         description: Esquema de color actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ColorID:
 *                   type: string
 *                   description: Identificador único del esquema de color
 *                 colorPrimario:
 *                   type: string
 *                   description: Color principal de la página
 *                 colorSecundario:
 *                   type: string
 *                   description: Color secundario de la página
 *                 colorLetra:
 *                   type: string
 *                   description: Color de la tipografía
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Esquema de color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', updateColor);

// Eliminar un Color
/**
 * @openapi
 * /colors/{id}:
 *   delete:
 *     summary: Elimina un esquema de color
 *     tags:
 *       - Colors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del esquema de color
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Esquema de color eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación de eliminación
 *       404:
 *         description: Esquema de color no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', deleteColor);

module.exports = router;
