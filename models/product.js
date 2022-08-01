const db = require('../utils/mysql');

class Product {
  constructor(name, price, imageUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  saveProduct() {
    
  }

  saveEditedProduct() {
    
  }
  

  static getProducts() {
    return db.execute('SELECT * FROM products');
  }
  
  static getProductById(id) {

  }

  static deleteProductById(id) {

  }

}

module.exports = Product;