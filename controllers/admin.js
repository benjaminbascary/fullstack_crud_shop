const Product = require('../models/product');

const getAddProductPageController = (req, res, next) => {
  res.render('./admin/addproduct', { pageTitle: 'Add Productt' });
}

const postNewProductController = (req, res, next) => {
  const { product, price, imageUrl, description } = req.body;
  const newProduct = new Product({
    name: product,
    price: price,
    imageUrl: imageUrl,
    description: description
  });

  newProduct.save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err);
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
  Product.findByPk(productId)
    .then(product => {
      res.render('./admin/editproduct', { product: product, pageTitle: 'Editing' })
    })
    .catch(err => {
      console.log(err);
    })
}

const postEditProductController = (req, res, next) => {
  const { id, price, name, imageUrl, description } = req.body;
  Product.update({
    name: name,
    price: price,
    imageUrl: imageUrl,
    description: description
  }, {
    where: { id: id }
  })
  .then(() => {
    res.redirect('/admin/products');
  })
  .catch(err => {
    console.log(err);
  })
}

const deleteProductController = (req, res, next) => {
  const id = req.params.id;
  Product.destroy({
    where: {
      id: id
    }})
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch((err) => {
      console.log(err);
    });
}




module.exports = { 
  getAddProductPageController, 
  postNewProductController, 
  getAdminProducts, 
  getEditPageController, 
  postEditProductController,
  deleteProductController
};