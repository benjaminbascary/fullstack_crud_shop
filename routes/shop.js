const express = require('express');
const router = express.Router();

const { 
  // GET controllers
  getIndexController, 
  getAllProductsController, 
  getCheckOutController, 
  /**getOrdersController, */
  getProductController,
  getCartController,
  postCartController,
  deleteFromCartController
} = require('../controllers/shop');

router.get('/', getIndexController);
router.get('/products', getAllProductsController);
router.get('/products/:id', getProductController);
router.get('/checkout', getCheckOutController);
router.get('/cart', getCartController);
router.post('/cart', postCartController);
router.get('/orders', /** getOrdersController*/);
router.post('/cart/deleteitem', deleteFromCartController)

module.exports = router;