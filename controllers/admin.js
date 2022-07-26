const Product = require('../models/product');

const getAddProductPageController = (req, res, next) => {
  res.render('./admin/addproduct', { pageTitle: 'Add Productt' });
}

const postNewProductController = (req, res, next) => {
  const product = new Product(req.body.product, req.body.price);
  product.saveProduct();
  res.redirect('/');
}

const getAdminProducts = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./admin/products', { products: products, pageTitle: 'Admin Products' });
  })
}

module.exports = { getAddProductPageController, postNewProductController, getAdminProducts };