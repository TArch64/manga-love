/*
  Warnings:

  - Added the required column `description` to the `DatabaseManga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `DatabaseManga` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DatabaseMangaType" AS ENUM ('MANGA', 'MANHUA', 'MANHWA');

-- AlterTable
ALTER TABLE "DatabaseManga" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "finishDate" DATE,
ADD COLUMN     "releaseDate" DATE,
ADD COLUMN     "type" "DatabaseMangaType" NOT NULL;

-- CreateTable
CREATE TABLE "DatabasePoster" (
    "id" TEXT NOT NULL,
    "originalSrc" TEXT NOT NULL,
    "originalWidth" INTEGER NOT NULL,
    "originalHeight" INTEGER NOT NULL,
    "mangaId" TEXT NOT NULL,

    CONSTRAINT "DatabasePoster_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabasePoster_mangaId_key" ON "DatabasePoster"("mangaId");

-- AddForeignKey
ALTER TABLE "DatabasePoster" ADD CONSTRAINT "DatabasePoster_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "DatabaseManga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
