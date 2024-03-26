const offeringPackageService = require('./offeringPackageService');

async function createOfferingPackage(req, res) {
  const { packageId, offeringId } = req.body;
  try {
    const createdOfferingPackage = await offeringPackageService.createOfferingPackage(packageId, offeringId);
    res.json(createdOfferingPackage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create offering package' });
  }
}

async function getAllOfferingPackages(req, res) {
  try {
    const offeringPackages = await offeringPackageService.getAllOfferingPackages();
    res.json(offeringPackages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch offering packages' });
  }
}

async function getOfferingPackageById(req, res) {
  const { packageId, offeringId } = req.params;
  try {
    const offeringPackage = await offeringPackageService.getOfferingPackageById(packageId, offeringId);
    if (!offeringPackage) {
      return res.status(404).json({ error: 'Offering package not found' });
    }
    res.json(offeringPackage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch offering package' });
  }
}

async function deleteOfferingPackage(req, res) {
  const { packageId, offeringId } = req.params;
  try {
    await offeringPackageService.deleteOfferingPackage(packageId, offeringId);
    res.json({ message: 'Offering package deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete offering package' });
  }
}

module.exports = {
  createOfferingPackage,
  getAllOfferingPackages,
  getOfferingPackageById,
  deleteOfferingPackage,
};
