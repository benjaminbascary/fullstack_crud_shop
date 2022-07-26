const Product = require('../models/product');

const getAllProductsController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/productlist', { products: products, pageTitle: 'All products' });
  })
}

// For the moment this is the same controller as the above, excepts this renders the ./shop/index.ejs view.
const getIndexController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/index', { products: products, pageTitle: 'Home' });
  })
}

const getCheckOutController = (req, res, next) => {
  res.render('./shop/checkout', {pageTitle: 'Checkout'})
}

const getCartController = (req, res, next) => {
  res.render('./shop/cart', {pageTitle: 'Cart' });
}
module.exports = { getAllProductsController, getIndexController, getCheckOutController, getCartController };