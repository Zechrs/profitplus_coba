const offeringService = require('../services/offeringService');

async function createOffering(req, res) {
  const { offer_name, productId } = req.body;
  try {
    const offering = await offeringService.createOffering(offer_name, productId);
    res.json(offering);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create offering' });
  }
}

async function getAllOfferings(req, res) {
  try {
    const offerings = await offeringService.getAllOfferings();
    res.json(offerings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch offerings' });
  }
}

async function getOfferingById(req, res) {
  const { id } = req.params;
  try {
    const offering = await offeringService.getOfferingById(id);
    if (!offering) {
      return res.status(404).json({ error: 'Offering not found' });
    }
    res.json(offering);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch offering' });
  }
}

async function updateOffering(req, res) {
  const { id } = req.params;
  const { offer_name, productId } = req.body;
  try {
    const updatedOffering = await offeringService.updateOffering(id, offer_name, productId);
    res.json(updatedOffering);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update offering' });
  }
}

async function deleteOffering(req, res) {
  const { id } = req.params;
  try {
    await offeringService.deleteOffering(id);
    res.json({ message: 'Offering deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete offering' });
  }
}

module.exports = {
  createOffering,
  getAllOfferings,
  getOfferingById,
  updateOffering,
  deleteOffering,
};
