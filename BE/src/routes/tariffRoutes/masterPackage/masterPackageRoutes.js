const express = require('express');
const router = express.Router();
const masterPackageController = require('../../../controllers/tariffControllers/masterPackage/masterPackageController');

router.post('/detail', masterPackageController.createDetail);
router.get('/detail', masterPackageController.getAllDetails);
router.get('/detail/:id', masterPackageController.getDetailById);
router.put('/detail/:id', masterPackageController.updateDetail);
router.delete('/detail/:id', masterPackageController.deleteDetail);
router.post('/component', masterPackageController.createComponent);
router.get('/component', masterPackageController.getAllComponents);
router.get('/component/:id', masterPackageController.getComponentById);
router.put('/component/:id', masterPackageController.updateComponent);
router.delete('/component/:id', masterPackageController.deleteComponent);

module.exports = router;
