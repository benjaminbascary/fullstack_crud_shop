const Product = require('../models/product');

const getAddProductPageController = (req, res, next) => {
  res.render('./admin/addproduct', { pageTitle: 'Add Productt' });
}

const postNewProductController = (req, res, next) => {
  const { product, price, imageUrl, description } = req.body;
  const newProduct = new Product(product, price, imageUrl, description);
  newProduct.saveProduct()
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    })
}

const getAdminProducts = (req, res, next) => {
  Product.getProducts()
  .then(([rows, fieldData]) => {
    res.render('./admin/products', { products: rows, pageTitle: 'Admin products' });
  })
  .catch((err) => {
    console.log(err);
  })
}

const getEditPageController = (req, res, next) => {
  const id = req.params.id;
  Product.getProductById(id)
    .then(([rows, fieldData]) => {
      res.render('./admin/editproduct', { product: rows[0], pageTitle: 'Editing' })
    })
    .catch((err) => {
      console.log(err)
    })
}

const postEditProductController = (req, res, next) => {
  const product = req.body;
  const id = product.id;
  Product.saveEditedProduct(id, product)
    .then(() => {
      
    })
    .catch((err) => {
      console.log(err)
    })
  res.redirect('/admin/products');
}

const deleteProductController = (req, res, next) => {
  const id = req.params.id;
  Product.deleteProductById(id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err)
    })
}




module.exports = { 
  getAddProductPageController, 
  postNewProductController, 
  getAdminProducts, 
  getEditPageController, 
  postEditProductController,
  deleteProductController
};