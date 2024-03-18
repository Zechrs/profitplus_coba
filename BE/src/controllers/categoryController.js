const categoryService = require('../services/categoryService');

async function createCategory(req, res) {
  const { typeId, category } = req.body;
  try {
    const createdCategory = await categoryService.createCategory(typeId, category);
    res.json(createdCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
}

async function getAllCategories(req, res) {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}

async function getCategoryById(req, res) {
  const { id } = req.params;
  try {
    const category = await categoryService.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
}

async function updateCategory(req, res) {
  const { id } = req.params;
  const { typeId, category } = req.body;
  try {
    const updatedCategory = await categoryService.updateCategory(id, typeId, category);
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
}

async function deleteCategory(req, res) {
  const { id } = req.params;
  try {
    await categoryService.deleteCategory(id);
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
