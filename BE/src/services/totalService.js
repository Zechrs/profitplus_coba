const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createTotal(packageId, typeId, total) {
  return prisma.total.create({
    data: {
      packageId,
      typeId,
      total,
    },
  });
}

async function getAllTotals() {
  return prisma.total.findMany();
}

async function getTotalByPackageAndType(packageId, typeId) {
  return prisma.total.findUnique({
    where: {
      packageId_typeId: {
        packageId,
        typeId,
      },
    },
  });
}

async function updateTotal(packageId, typeId, total) {
  return prisma.total.update({
    where: {
      packageId_typeId: {
        packageId,
        typeId,
      },
    },
    data: {
      total,
    },
  });
}

async function deleteTotal(packageId, typeId) {
  return prisma.total.delete({
    where: {
      packageId_typeId: {
        packageId,
        typeId,
      },
    },
  });
}

module.exports = {
  createTotal,
  getAllTotals,
  getTotalByPackageAndType,
  updateTotal,
  deleteTotal,
};
