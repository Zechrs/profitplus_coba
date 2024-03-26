const express = require('express');
const router = express.Router();
const offeringController = require('../controllers/offeringController');

router.post('/', offeringController.createOffering);
router.get('/', offeringController.getAllOfferings);
router.get('/:id', offeringController.getOfferingById);
router.put('/:id', offeringController.updateOffering);
router.delete('/:id', offeringController.deleteOffering);

module.exports = router;
