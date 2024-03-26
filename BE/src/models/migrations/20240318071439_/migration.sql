/*
  Warnings:

  - You are about to alter the column `priceperunit` on the `components` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `excess` on the `data` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `capex` on the `package` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `opex` on the `package` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `cogs` on the `package` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `tariff` on the `package` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `total` to the `Total` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `components` MODIFY `priceperunit` DOUBLE NOT NULL,
    MODIFY `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `data` MODIFY `excess` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `package` MODIFY `capex` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `opex` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `cogs` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `tariff` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `total` ADD COLUMN `total` DOUBLE NOT NULL;
