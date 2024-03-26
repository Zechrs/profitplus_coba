const express = require('express');
const router = express.Router();
const offeringPackageController = require('../controllers/offeringPackageController');

router.post('/', offeringPackageController.createOfferingPackage);
router.get('/', offeringPackageController.getAllOfferingPackages);
router.get('/:packageId/:offeringId', offeringPackageController.getOfferingPackageById);
router.delete('/:packageId/:offeringId', offeringPackageController.deleteOfferingPackage);

module.exports = router;