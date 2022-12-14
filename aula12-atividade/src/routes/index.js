const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');
const categoriesController = require('../controllers/categoriesController');

router.get('/', (req, res) => res.redirect('/foods/index'));
router.post('/foods', foodsController.create);
router.get('/foods', foodsController.readAll);
router.get('/foods/create', foodsController.getCreateForm);
router.get('/foods/delete', foodsController.getDeleteForm);
router.get('/foods/update', foodsController.getUpdateForm);
router.post('/foods/update', foodsController.update);
router.post('/foods/delete', foodsController.destroy);
router.get('/foods/index', foodsController.index);

router.get('/categories', categoriesController.readAll);

module.exports = router;
