const Product = require('../models/product');
const Cart = require('../models/cart');




const getAllProductsController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/productlist', { products: products, pageTitle: 'All products' });
  })
}

const getProductController = (req, res, next) => {
  const productId = req.params.id;
  Product.getProductById(productId, (product) => {
    res.render('./shop/productdetails', {product: product, pageTitle: product.name});
  });
}

const getIndexController = (req, res, next) => {
  Product.getProducts(products => {
    res.render('./shop/index', { products: products, pageTitle: 'Home' });
  })
}

const getCheckOutController = (req, res, next) => {
  res.render('./shop/checkout', { pageTitle: 'Checkout' })
}

const getCartController = (req, res, next) => {
  Cart.getAllProductsFromCart(products => {
    res.render('./shop/cart', { pageTitle: 'Your cart 2', products: products.fullProducts, totalPrice: products.totalPrice })
  })
}

const postCartController = (req, res, next) => {
  const productId = req.body.id;
  Product.getProductById(productId, (product) => {
    Cart.addProduct(productId, product, product.price);
  });
  res.redirect('/cart');
}

const deleteFromCartController = (req, res, next) => {
  const id = req.body.id;
  async function deleteProductFromCart() {
    await Cart.deleteProductFromCart(id);
  }

  deleteProductFromCart();
  res.redirect('/cart');
}

const getOrdersController = (req, res, next) => {
  res.render('./shop/orders', { pageTitle: 'Oders'})
}



module.exports = { 
  getAllProductsController, 
  getIndexController, 
  getCheckOutController, 
  getOrdersController,
  getProductController,
  postCartController,
  getCartController,
  deleteFromCartController
};