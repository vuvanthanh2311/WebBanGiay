const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/cartControllers');


router.get('/cart', cartController.cart);
router.delete('/:id', cartController.destroy);


module.exports = router;