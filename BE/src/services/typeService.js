const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createType(type, productId) {
  return prisma.type.create({
    data: {
      type,
      productId,
    },
  });
}

async function getAllTypes() {
  return prisma.type.findMany();
}

async function getTypeById(id) {
  return prisma.type.findUnique({
    where: { id },
  });
}

async function updateType(id, type, productId) {
  return prisma.type.update({
    where: { id },
    data: {
      type,
      productId,
    },
  });
}

async function deleteType(id) {
  return prisma.type.delete({
    where: { id },
  });
}

module.exports = {
  createType,
  getAllTypes,
  getTypeById,
  updateType,
  deleteType,
};
