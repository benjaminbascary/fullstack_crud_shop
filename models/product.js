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
  
  saveEditedProduct(id, product) {
    return db.execute(
      'UPDATE '
    )
  }

  static getProducts() {
    return db.execute('SELECT * FROM products');
  }
  
  static getProductById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }

  static deleteProductById(id) {
    return db.execute(`DELETE FROM products WHERE id = ${id}`);
  }

}

module.exports = Product;