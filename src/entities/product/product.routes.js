// src/entities/product/product.routes.js
const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('./product.controller');
const router = express.Router();

// Rutas CRUD para productos
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
