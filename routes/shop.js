const express = require('express');
const router = express.Router();

const { getIndexController, getAllProductsController, getCheckOutController, getCartController } = require('../controllers/shop');
//const getCartController = require('../controllers/cart');
//const getCheckOutController = require('../controllers/checkout');

router.get('/', getIndexController);
router.get('/products', getAllProductsController);
router.get('/checkout', getCheckOutController);
router.get('/cart', getCartController);


module.exports = router;