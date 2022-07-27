const express = require('express');
const router = express.Router();

const { 
  getIndexController, 
  getAllProductsController, 
  getCheckOutController, 
  getCartController,
  getOrdersController
} = require('../controllers/shop');

router.get('/', getIndexController);
router.get('/products', getAllProductsController);
router.get('/checkout', getCheckOutController);
router.get('/cart', getCartController);
router.get('/orders', getOrdersController);

module.exports = router;