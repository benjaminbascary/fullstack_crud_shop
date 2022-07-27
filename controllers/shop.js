const Product = require('../models/product');

const getAllProductsController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/productlist', { products: products, pageTitle: 'All products' });
  })
}

const getProductController = (req, res, next) => {
  const productId = req.params.id;
  Product.getProductById(productId, (product) => {
    console.log(product)
  });
  res.redirect('/');
}

// For the moment this is the same controller as the above, excepts this renders the ./shop/index.ejs view.
const getIndexController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/index', { products: products, pageTitle: 'Home' });
  })
}

const getCheckOutController = (req, res, next) => {
  res.render('./shop/checkout', { pageTitle: 'Checkout' })
}

const getCartController = (req, res, next) => {
  res.render('./shop/cart', { pageTitle: 'Cart' });
}

const getOrdersController = (req, res, next) => {
  res.render('./shop/orders', { pageTitle: 'Oders'})
}

module.exports = { 
  getAllProductsController, 
  getIndexController, 
  getCheckOutController, 
  getCartController,
  getOrdersController,
  getProductController
};