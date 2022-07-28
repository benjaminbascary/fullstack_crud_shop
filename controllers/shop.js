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
  Cart.getAllProductsFromCart(products => {
    res.render('./shop/cart', { pageTitle: 'Your cart', products: products.products, totalPrice: products.totalPrice });
  })

}

const postCartController = (req, res, next) => {
  const productId = req.body.id;
  Product.getProductById(productId, (product) => {
    console.log({p: productId, pp: product.price})
    Cart.addProduct(productId, product.price);
  });
  res.redirect('/cart');
  
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
  getProductController,
  postCartController
};