const Product = require('../models/product');
const User = require('../models/user');
const getAddProductPageController = (req, res, next) => {
  res.render('./admin/addproduct', { pageTitle: 'Add Productt' });
}

const postNewProductController = (req, res, next) => {
  const { product, price, imageUrl, description } = req.body;
  let myUser;
  User.findById('62eac59a8cfc6fb1a72024c3')
    .then(user => {
      myUser = user
      const newProduct = new Product({
        name: product,
        price: price,
        imageUrl: imageUrl,
        description: description,
        userId: myUser._id
      });

      newProduct.save()
        .then(result => {
          res.redirect('/')
        })
        .catch(err => {
          console.log(err);
        })
      })
    .catch(err => {
      console.log(err)
    })
}

const getAdminProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('./admin/products', { products: products, pageTitle: 'Admin products' });
    })
    .catch(err => {
      console.log(err);
    })
}

const getEditPageController = (req, res, next) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('./admin/editproduct', { product: product, pageTitle: `Editing: ${product.name}` })
    })
    .catch(err => {
      console.log(err);
    })
}

const postEditProductController = (req, res, next) => {
  const { _id, price, name, imageUrl, description } = req.body;
  Product.findById(_id)
    .then(product => {
      product.name = name;
      product.imageUrl = imageUrl;
      product.price = price;
      product.description = description;
      product.save();
    })
    .then(result => {
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    })
  
}

const deleteProductController = (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(result => {
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
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