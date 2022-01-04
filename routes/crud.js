var express = require('express');
var router = express.Router();
const crudController = require('../controllers/crudController');

//CREATE
router.post('/create', crudController.create);

/* GET users listing. */
router.get('/', crudController.read);

//UPDATE
router.post('/update', crudController.update);

//DELETE
router.delete('/delete/:id', crudController.delete);

module.exports = router;
