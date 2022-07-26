const express = require('express');
const router = express.Router();

const { getIndex, getAllProductsController } = require('../controllers/shop');
//const getCartController = require('../controllers/cart');
//const getCheckOutController = require('../controllers/checkout');

router.get('/', getIndex);
router.get('/products', getAllProductsController);
//router.get('/cart', getCartController);
//router.get('/checkout', getCheckOutController);

module.exports = router;