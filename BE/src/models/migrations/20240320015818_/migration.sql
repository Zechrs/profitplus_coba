/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `typeId` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `components` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `components` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `dataId` on the `components` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `categoryId` on the `data` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `offering` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `offering` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `productId` on the `offering` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `offering_package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `packageId` on the `offering_package` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `offeringId` on the `offering_package` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `package` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `productId` on the `package` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `total` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `packageId` on the `total` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `typeId` on the `total` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `type` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `productId` on the `type` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `components` DROP FOREIGN KEY `Components_dataId_fkey`;

-- DropForeignKey
ALTER TABLE `data` DROP FOREIGN KEY `Data_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `offering` DROP FOREIGN KEY `Offering_productId_fkey`;

-- DropForeignKey
ALTER TABLE `offering_package` DROP FOREIGN KEY `Offering_Package_offeringId_fkey`;

-- DropForeignKey
ALTER TABLE `offering_package` DROP FOREIGN KEY `Offering_Package_packageId_fkey`;

-- DropForeignKey
ALTER TABLE `package` DROP FOREIGN KEY `Package_productId_fkey`;

-- DropForeignKey
ALTER TABLE `total` DROP FOREIGN KEY `Total_packageId_fkey`;

-- DropForeignKey
ALTER TABLE `total` DROP FOREIGN KEY `Total_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `type` DROP FOREIGN KEY `Type_productId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `typeId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `components` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `dataId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `data` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `categoryId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `offering` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `productId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `offering_package` DROP PRIMARY KEY,
    MODIFY `packageId` INTEGER NOT NULL,
    MODIFY `offeringId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`packageId`, `offeringId`);

-- AlterTable
ALTER TABLE `package` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `productId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `total` DROP PRIMARY KEY,
    MODIFY `packageId` INTEGER NOT NULL,
    MODIFY `typeId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`packageId`, `typeId`);

-- AlterTable
ALTER TABLE `type` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `productId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `Package_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Offering_Package` ADD CONSTRAINT `Offering_Package_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Offering_Package` ADD CONSTRAINT `Offering_Package_offeringId_fkey` FOREIGN KEY (`offeringId`) REFERENCES `Offering`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Offering` ADD CONSTRAINT `Offering_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Type` ADD CONSTRAINT `Type_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data` ADD CONSTRAINT `Data_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Components` ADD CONSTRAINT `Components_dataId_fkey` FOREIGN KEY (`dataId`) REFERENCES `Data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Total` ADD CONSTRAINT `Total_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Total` ADD CONSTRAINT `Total_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
