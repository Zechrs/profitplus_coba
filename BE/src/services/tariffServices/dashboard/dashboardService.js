const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      tariff_status: true,
    },
  });
  const productCounts = await prisma.product.groupBy({
    by: ['tariff_status'],
    _count: {
      id: true,
    },
  });

  return { products, productCounts };
};

module.exports = {
    getAllProducts,
};