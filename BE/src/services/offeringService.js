const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createOffering(offer_name, productId) {
  return prisma.offering.create({
    data: {
      offer_name,
      productId,
    },
  });
}

async function getAllOfferings() {
  return prisma.offering.findMany();
}

async function getOfferingById(id) {
  return prisma.offering.findUnique({
    where: { id },
  });
}

async function updateOffering(id, offer_name, productId) {
  return prisma.offering.update({
    where: { id },
    data: {
      offer_name,
      productId,
    },
  });
}

async function deleteOffering(id) {
  return prisma.offering.delete({
    where: { id },
  });
}

module.exports = {
  createOffering,
  getAllOfferings,
  getOfferingById,
  updateOffering,
  deleteOffering,
};
