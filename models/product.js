const fs = require('fs');
const path = require('path');
const checkProperties = require('../utils/propertiesChecker');

const myPath = path.join(path.dirname(require.main.filename), 'db', 'products.json');




const fetchAllProductsFromFile = (callback) => {
  fs.readFile(myPath, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  })
}


class Product {
  constructor(name, price, imageUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  saveProduct() {
    // we pass root directory name, name of the folder, and name of the file
    fs.readFile(myPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }

      if (checkProperties(this)) {
        products.push(this);
        fs.writeFile(myPath, JSON.stringify(products), (err) => {
          console.log(err);
      });
      }

    })
  }

  //static hace que pueda llamar al metodo de la clase sin tener que instanciar un objecto con 'new'
  static getProducts(callback) {
    fetchAllProductsFromFile(callback);
  }

}

module.exports = Product;