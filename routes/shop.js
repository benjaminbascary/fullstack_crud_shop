const express = require('express');
const router = express.Router();

const { getAllProductsController } = require('../controllers/products');
const getCartController = require('../controllers/cart');
const getCheckOutController = require('../controllers/checkout');

router.get('/', getAllProductsController);
router.get('/cart', getCartController);
router.get('/checkout', getCheckOutController);

module.exports = router;