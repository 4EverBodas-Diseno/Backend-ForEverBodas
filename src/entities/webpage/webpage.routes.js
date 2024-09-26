const express = require('express');
const {
  createWebPage,
  getAllWebPages,
  getWebPageById,
  updateWebPage,
  deleteWebPage,
  getWebPageByWeddingID,
  getAllTypographies,
  getAllColors
} = require('./webpage.controller');

const router = express.Router();

// Routes

/**
 * @openapi
 * /webpages:
 *   post:
 *     summary: Creates a new web page
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
 *               WeddingID:
 *                 type: string
 *               URLPage:
 *                 type: string
 *               Styles:
 *                 type: object
 *                 properties:
 *                   primaryColor:
 *                     type: string
 *                   secondaryColor:
 *                     type: string
 *                   Typography:
 *                     type: string
 *     responses:
 *       201:
 *         description: Web page created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 Styles:
 *                   type: object
 *                   properties:
 *                     primaryColor:
 *                       type: string
 *                     secondaryColor:
 *                       type: string
 *                     Typography:
 *                       type: string
 *       400:
 *         description: Error in the request, possibly because a page for this wedding already exists
 */
router.post('/', createWebPage); // Create a new web page

/**
 * @openapi
 * /webpages:
 *   get:
 *     summary: Retrieves all web pages
 *     tags:
 *       - WebPages
 *     responses:
 *       200:
 *         description: List of web pages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   WebPageID:
 *                     type: string
 *                   WeddingID:
 *                     type: string
 *                   URLPage:
 *                     type: string
 *                   Styles:
 *                     type: object
 *                     properties:
 *                       primaryColor:
 *                         type: string
 *                       secondaryColor:
 *                         type: string
 *                       Typography:
 *                         type: string
 *       500:
 *         description: Server error
 */
router.get('/', getAllWebPages); // Get all web pages

/**
 * @openapi
 * /webpages/{id}:
 *   get:
 *     summary: Retrieves a web page by ID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the web page
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Web page found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 Styles:
 *                   type: object
 *                   properties:
 *                     primaryColor:
 *                       type: string
 *                     secondaryColor:
 *                       type: string
 *                     Typography:
 *                       type: string
 *       404:
 *         description: Web page not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getWebPageById); // Get web page by ID

/**
 * @openapi
 * /webpages/wedding/{id}:
 *   get:
 *     summary: Retrieves a web page by WeddingID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: WeddingID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Web page found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 Styles:
 *                   type: object
 *                   properties:
 *                     primaryColor:
 *                       type: string
 *                     secondaryColor:
 *                       type: string
 *                     Typography:
 *                       type: string
 *       404:
 *         description: Web page not found
 *       500:
 *         description: Server error
 */
router.get('/wedding/:id', getWebPageByWeddingID); // Get web page by WeddingID

/**
 * @openapi
 * /webpages/{id}:
 *   put:
 *     summary: Updates a web page
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the web page
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               URLPage:
 *                 type: string
 *               Styles:
 *                 type: object
 *                 properties:
 *                   primaryColor:
 *                     type: string
 *                   secondaryColor:
 *                     type: string
 *                   Typography:
 *                     type: string
 *     responses:
 *       200:
 *         description: Web page updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 WebPageID:
 *                   type: string
 *                 WeddingID:
 *                   type: string
 *                 URLPage:
 *                   type: string
 *                 Styles:
 *                   type: object
 *                   properties:
 *                     primaryColor:
 *                       type: string
 *                     secondaryColor:
 *                       type: string
 *                     Typography:
 *                       type: string
 *       400:
 *         description: Error in the request
 *       404:
 *         description: Web page not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateWebPage); // Update a web page by ID

/**
 * @openapi
 * /webpages/{id}:
 *   delete:
 *     summary: Deletes a web page
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the web page
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Web page deleted
 *       404:
 *         description: Web page not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteWebPage); // Delete a web page by ID

// New routes for obtaining all typographies and colors
/**
 * @openapi
 * /typographies:
 *   get:
 *     summary: Retrieves all typographies
 *     tags:
 *       - Typographies
 *     responses:
 *       200:
 *         description: List of typographies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   TypographyID:
 *                     type: string
 *                   Name:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/typographies', getAllTypographies); // Get all typographies

/**
 * @openapi
 * /colors:
 *   get:
 *     summary: Retrieves all colors
 *     tags:
 *       - Colors
 *     responses:
 *       200:
 *         description: List of colors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ColorID:
 *                     type: string
 *                   Name:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/colors', getAllColors); // Get all colors

module.exports = router;
