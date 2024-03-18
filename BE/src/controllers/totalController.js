const totalService = require('../services/totalService');

async function createTotal(req, res) {
  const { packageId, typeId, total } = req.body;
  try {
    const createdTotal = await totalService.createTotal(packageId, typeId, total);
    res.json(createdTotal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create total' });
  }
}

async function getAllTotals(req, res) {
  try {
    const totals = await totalService.getAllTotals();
    res.json(totals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch totals' });
  }
}

async function getTotalByPackageAndType(req, res) {
  const { packageId, typeId } = req.params;
  try {
    const total = await totalService.getTotalByPackageAndType(packageId, typeId);
    if (!total) {
      return res.status(404).json({ error: 'Total not found' });
    }
    res.json(total);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch total' });
  }
}

async function updateTotal(req, res) {
  const { packageId, typeId } = req.params;
  const { total } = req.body;
  try {
    const updatedTotal = await totalService.updateTotal(packageId, typeId, total);
    res.json(updatedTotal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update total' });
  }
}

async function deleteTotal(req, res) {
  const { packageId, typeId } = req.params;
  try {
    await totalService.deleteTotal(packageId, typeId);
    res.json({ message: 'Total deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete total' });
  }
}

module.exports = {
  createTotal,
  getAllTotals,
  getTotalByPackageAndType,
  updateTotal,
  deleteTotal,
};
