const express = require('express');
const router = express.Router();
const dashboardController = require('../../../controllers/tariffControllers/dashboard/dashboardController');

router.get('/', dashboardController.getAllProducts);

module.exports = router;
