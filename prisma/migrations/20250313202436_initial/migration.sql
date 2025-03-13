-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Acquisition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `finished` BOOLEAN NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cupom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discount` DECIMAL(9, 2) NOT NULL,
    `code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hamburguer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Combo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComboHamburguer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comboId` INTEGER NOT NULL,
    `hamburguerId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `ComboHamburguer_comboId_hamburguerId_key`(`comboId`, `hamburguerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComboDrink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comboId` INTEGER NOT NULL,
    `drinkId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `ComboDrink_comboId_drinkId_key`(`comboId`, `drinkId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AcquisitionDrink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acquisitionId` INTEGER NOT NULL,
    `drinkId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `AcquisitionDrink_acquisitionId_drinkId_key`(`acquisitionId`, `drinkId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AcquisitionCombo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acquisitionId` INTEGER NOT NULL,
    `comboId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `AcquisitionCombo_acquisitionId_comboId_key`(`acquisitionId`, `comboId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AcquisitionHamburguer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acquisitionId` INTEGER NOT NULL,
    `hamburguerId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `AcquisitionHamburguer_acquisitionId_hamburguerId_key`(`acquisitionId`, `hamburguerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCupom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `cupomId` INTEGER NOT NULL,
    `qtd` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `UserCupom_userId_cupomId_key`(`userId`, `cupomId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Acquisition` ADD CONSTRAINT `Acquisition_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboHamburguer` ADD CONSTRAINT `ComboHamburguer_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboHamburguer` ADD CONSTRAINT `ComboHamburguer_hamburguerId_fkey` FOREIGN KEY (`hamburguerId`) REFERENCES `Hamburguer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDrink` ADD CONSTRAINT `ComboDrink_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDrink` ADD CONSTRAINT `ComboDrink_drinkId_fkey` FOREIGN KEY (`drinkId`) REFERENCES `Drink`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionDrink` ADD CONSTRAINT `AcquisitionDrink_acquisitionId_fkey` FOREIGN KEY (`acquisitionId`) REFERENCES `Acquisition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionDrink` ADD CONSTRAINT `AcquisitionDrink_drinkId_fkey` FOREIGN KEY (`drinkId`) REFERENCES `Drink`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionCombo` ADD CONSTRAINT `AcquisitionCombo_acquisitionId_fkey` FOREIGN KEY (`acquisitionId`) REFERENCES `Acquisition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionCombo` ADD CONSTRAINT `AcquisitionCombo_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionHamburguer` ADD CONSTRAINT `AcquisitionHamburguer_acquisitionId_fkey` FOREIGN KEY (`acquisitionId`) REFERENCES `Acquisition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionHamburguer` ADD CONSTRAINT `AcquisitionHamburguer_hamburguerId_fkey` FOREIGN KEY (`hamburguerId`) REFERENCES `Hamburguer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCupom` ADD CONSTRAINT `UserCupom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCupom` ADD CONSTRAINT `UserCupom_cupomId_fkey` FOREIGN KEY (`cupomId`) REFERENCES `Cupom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
