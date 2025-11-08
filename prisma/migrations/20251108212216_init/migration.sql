/*
  Warnings:

  - Added the required column `daysToDeliver` to the `supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "supplier" ADD COLUMN     "daysToDeliver" INTEGER NOT NULL;
