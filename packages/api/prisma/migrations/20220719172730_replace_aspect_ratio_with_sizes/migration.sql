/*
  Warnings:

  - You are about to drop the column `originalAspectRatio` on the `DatabaseImage` table. All the data in the column will be lost.
  - Added the required column `originalHeight` to the `DatabaseImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalWidth` to the `DatabaseImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DatabaseImage" DROP COLUMN "originalAspectRatio",
ADD COLUMN     "originalHeight" INTEGER NOT NULL,
ADD COLUMN     "originalWidth" INTEGER NOT NULL;
