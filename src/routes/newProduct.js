const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/newControllers');

router.get('/create', newController.create);
router.get('/:slug', newController.detail);
router.get('/', newController.newPD);

module.exports = router;