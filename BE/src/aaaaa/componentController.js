const componentsService = require('./componentService');

async function createComponent(req, res) {
  const { name, item, unit, specs, priceperunit, quantity, dataId } = req.body;
  try {
    const createdComponent = await componentsService.createComponent(name, item, unit, specs, priceperunit, quantity, dataId);
    res.json(createdComponent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create component' });
  }
}

async function getAllComponents(req, res) {
  try {
    const components = await componentsService.getAllComponents();
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch components' });
  }
}

async function getComponentById(req, res) {
  const { id } = req.params;
  try {
    const component = await componentsService.getComponentById(id);
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
    const updatedComponent = await componentsService.updateComponent(id, name, item, unit, specs, priceperunit, quantity, dataId);
    res.json(updatedComponent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update component' });
  }
}

async function deleteComponent(req, res) {
  const { id } = req.params;
  try {
    await componentsService.deleteComponent(id);
    res.json({ message: 'Component deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete component' });
  }
}

module.exports = {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
  deleteComponent,
};
