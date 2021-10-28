var express = require('express');
var router = express.Router();
const apiCrownController = require('../controllers/apiCrownController');
// get home page

router.get('/category', apiCrownController.getCategories);

module.exports = router;