/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `DatabaseLibraryFolder` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DatabaseLibraryFolder" ADD COLUMN     "mangaCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseLibraryFolder_id_userId_key" ON "DatabaseLibraryFolder"("id", "userId");
