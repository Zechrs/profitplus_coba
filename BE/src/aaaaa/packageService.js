// services/packageService.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createPackage(name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId) {
  return prisma.package.create({ 
    data: {
      name,
      category,
      target_sales,
      payback_period,
      operational_time,
      excess_capacity,
      capex,
      opex,
      cogs,
      tariff,
      productId
    } 
  });
}

async function getAllPackages() {
  return prisma.package.findMany();
}

async function getPackageById(id) {
  return prisma.package.findUnique({ where: { id } });
}

async function updatePackage(id, name, category, target_sales, payback_period, operational_time, excess_capacity, capex, opex, cogs, tariff, productId) {
  return prisma.package.update({ 
    where: { id }, 
    data: {
      name,
      category,
      target_sales,
      payback_period,
      operational_time,
      excess_capacity,
      capex,
      opex,
      cogs,
      tariff,
      productId
    } 
  });
}

async function deletePackage(id) {
  return prisma.package.delete({ where: { id } });
}

module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
