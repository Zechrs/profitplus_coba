const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getDetailById(id) {
  return prisma.detail.findUnique({
    where: {
      id,
    },
  });
}

async function main() {
  try {
    // Call your function to get the detail by ID
    const detailId = 1; // Replace with the desired ID
    const detail = await getDetailById(detailId);
    if (detail) {
      console.log(detail); // Output the retrieved detail
    } else {
      console.log('Detail not found'); // Handle the case when detail is not found
    }
  } catch (error) {
    console.error('Error retrieving detail:', error);
    throw error; // Rethrow the error to be caught by the outer catch block
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}

main()
  .catch((error) => {
    console.error('Error in main:', error);
    process.exit(1); // Exit process with error status
  });
