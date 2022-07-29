const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'db', 'cart.json');

const p2 = path.join(path.dirname(require.main.filename), 'db', 'cart2.json');

const fetchAllProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  })
}

const fetchFullProductsFromFile = (callback) => {
  fs.readFile(p2, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  })
}

class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      };
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = +cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }

  static addFullProduct(id, fullproduct, productPrice) {
    fs.readFile(p2, (err, fileContent) => {
      let cart = { products: [], fullProducts: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      const existingFullProduct = cart.fullProducts[existingProductIndex];
      let updatedProduct;
      let updatedFullProduct;
      // Add new product/ increase quantity
      if (existingProduct && existingFullProduct) {
        updatedProduct = { ...existingProduct };
        updatedFullProduct = {...existingFullProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.fullProducts = [...cart.fullProducts];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id,  qty: 1 };
        updatedFullProduct = fullproduct;
        console.log(updatedFullProduct)

        cart.products = [...cart.products, updatedProduct];
        cart.fullProducts = [ ...cart.fullProducts, fullproduct ];
      }
      cart.totalPrice = +cart.totalPrice + +productPrice;
      fs.writeFile(p2, JSON.stringify(cart), err => {
        console.log(err);
      });
    })
  }

  static getAllProductsFromCart(callback) {
    fetchAllProductsFromFile(callback);
  }

  static getFullProductsFromCart(callback) {
    fetchFullProductsFromFile(callback);
  }

  static deleteProductFromCart(id, price) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }

      const updatedCart = {...JSON.parse(fileContent)}
      const product = updatedCart.products.findIndex(prod => prod.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        prod => prod.id !== id
      );
      updatedCart.totalPrice = updatedCart.totalPrice - price * productQty;
      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        console.log(err);
      })
    })
  }
};

module.exports = Cart;