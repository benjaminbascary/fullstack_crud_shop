const Product = require('../models/product');

const getAllProductsController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/productlist', { products: products, pageTitle: 'Products' });
  })
}


// For the moment this is the same controller as the above, excepts this renders the ./shop/index.ejs view.
const getIndex = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/index', { products: products, pageTitle: 'Home' });
  })
}

module.exports = { getAllProductsController, getIndex };