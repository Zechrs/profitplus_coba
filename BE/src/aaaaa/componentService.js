const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createComponent(name, item, unit, specs, priceperunit, quantity, dataId) {
  return prisma.components.create({
    data: {
      name,
      item,
      unit,
      specs,
      priceperunit,
      quantity,
      dataId,
    },
  });
}

async function getAllComponents() {
  return prisma.components.findMany();
}

async function getComponentById(id) {
  return prisma.components.findUnique({
    where: { id },
  });
}

async function updateComponent(id, name, item, unit, specs, priceperunit, quantity, dataId) {
  return prisma.components.update({
    where: { id },
    data: {
      name,
      item,
      unit,
      specs,
      priceperunit,
      quantity,
      dataId,
    },
  });
}

async function deleteComponent(id) {
  return prisma.components.delete({
    where: { id },
  });
}

module.exports = {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
  deleteComponent,
};
