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
 * /webpages/{WebPageID}:
 *   get:
 *     summary: Retrieves a web page by WebPageID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: WebPageID
 *         in: path
 *         required: true
 *         description: WebPageID of the web page
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
router.get('/:WebPageID', getWebPageById); // Get web page by WebPageID

/**
 * @openapi
 * /webpages/wedding/{WeddingID}:
 *   get:
 *     summary: Retrieves a web page by WeddingID
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: WeddingID
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
router.get('/wedding/:WeddingID', getWebPageByWeddingID); // Get web page by WeddingID

/**
 * @openapi
 * /webpages/{WebPageID}:
 *   put:
 *     summary: Updates a web page
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: WebPageID
 *         in: path
 *         required: true
 *         description: WebPageID of the web page
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
router.put('/:WebPageID', updateWebPage); // Update a web page by WebPageID

/**
 * @openapi
 * /webpages/{WebPageID}:
 *   delete:
 *     summary: Deletes a web page
 *     tags:
 *       - WebPages
 *     parameters:
 *       - name: WebPageID
 *         in: path
 *         required: true
 *         description: WebPageID of the web page
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
router.delete('/:WebPageID', deleteWebPage); // Delete a web page by WebPageID

// New routes for obtaining all typographies and colors
/**
 * @openapi
 * /webpages/typographies:
 *   get:
 *     summary: Retrieves all typographies
 *     tags:
 *       - WebPages
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
 *                   Typography:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/typographies', getAllTypographies); // Get all typographies

/**
 * @openapi
 * /webpages/colors:
 *   get:
 *     summary: Retrieves all colors
 *     tags:
 *       - WebPages
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
 *                   Color:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/colors', getAllColors); // Get all colors

module.exports = router;