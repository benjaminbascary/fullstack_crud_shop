const db = require('../utils/mysql');

class Product {
  constructor(name, price, imageUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  saveProduct() {
    return db.execute(
      'INSERT INTO products (name, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.name, this.price, this.description, this.imageUrl]
    );
  }
  
  saveEditedProduct(id) {
    return db.execute(

    )
  }

  static getProducts() {
    return db.execute('SELECT * FROM products');
  }
  
  static getProductById(id) {
    return db.execute(`SELECT * FROM products WHERE id = ${id}`);
  }

  static deleteProductById(id) {
    return db.execute(`DELETE FROM products WHERE id = ${id}`);
  }

}

module.exports = Product;