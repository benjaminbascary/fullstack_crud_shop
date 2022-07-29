const express = require('express');
const router = express.Router();

// Admin controllers.
const { 
  getAddProductPageController, 
  postNewProductController, 
  getAdminProducts,
  getEditPageController,
  postEditProductController,
  deleteProductController
} = require('../controllers/admin');


// Add Product => GET
router.get('/admin/addproduct', getAddProductPageController);
// Add Product => POST (post new product)
router.post('/admin/addproduct', postNewProductController);
// Admin products page => GET
router.get('/admin/products', getAdminProducts);
// Admin Edit Product page => GET
router.get('/admin/editproduct/:id', getEditPageController);
// Edit product => POST
router.post('/admin/editproduct', postEditProductController);
// Delete product => POST
router.post('/admin/deleteproduct/:id', deleteProductController);

module.exports = { router };
