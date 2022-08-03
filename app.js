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
// mongoose
const mongoose = require('mongoose');
const URL = require('./utils/mongodb');
const User = require('./models/user');


// Set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
// Routes
app.use(router);
app.use(shopRoute);

// If not found any route of the above
app.use(notFound);


// Adds the user in the database to my req object
app.use((req, res, next) => {
  User.findById('62eab94a610040048d0a78d4')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    })
})


// Starts server and creates an user. If any user exists then it does not get created.
mongoose.connect(URL)
  .then(result => {
    User.findOne()
      .then(user => {
        if (!user) {
          const user = new User({
          name: 'Test',
          email: 'test@test.com',
          cart: { items: [] }
        });
        user.save();
        }
      })
    console.log('CONNECTED');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });