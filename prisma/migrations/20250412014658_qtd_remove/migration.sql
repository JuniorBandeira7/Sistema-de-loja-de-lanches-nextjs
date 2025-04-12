/*
  Warnings:

  - You are about to drop the column `qtd` on the `acquisitioncombo` table. All the data in the column will be lost.
  - You are about to drop the column `qtd` on the `acquisitiondrink` table. All the data in the column will be lost.
  - You are about to drop the column `qtd` on the `acquisitionhamburguer` table. All the data in the column will be lost.
  - You are about to drop the column `qtd` on the `usercupom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `acquisitioncombo` DROP FOREIGN KEY `AcquisitionCombo_acquisitionId_fkey`;

-- DropForeignKey
ALTER TABLE `acquisitiondrink` DROP FOREIGN KEY `AcquisitionDrink_acquisitionId_fkey`;

-- DropForeignKey
ALTER TABLE `acquisitionhamburguer` DROP FOREIGN KEY `AcquisitionHamburguer_acquisitionId_fkey`;

-- DropIndex
DROP INDEX `AcquisitionCombo_acquisitionId_comboId_key` ON `acquisitioncombo`;

-- DropIndex
DROP INDEX `AcquisitionDrink_acquisitionId_drinkId_key` ON `acquisitiondrink`;

-- DropIndex
DROP INDEX `AcquisitionHamburguer_acquisitionId_hamburguerId_key` ON `acquisitionhamburguer`;

-- AlterTable
ALTER TABLE `acquisitioncombo` DROP COLUMN `qtd`;

-- AlterTable
ALTER TABLE `acquisitiondrink` DROP COLUMN `qtd`;

-- AlterTable
ALTER TABLE `acquisitionhamburguer` DROP COLUMN `qtd`;

-- AlterTable
ALTER TABLE `usercupom` DROP COLUMN `qtd`;

-- AddForeignKey
ALTER TABLE `ComboHamburguer` ADD CONSTRAINT `ComboHamburguer_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDrink` ADD CONSTRAINT `ComboDrink_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AcquisitionDrink` ADD CONSTRAINT `AcquisitionDrink_acquisitionId_fkey` FOREIGN KEY (`acquisitionId`) REFERENCES `Acquisition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
