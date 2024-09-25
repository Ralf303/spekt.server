/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Map` table. All the data in the column will be lost.
  - Added the required column `name` to the `Map` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Map" DROP COLUMN "createdAt",
ADD COLUMN     "name" TEXT NOT NULL;
