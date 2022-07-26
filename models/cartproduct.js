const fs = require('fs');
const path = require('path');

const myPath = path.join(path.dirname(require.main.filename), 'db', 'cart.json');

const fetchAllCartProductsFromFile = (callback) => {
  fs.readFile(myPath, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  })
}

class CartProduct {
  constructor(product) {
    this.product = product;

  }

  saveIntoCart() {
    fs.readFile(myPath, (err, fileContent) => {
      let cart = [];
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      cart.push(this)
      fs.writeFile(myPath, JSON.stringify(cart), (err) => {
        console.log(err);
      })
    })
  }

  static getCartProducts(callback) {
    fetchAllCartProductsFromFile(callback);
  }

}

module.exports = CartProduct;