// controllers/tariffControllers/masterPackage/masterPackageController.js

const masterPackageService = require('../../../services/tariffServices/masterPackage/masterPackageService');
const webResponses = require('../../../helpers/web/webResponses');

async function createDetail(req, res) {
    const { event_module, nature, pic, description, unit, code, source, grade, categoryId } = req.body;
    try {
        const createdDetail = await masterPackageService.createDetail(event_module, nature, pic, description, unit, code, source, grade, categoryId);
        const successMessage = 'Detail Created successfully';
        const response = webResponses.successResponse(successMessage, createdDetail);
        res.json(response);
    } catch (error) {
        const errorMessage = 'Failed to create detail';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}

async function getAllDetails(req, res) {
    try {
        const details = await masterPackageService.getAllDetails();
        const successMessage = 'Details fetched successfully';
        const response = webResponses.successResponse(successMessage, details);
        res.json(response);
    } catch (error) {
        const errorMessage = 'Failed to fetch details';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}


async function getDetailById(req, res) {
    const { id } = req.params;
    try {
        const detail = await masterPackageService.getDetailById(id);
        if (!detail) {
            return res.status(404).json({ error: 'Detail not found' });
        }
        const successMessage = 'Detail fetched successfully';
        const response = webResponses.successResponse(successMessage, detail);
        res.json(response);
    } catch (error) {
        const errorMessage = 'Failed to fetch detail';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}

async function updateDetail(req, res) {
    const { id } = req.params;
    const { event_module, nature, pic, description, unit, code, source, grade, categoryId } = req.body;
    try {
        const updatedDetail = await masterPackageService.updateDetail(id, event_module, nature, pic, description, unit, code, source, grade, categoryId);
        const successMessage = 'Detail updated successfully';
        const response = webResponses.successResponse(successMessage, updatedDetail);
        res.json(response);

    } catch (error) {
        const errorMessage = 'Failed to update detail';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });

    }
}

async function deleteDetail(req, res) {
    const { id } = req.params;
    try {
        await masterPackageService.deleteDetail(id);
        const successMessage = 'Detail deleted successfully';
        const response = webResponses.successResponse(successMessage);
        res.json(response);
    } catch (error) {
        const errorMessage = 'Failed to delete detail';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });

    }
}

async function createComponent(req, res) {
    const { name, item, unit, specs, priceperunit, quantity, dataId } = req.body;
    try {
        const createdComponent = await masterPackageService.createComponent(name, item, unit, specs, priceperunit, quantity, dataId);
        res.json(createdComponent);
    } catch (error) {
        const errorMessage = 'Failed to create componenent';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });

    }
}

async function getAllComponents(req, res) {
    try {
        const components = await masterPackageService.getAllComponents();
        res.json(components);
    } catch (error) {
        const errorMessage = 'Failed to fetch componenents';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
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
        const errorMessage = 'Failed to fetch componenent';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}

async function updateComponent(req, res) {
    const { id } = req.params;
    const { name, item, unit, specs, priceperunit, quantity, dataId } = req.body;
    try {
        const updatedComponent = await masterPackageService.updateComponent(id, name, item, unit, specs, priceperunit, quantity, dataId);
        res.json(updatedComponent);
    } catch (error) {
        const errorMessage = 'Failed to update componenent';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}

async function deleteComponent(req, res) {
    const { id } = req.params;
    try {
        await masterPackageService.deleteComponent(id);
        res.json({ message: 'Component deleted successfully' });
    } catch (error) {
        const errorMessage = 'Failed to delete componenent';
        const errResponse = webResponses.errorResponse(errorMessage);
        res.status(500).json({ errResponse });
    }
}

module.exports = {
    createDetail,
    getAllDetails,
    getDetailById,
    updateDetail,
    deleteDetail,
    createComponent,
    getAllComponents,
    getComponentById,
    updateComponent,
    deleteComponent,
};