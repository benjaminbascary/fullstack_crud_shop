const Product = require('../models/product');
//const Cart = require('../models/cart');


const getIndexController = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('./shop/index', { products: products, pageTitle: 'Home' });
    })
    .catch(err => {
      console.log(err);
    })
}

const getAllProductsController = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('./shop/productlist', { products: products, pageTitle: 'Products' });
    })
    .catch(err => {
      console.log(err);
    })
}

const getProductController = (req, res, next) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then(product => {
      res.render('./shop/productdetails', { product: product, pageTitle: product.name });
    })
    .catch(err => {
      console.log(err);
    })
    
}

const getCheckOutController = (req, res, next) => {
  res.render('./shop/checkout', { pageTitle: 'Checkout' });
}

const getCartController = (req, res, next) => {
  // req.user.getCart()
  //   .then(cart => {
  //     return cart.getProducts()
  //       .then(products => {
  //         console.log("Here is the CART:")
  //         console.log(products)
  //         res.render('./shop/cart', { pageTitle: 'Your cart', products: products })
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

const postCartController = (req, res, next) => {
  // const productId = req.body.id;
  // let fetchedCart; 
  // req.user.getCart()
  //   .then(cart => {
  //     fetchedCart = cart;
  //     return cart.getProducts({where: {id: productId} })
  //   })
  //   .then(products => {
  //     let product;
  //     if (products.length > 0) {
  //       product = products[0]
  //     }
  //     let newQuantity = 1;
  //     if (product) {
  //       const oldQuantity = product.cartItem.quantity;
  //       newQuantity = oldQuantity + 1;
  //       return fetchedCart.addProduct(product, {through: {quantity: newQuantity}})
  //     }
  //     return Product.findByPk(productId)
  //       .then(product => {
  //         return fetchedCart.addProduct(product, { through: { quantity: newQuantity } });
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   })
  //   .then(() => {
  //     res.redirect('/cart');
  //   })
  //   .catch()
}

const deleteFromCartController = (req, res, next) => {
//   const id = req.body.id;
//   req.user.getCart()
//   .then(cart => {
//     return cart.getProducts({where: {id: id}})
//   })
//   .then((products => {
//     const product = products[0];
//     product.cartItem.destroy();
//   }))
//   .then(result => {
//     res.redirect('/cart');
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

// const getOrdersController = (req, res, next) => {
//   res.render('./shop/orders', { pageTitle: 'Oders'})
}



module.exports = { 
  getAllProductsController, 
  getIndexController, 
  getCheckOutController, 
  //getOrdersController,
  getProductController,
  postCartController,
  getCartController,
  deleteFromCartController
};