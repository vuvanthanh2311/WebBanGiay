

const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController');

router.get('/search', productController.search);
router.get('/:slug', productController.shows);
router.post('/:slug', productController.carts);





module.exports = router;
