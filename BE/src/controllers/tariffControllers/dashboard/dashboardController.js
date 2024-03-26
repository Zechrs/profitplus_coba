// controllers/tariffControllers/dashboard/dashboardController.js

const productService = require('../../../services/tariffServices/dashboard/dashboardService');
const webResponses = require('../../../helpers/web/webResponses');

async function getAllProducts(req, res) {
    try {
        const products = await productService.getAllProducts();
        // Sending success response with data
        const successMessage = 'Products fetched successfully';
        const responseObj = webResponses.successResponse(successMessage, products);
        res.json(responseObj);
    } catch (error) {
        // Sending error response
        const errorMessage = 'Failed to fetch products';
        const responseObj = webResponses.errorResponse(errorMessage);
        res.status(500).json(responseObj);
    }
}

module.exports = {
    getAllProducts,
};
