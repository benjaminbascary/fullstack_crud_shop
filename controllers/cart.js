const CartProduct = require('../models/cartproduct');

const getCartController = (req, res, next) => {
  CartProduct.getCartProducts(cartProducts => {
    res.render('./shop/cart', { products : cartProducts, pageTitle: 'Checkout' })
  })
}

module.exports = getCartController;