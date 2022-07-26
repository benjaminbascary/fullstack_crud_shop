const express = require('express');
const router = express.Router();

const { getIndex, getAllProductsController, getCheckOut } = require('../controllers/shop');
//const getCartController = require('../controllers/cart');
//const getCheckOutController = require('../controllers/checkout');

router.get('/', getIndex);
router.get('/products', getAllProductsController);
router.get('/checkout', getCheckOut);
//router.get('/cart', getCartController);
//router.get('/checkout', getCheckOutController);

module.exports = router;