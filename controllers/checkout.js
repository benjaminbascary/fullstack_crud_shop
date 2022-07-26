const CartProduct = require('../models/cartproduct');

const getCheckoutController = (req, res, next) => {
  CartProduct.getCartProducts(cartProducts => {
    res.render('./shop/checkout', { products : cartProducts, pageTitle: 'Finish' });
  })
}

module.exports = getCheckoutController;