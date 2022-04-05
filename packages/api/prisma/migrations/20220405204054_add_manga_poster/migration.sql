/*
  Warnings:

  - You are about to drop the `DatabasePoster` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[posterEdgeId]` on the table `DatabaseManga` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `posterEdgeId` to the `DatabaseManga` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DatabaseImageEdgeTarget" AS ENUM ('MANGA');

-- DropForeignKey
ALTER TABLE "DatabasePoster" DROP CONSTRAINT "DatabasePoster_mangaId_fkey";

-- AlterTable
ALTER TABLE "DatabaseManga" ADD COLUMN     "posterEdgeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "DatabasePoster";

-- CreateTable
CREATE TABLE "DatabaseImage" (
    "id" TEXT NOT NULL,
    "originalSrc" TEXT NOT NULL,
    "originalAspectRatio" DOUBLE PRECISION NOT NULL,
    "edgeId" TEXT NOT NULL,

    CONSTRAINT "DatabaseImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseImageEdge" (
    "id" TEXT NOT NULL,
    "type" "DatabaseImageEdgeTarget" NOT NULL,
    "targetId" TEXT NOT NULL,

    CONSTRAINT "DatabaseImageEdge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseImageEdge_type_targetId_key" ON "DatabaseImageEdge"("type", "targetId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseManga_posterEdgeId_key" ON "DatabaseManga"("posterEdgeId");

-- AddForeignKey
ALTER TABLE "DatabaseManga" ADD CONSTRAINT "DatabaseManga_posterEdgeId_fkey" FOREIGN KEY ("posterEdgeId") REFERENCES "DatabaseImageEdge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseImage" ADD CONSTRAINT "DatabaseImage_edgeId_fkey" FOREIGN KEY ("edgeId") REFERENCES "DatabaseImageEdge"("id") ON DELETE CASCADE ON UPDATE CASCADE;
