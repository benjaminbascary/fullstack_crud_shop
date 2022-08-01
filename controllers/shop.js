const Product = require('../models/product');
const Cart = require('../models/cart');


const getIndexController = (req, res, next) => {
  Product.getProducts()
  .then(([rows, fieldData]) => {
    res.render('./shop/index', { products: rows, pageTitle: 'Home' });
  })
  .catch((err) => {
    console.log(err);
  })
}

const getAllProductsController = (req, res, next) => {
  Product.getProducts()
  .then(([rows, fieldData]) => {
    res.render('./shop/productslist', { products: rows, pageTitle: 'All products' });
  })
  .catch((err) => {
    console.log(err);
  })
}

const getProductController = (req, res, next) => {
  const productId = req.params.id;
  Product.getProductById(productId)
    .then(([rows, fieldData]) => {
      res.render('./shop/productdetails', { product: rows[0], pageTitle: 'Details' });
    })
    .catch((err) => {
      console.log(err);
    })
}

const getCheckOutController = (req, res, next) => {
  res.render('./shop/checkout', { pageTitle: 'Checkout' });
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