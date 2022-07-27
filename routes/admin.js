const express = require('express');
const router = express.Router();

// Imports the admin controlers that contains the logic that renders the Add New Product page and to POST a new product into the DB.
const { 
  getAddProductPageController, 
  postNewProductController, 
  getAdminProducts
} = require('../controllers/admin');


// Add Product => GET
router.get('/admin/addproduct', getAddProductPageController);
// Add Product => POST (post new product)
router.post('/admin/addproduct', postNewProductController);
// Admin products page => GET (yet to finish)
router.get('/admin/products', getAdminProducts);

module.exports = { router };
