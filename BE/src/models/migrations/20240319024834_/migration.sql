/*
  Warnings:

  - Made the column `productId` on table `offering` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `offering` DROP FOREIGN KEY `Offering_productId_fkey`;

-- AlterTable
ALTER TABLE `offering` MODIFY `productId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Offering` ADD CONSTRAINT `Offering_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
