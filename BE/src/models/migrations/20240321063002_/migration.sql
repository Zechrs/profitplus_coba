/*
  Warnings:

  - You are about to drop the column `tariff_approved` on the `product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Activity_activity_key` ON `activity`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `tariff_approved`,
    ADD COLUMN `tariff_status` ENUM('Accepted', 'Rejected', 'NeedApproval', 'None') NOT NULL DEFAULT 'None';
