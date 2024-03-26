// controllers/packageController.js

const packageService = require('./packageService');

async function createPackage(req, res) {
  const { name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId } = req.body;
  try {
    const package = await packageService.createPackage(name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId);
    res.json(package);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create package' });
  }
}

async function getAllPackages(req, res) {
    try {
        const package = await packageService.getAllPackages();
        res.json(package);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch packages' });
    }
}
  
async function getPackageById(req, res) {
    const { id } = req.params;
    try {
        const package = await packageService.getPackageById(id);
        if (!package) {
        return res.status(404).json({ error: 'Package not found' });
        }
        res.json(package);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch package' });
    }
}

async function updatePackage(req, res) {
  const { id } = req.params;
  const { name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId } = req.body;
  try {
    const updatedPackage = await packageService.updatePackage(id, name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId);
    res.json(updatedPackage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update package' });
  }
}


async function deletePackage(req, res) {
    const { id } = req.params;
    try {
        await packageService.deletePackage(id);
        res.json({ message: 'Package deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete package' });
    }
}

module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage
};
