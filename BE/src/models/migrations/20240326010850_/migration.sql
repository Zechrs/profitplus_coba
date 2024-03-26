-- AlterTable
ALTER TABLE `components` MODIFY `item` VARCHAR(191) NULL,
    MODIFY `unit` INTEGER NULL,
    MODIFY `specs` VARCHAR(191) NULL,
    MODIFY `priceperunit` DOUBLE NOT NULL DEFAULT 1000,
    MODIFY `quantity` INTEGER NULL;

-- AlterTable
ALTER TABLE `detail` MODIFY `nature` VARCHAR(191) NULL,
    MODIFY `pic` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `source` ENUM('Enterprise', 'Product') NULL,
    MODIFY `unit` VARCHAR(191) NULL,
    MODIFY `code` VARCHAR(191) NULL,
    MODIFY `grade` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `detail_package` MODIFY `quantity` INTEGER NULL,
    MODIFY `frequency` INTEGER NULL,
    MODIFY `excess` DOUBLE NULL,
    MODIFY `information` VARCHAR(191) NULL;
