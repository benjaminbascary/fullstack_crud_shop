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

// const getCartController = (req, res, next) => {
//   Cart.getAllProductsFromCart(products => {
//     res.render('./shop/cart', { pageTitle: 'Your cart', products: products.products, totalPrice: products.totalPrice });
//   })

// }

// This function is named lake this because it is the refactoring from getCartController that is up here commented
const getFullCartController = (req, res, next) => {
  Cart.getFullProductsFromCart(products => {
    console.log(products.products)
    res.render('./shop/cart', { pageTitle: 'Your cart 2', products: products.fullProducts, totalPrice: products.totalPrice })
  })
}

const postFullCartController = (req, res, next) => {
  const productId = req.body.id;
  const fullProduct = req.body.fullProduct;
  console.log(fullProduct);
  Product.getProductById(productId, (product) => {

    console.log({id: productId, product: product});

    Cart.addFullProduct(productId, product, product.price);
  });
  res.redirect('/cart');
}

const deleteFromCartController = (req, res, next) => {
  const id = req.body.id;
  const price = req.body.price
  console.log(id);
  async function deleteProductFromFullCart() {
    await Cart.deleteProductFromFullCart(id);
  }

  deleteProductFromFullCart();
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
  postFullCartController,
  getFullCartController,
  deleteFromCartController
};