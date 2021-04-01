const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


router.get('/news/:slug', siteController.newsshow);
router.get('/news', siteController.news);
router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;