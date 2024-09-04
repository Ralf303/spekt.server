/*
  Warnings:

  - You are about to drop the column `atual` on the `UserParams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserParams" DROP COLUMN "atual",
ADD COLUMN     "actual" BOOLEAN NOT NULL DEFAULT true;
