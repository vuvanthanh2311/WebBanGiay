const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/adminControllers');


router.get('/createPD', adminController.create);
router.post('/storePD', adminController.store);
router.get('/dashboard', adminController.dashboard);
router.get('/AccManage', adminController.AccManage);
router.get('/AccManage/:id', adminController.detailAcc);
router.get('/PDManage', adminController.ProductM);
router.get('/PDManage/:id', adminController.detailPD);
router.put('/:id', adminController.updatePD);

module.exports = router;