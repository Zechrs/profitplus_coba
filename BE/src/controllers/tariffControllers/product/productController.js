// controllers/productController.js

const productService = require('../../../services/tariffServices/product/productService');

async function createProduct(req, res) {
  const { name } = req.body;
  try {
    const product = await productService.createProduct(name);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

async function getProductById(req, res) {
  const { id } = req.params;
  console.log( id );
  try {
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedProduct = await productService.updateProduct(id, name);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await productService.deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
