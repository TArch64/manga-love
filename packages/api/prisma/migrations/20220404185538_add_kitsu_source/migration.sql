/*
  Warnings:

  - A unique constraint covering the columns `[source,sourceId]` on the table `DatabaseManga` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `source` to the `DatabaseManga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceId` to the `DatabaseManga` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DatabaseMangaSource" AS ENUM ('KITSU');

-- AlterTable
ALTER TABLE "DatabaseManga" ADD COLUMN     "source" "DatabaseMangaSource" NOT NULL,
ADD COLUMN     "sourceId" VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseManga_source_sourceId_key" ON "DatabaseManga"("source", "sourceId");
