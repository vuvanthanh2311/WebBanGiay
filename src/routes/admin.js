const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/adminControllers');


router.get('/createPD', adminController.create);
router.post('/storePD', adminController.store);

module.exports = router;