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
router.get('/BillMg', adminController.BillMg);
router.put('/BillMg/ctt/:id', adminController.duyetctt);
router.put('/BillMg/clh/:id', adminController.duyetclh);
router.put('/BillMg/dg/:id', adminController.duyetdg);

module.exports = router;