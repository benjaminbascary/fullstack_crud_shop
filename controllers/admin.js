const Product = require('../models/product');

const getAddProductPageController = (req, res, next) => {
  res.render('./admin/addproduct', { pageTitle: 'Add Productt' });
}

const postNewProductController = (req, res, next) => {
  const product = new Product(req.body.product, req.body.price);
  product.saveProduct();
  res.redirect('/');
}

module.exports = { getAddProductPageController, postNewProductController };