const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const logonController = require('../app/controllers/logonControllers');

router.get('/signin', logonController.signin);
router.get('/signup', logonController.signup);
router.get('/profile', logonController.profile);
router.post('/store', logonController.store);
router.post('/login', logonController.login);
router.get('/profile', logonController.profile);
router.get('/logout', logonController.logout);



module.exports = router;