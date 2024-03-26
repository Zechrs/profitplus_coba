const express = require('express');
const router = express.Router();
const componentsController = require('../controllers/componentController');

router.post('/', componentsController.createComponent);
router.get('/', componentsController.getAllComponents);
router.get('/:id', componentsController.getComponentById);
router.put('/:id', componentsController.updateComponent);
router.delete('/:id', componentsController.deleteComponent);

module.exports = router;
