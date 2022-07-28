const express = require('express');
const router = express.Router();

const { 
  // GET controllers
  getIndexController, 
  getAllProductsController, 
  getCheckOutController, 
  getCartController,
  getOrdersController,
  getProductController,
  // POST Controllers
  postCartController,
} = require('../controllers/shop');

router.get('/', getIndexController);
router.get('/products', getAllProductsController);
router.get('/products/:id', getProductController);
router.get('/checkout', getCheckOutController);
router.get('/cart', getCartController);
router.post('/cart', postCartController);
router.get('/orders', getOrdersController);

module.exports = router;