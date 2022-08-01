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

// Initialices data base
sequelize.sync()
  .then((result) => {
    // If there is a result, we start the server.
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err);
  })


// Starts server
//app.listen(3000);