/*
  Warnings:

  - You are about to drop the column `dataId` on the `components` table. All the data in the column will be lost.
  - You are about to drop the `data` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `detailId` to the `Components` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `components` DROP FOREIGN KEY `Components_dataId_fkey`;

-- DropForeignKey
ALTER TABLE `data` DROP FOREIGN KEY `Data_categoryId_fkey`;

-- AlterTable
ALTER TABLE `components` DROP COLUMN `dataId`,
    ADD COLUMN `detailId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `data`;

-- CreateTable
CREATE TABLE `Detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_module` VARCHAR(191) NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `pic` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `source` ENUM('Enterprise', 'Product') NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,
    `delete_at` DATETIME(3) NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detail_Package` (
    `detailId` INTEGER NOT NULL,
    `packageId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `frequency` INTEGER NOT NULL,
    `excess` DOUBLE NOT NULL,
    `information` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`detailId`, `packageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Detail` ADD CONSTRAINT `Detail_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detail_Package` ADD CONSTRAINT `Detail_Package_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detail_Package` ADD CONSTRAINT `Detail_Package_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Components` ADD CONSTRAINT `Components_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
