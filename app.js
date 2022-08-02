// Core Modules
const path = require('path');
// 3rd Party Modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// Local Imports
const { router, products } = require('./routes/admin');
const shopRoute = require('./routes/shop');
const notFound = require('./routes/404');
// Instances
const app = express();
// Sequelize
const sequelize = require('./utils/mysql');
// Sequelize models
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');



// Set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// Middleware to add user to req object
app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    })
})


// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
// Routes
app.use(router);
app.use(shopRoute);

// If not found any route of the above
app.use(notFound);

// Initialices data base and relations

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

sequelize.sync(/*{force: true}*/)
  .then((result) => {
    // We create a dummy user
    return User.findByPk(1)
  })
  .then(user => {
    
    if (!user) {
      return User.create({name: 'Benjamin', email: 'test@test.com'})
    }
    return user;
  })
  .then(user => {
    if (user.id === 1) {
      return user;
    }
    return user.createCart();
    
  })
  .then((cart) => {
    console.log(cart)
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err);
  })


// Starts server
//app.listen(3000);