/*
  Warnings:

  - You are about to drop the `DatabaseManga` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DatabaseImage" DROP CONSTRAINT "DatabaseImage_targetId_fkey";

-- DropTable
DROP TABLE "DatabaseManga";

-- DropEnum
DROP TYPE "DatabaseMangaSource";

-- DropEnum
DROP TYPE "DatabaseMangaType";
