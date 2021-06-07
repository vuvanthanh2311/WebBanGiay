const express = require('express');
const router = express.Router();
const BillController = require('../app/controllers/BillControllers');


router.get('/:id', BillController.show);
router.post('/store', BillController.store);
router.put('/del/:id', BillController.delete);
router.put('/repurchase/:id', BillController.repurchase);


module.exports = router;