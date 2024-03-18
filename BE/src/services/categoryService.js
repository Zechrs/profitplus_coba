const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createCategory(typeId, category) {
  return prisma.category.create({
    data: {
      typeId,
      category,
    },
  });
}

async function getAllCategories() {
  return prisma.category.findMany();
}

async function getCategoryById(id) {
  return prisma.category.findUnique({
    where: { id },
  });
}

async function updateCategory(id, typeId, category) {
  return prisma.category.update({
    where: { id },
    data: {
      typeId,
      category,
    },
  });
}

async function deleteCategory(id) {
  return prisma.category.delete({
    where: { id },
  });
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
