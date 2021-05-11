const express = require('express');
const router = express.Router();
const logonController = require('../app/controllers/logonControllers');

router.get('/signin', logonController.signin);
router.get('/signup', logonController.signup);
router.get('/profile', logonController.profile);
router.post('/store', logonController.store);

module.exports = router;