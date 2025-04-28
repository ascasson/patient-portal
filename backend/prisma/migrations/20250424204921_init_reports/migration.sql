-- CreateTable
CREATE TABLE `Report` (
    `id` VARCHAR(191) NOT NULL,
    `patientName` VARCHAR(255) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `summary` TEXT NOT NULL,

    INDEX `Report_patientName_idx`(`patientName`),
    INDEX `Report_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
