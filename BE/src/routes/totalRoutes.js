const express = require('express');
const router = express.Router();
const totalController = require('../controllers/totalController');

router.post('/', totalController.createTotal);
router.get('/', totalController.getAllTotals);
router.get('/:packageId/:typeId', totalController.getTotalByPackageAndType);
router.put('/:packageId/:typeId', totalController.updateTotal);
router.delete('/:packageId/:typeId', totalController.deleteTotal);

module.exports = router;
