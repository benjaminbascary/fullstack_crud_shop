const express = require('express');
const router = express.Router();
const notFoundController = require('../controllers/notfound');

router.use(notFoundController);

module.exports = router;