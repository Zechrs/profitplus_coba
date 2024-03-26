const dataService = require('./dataService');

async function createData(req, res) {
  const { quantity, frequency, unit, excess, code, event_module, grade, categoryId } = req.body;
  try {
    const createdData = await dataService.createData(quantity, frequency, unit, excess, code, event_module, grade, categoryId);
    res.json(createdData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create data' });
  }
}

async function getAllData(req, res) {
  try {
    const data = await dataService.getAllData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function getDataById(req, res) {
  const { id } = req.params;
  try {
    const data = await dataService.getDataById(id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function updateData(req, res) {
  const { id } = req.params;
  const { quantity, frequency, unit, excess, code, event_module, grade, categoryId } = req.body;
  try {
    const updatedData = await dataService.updateData(id, quantity, frequency, unit, excess, code, event_module, grade, categoryId);
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update data' });
  }
}

async function deleteData(req, res) {
  const { id } = req.params;
  try {
    await dataService.deleteData(id);
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete data' });
  }
}

module.exports = {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
};
