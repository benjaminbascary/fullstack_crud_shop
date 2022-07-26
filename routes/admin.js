const express = require('express');
const router = express.Router();
const { getAddProductPageController, postNewProductController } = require('../controllers/products');


router.get('/admin/addproduct', getAddProductPageController);

router.post('/admin/addproduct', postNewProductController);

//router.get('/admin/editproduct', getEditProductPageController);

// router.post('./admin/editproduct', postEditProductController); Por verse

module.exports = { router };
