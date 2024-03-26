import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    // Create activities
    await prisma.activity.createMany({
      data: [
        { activity: 'Logged in', timestamp: new Date() },
        { activity: 'Updated profile', timestamp: new Date() },
        { activity: 'Created new package', timestamp: new Date() }
      ]
    });

    // Create products
    await prisma.product.createMany({
      data: [
        { name: 'Product A' },
        { name: 'Product B' },
        { name: 'Product C' }
      ]
    });

    // Create packages
    await prisma.package.createMany({
      data: [
        { name: 'Package X', category: 'MAIN_FEATURES', productId: 1 },
        { name: 'Package Y', category: 'ADD_ON', productId: 1 },
        { name: 'Package Z', category: 'MAIN_FEATURES', productId: 1 }
      ]
    });

    // Create offerings
    await prisma.offering.createMany({
      data: [
        { offer_name: 'Offering 1', productId: 1 },
        { offer_name: 'Offering 2', productId: 1 },
        { offer_name: 'Offering 3', productId: 2 }
      ]
    });

    // Create types
    await prisma.type.createMany({
      data: [
        { type: 'CAPEX', productId: 1 },
        { type: 'OPEX', productId: 1 },
        { type: 'CoGS', productId: 1 }
      ]
    });

    // Create categories
    await prisma.category.createMany({
      data: [
        { category: 'Category Capex 1', typeId: 1 },
        { category: 'Category Capex 2', typeId: 1 },
        { category: 'Category Opex 1', typeId: 2 },
        { category: 'Category Opex 2', typeId: 2 },
        { category: 'Category CoGS 1', typeId: 3 },
        { category: 'Category CoGS 2', typeId: 3 },
      ]
    });

    // Create details
    await prisma.detail.createMany({
      data: [
        { event_module: 'Detail A1', categoryId: 1 },
        { event_module: 'Detail B1', categoryId: 1 },
        { event_module: 'Detail C1', categoryId: 1 },
        { event_module: 'Detail A2', categoryId: 2 },
        { event_module: 'Detail B2', categoryId: 2 },
        { event_module: 'Detail C2', categoryId: 2 },
        { event_module: 'Detail A3', categoryId: 3 },
        { event_module: 'Detail B3', categoryId: 3 },
        { event_module: 'Detail C3', categoryId: 3 },
      ]
    });

    // Create components
    await prisma.components.createMany({
      data: [
        { name: 'Component A11', detailId: 1 },
        { name: 'Component A12', detailId: 1 },
        { name: 'Component A13', detailId: 1 },
        { name: 'Component B11', detailId: 2 },
        { name: 'Component B12', detailId: 2 },
        { name: 'Component B13', detailId: 2 },
        { name: 'Component C11', detailId: 3 },
        { name: 'Component C12', detailId: 3 },
        { name: 'Component C13', detailId: 3 },
        { name: 'Component A21', detailId: 4 },
        { name: 'Component A22', detailId: 4 },
        { name: 'Component A23', detailId: 4 },
        { name: 'Component B21', detailId: 5 },
        { name: 'Component B22', detailId: 5 },
        { name: 'Component B23', detailId: 5 },
        { name: 'Component C21', detailId: 6 },
        { name: 'Component C22', detailId: 6 },
        { name: 'Component C23', detailId: 6 },
        { name: 'Component A31', detailId: 7 },
        { name: 'Component A32', detailId: 7 },
        { name: 'Component A33', detailId: 7 },
        { name: 'Component B31', detailId: 8 },
        { name: 'Component B32', detailId: 8 },
        { name: 'Component B33', detailId: 8 },
        { name: 'Component C31', detailId: 9 },
        { name: 'Component C32', detailId: 9 },
        { name: 'Component C33', detailId: 9 },
      ]
    });

    console.log('Dummy data created successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });




  // // Create totals
  // await prisma.total.createMany({
  //   data: [
  //     { packageId: 1, typeId: 1, total: 1000 },
  //     { packageId: 2, typeId: 2, total: 2000 },
  //     { packageId: 3, typeId: 3, total: 3000 }
  //   ]