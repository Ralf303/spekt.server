/*
  Warnings:

  - Added the required column `value` to the `AdminFields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdminFields" ADD COLUMN     "value" TEXT NOT NULL;
