const fs = require('fs');
const path = require('path');

const myPath = path.join(path.dirname(require.main.filename), 'db', 'cart.json');

class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(myPath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 }
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart.products.findIndex(product => product.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [ ...cart.products ];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [ ...cart.products, updatedProduct ];
      }

      cart.totalPrice = (Number(cart.totalPrice) + Number(productPrice)).toString();
      fs.writeFile(myPath, JSON.stringify(cart), (err) => {
        console.log(err);
      })
    })
  }


}