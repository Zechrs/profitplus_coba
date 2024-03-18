const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createOfferingPackage(packageId, offeringId) {
  return prisma.offering_Package.create({
    data: {
      packageId,
      offeringId,
    },
  });
}

async function getAllOfferingPackages() {
  return prisma.offering_Package.findMany();
}

async function getOfferingPackageById(packageId, offeringId) {
  return prisma.offering_Package.findUnique({
    where: {
      packageId_offeringId: {
        packageId,
        offeringId,
      },
    },
  });
}

async function deleteOfferingPackage(packageId, offeringId) {
  return prisma.offering_Package.delete({
    where: {
      packageId_offeringId: {
        packageId,
        offeringId,
      },
    },
  });
}

module.exports = {
  createOfferingPackage,
  getAllOfferingPackages,
  getOfferingPackageById,
  deleteOfferingPackage,
};
