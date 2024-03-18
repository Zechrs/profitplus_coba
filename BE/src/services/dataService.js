const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createData(quantity, frequency, unit, excess, code, event_module, grade, categoryId) {
  return prisma.data.create({
    data: {
      quantity,
      frequency,
      unit,
      excess,
      code,
      event_module,
      grade,
      categoryId,
    },
  });
}

async function getAllData() {
  return prisma.data.findMany();
}

async function getDataById(id) {
  return prisma.data.findUnique({
    where: { id },
  });
}

async function updateData(id, quantity, frequency, unit, excess, code, event_module, grade, categoryId) {
  return prisma.data.update({
    where: { id },
    data: {
      quantity,
      frequency,
      unit,
      excess,
      code,
      event_module,
      grade,
      categoryId,
    },
  });
}

async function deleteData(id) {
  return prisma.data.delete({
    where: { id },
  });
}

module.exports = {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
};
