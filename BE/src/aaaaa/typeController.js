const typeService = require('./typeService');

async function createType(req, res) {
  const { type, productId } = req.body;
  try {
    const createdType = await typeService.createType(type, productId);
    res.json(createdType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create type' });
  }
}

async function getAllTypes(req, res) {
  try {
    const types = await typeService.getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch types' });
  }
}

async function getTypeById(req, res) {
  const { id } = req.params;
  try {
    const type = await typeService.getTypeById(id);
    if (!type) {
      return res.status(404).json({ error: 'Type not found' });
    }
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch type' });
  }
}

async function updateType(req, res) {
  const { id } = req.params;
  const { type, productId } = req.body;
  try {
    const updatedType = await typeService.updateType(id, type, productId);
    res.json(updatedType);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update type' });
  }
}

async function deleteType(req, res) {
  const { id } = req.params;
  try {
    await typeService.deleteType(id);
    res.json({ message: 'Type deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete type' });
  }
}

module.exports = {
  createType,
  getAllTypes,
  getTypeById,
  updateType,
  deleteType,
};
    