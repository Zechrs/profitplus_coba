/*
  Warnings:

  - A unique constraint covering the columns `[category]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Components` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[offer_name]` on the table `Offering` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Package` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Category_category_key` ON `Category`(`category`);

-- CreateIndex
CREATE UNIQUE INDEX `Components_name_key` ON `Components`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Offering_offer_name_key` ON `Offering`(`offer_name`);

-- CreateIndex
CREATE UNIQUE INDEX `Package_name_key` ON `Package`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);
