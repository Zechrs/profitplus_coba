// controllers/tariffControllers/masterPackage/masterPackageController.js

const masterPackageService = require('../../../services/tariffServices/masterPackage/masterPackageService');
const webResponses = require('../../../helpers/web/webResponses');

async function createDetail(req, res) {
    const { quantity, frequency, unit, excess, code, event_module, grade, categoryId } = req.body;
    try {
        const createdDetail = await masterPackageService.createDetail(quantity, frequency, unit, excess, code, event_module, grade, categoryId);
        res.json(createdDetail);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create detail' });
    }
}

async function getAllDetails(req, res) {
    try {
        const detail = await masterPackageService.getAllDetails();
        res.json(detail);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch detail' });
    }
}

async function getAllDetailsWithPagination(req, res) {
    const { pageNumber, pageSize } = req.query; // Assuming pagination parameters are passed in query parameters
    try {
        const { details, total } = await masterPackageService.getAllDetailsWithPagination(pageNumber, pageSize);
        // Sending success response with paginated details
        const successMessage = 'Details fetched successfully';
        const responseObj =  webResponses.successResponsePage(successMessage, parseInt(page), parseInt(limit), total, details);
        res.json(responseObj);
    } catch (error) {
        // Sending error response
        const errorMessage = 'Failed to fetch details';
        const responseObj = webResponses.errorResponse(errorMessage);
        res.status(500).json(responseObj);
    }
}


async function getDetailById(req, res) {
    const { id } = req.params;
    try {
        const detail = await masterPackageService.getDetailById(id);
        if (!detail) {
        return res.status(404).json({ error: 'Detail not found' });
        }
        res.json(detail);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch detail' });
    }
}

async function updateDetail(req, res) {
    const { id } = req.params;
    const { quantity, frequency, unit, excess, code, event_module, grade, categoryId } = req.body;
    try {
        const updatedDetail = await masterPackageService.updateDetail(id, quantity, frequency, unit, excess, code, event_module, grade, categoryId);
        res.json(updatedDetail);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update detail' });
    }
}

async function deleteDetail(req, res) {
    const { id } = req.params;
    try {
        await masterPackageService.deleteDetail(id);
        res.json({ message: 'Detail deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete detail' });
    }
}

async function createComponent(req, res) {
    const { name, item, unit, specs, priceperunit, quantity, dataId } = req.body;
    try {
        const createdComponent = await masterPackageService.createComponent(name, item, unit, specs, priceperunit, quantity, dataId);
        res.json(createdComponent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create component' });
    }
}

async function getAllComponents(req, res) {
    try {
        const components = await masterPackageService.getAllComponents();
        res.json(components);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch components' });
    }
}

async function getComponentById(req, res) {
    const { id } = req.params;
    try {
        const component = await masterPackageService.getComponentById(id);
        if (!component) {
        return res.status(404).json({ error: 'Component not found' });
        }
        res.json(component);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch component' });
    }
}

async function updateComponent(req, res) {
    const { id } = req.params;
    const { name, item, unit, specs, priceperunit, quantity, dataId } = req.body;
    try {
        const updatedComponent = await masterPackageService.updateComponent(id, name, item, unit, specs, priceperunit, quantity, dataId);
        res.json(updatedComponent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update component' });
    }
}

async function deleteComponent(req, res) {
    const { id } = req.params;
    try {
        await masterPackageService.deleteComponent(id);
        res.json({ message: 'Component deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete component' });
    }
}


module.exports = {
    createDetail,
    getAllDetails,
    getAllDetailsWithPagination,
    getDetailById,
    updateDetail,
    deleteDetail,
    createComponent,
    getAllComponents,
    getComponentById,
    updateComponent,
    deleteComponent,
};