const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/news/:slug', siteController.newsshow);
router.get('/news', siteController.news);
router.get('/search', siteController.search);
router.get('/', siteController.home);
router.get('/men/sport', siteController.sport);
router.get('/men/lazy', siteController.lazy);
router.get('/men/leather', siteController.leather);
router.get('/men/sandan', siteController.sandan);

router.get('/women/sport', siteController.wsport);
router.get('/women/sandan', siteController.wsandan);
router.get('/women/highheel', siteController.whighheel);

router.get('/kid/sport', siteController.ksport);
router.get('/kid/sandan', siteController.ksandan);
router.get('/kid/slipper', siteController.kslipper);

module.exports = router;
