/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `DatabaseUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `DatabaseUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DatabaseUser" ADD COLUMN     "username" VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUser_username_key" ON "DatabaseUser"("username");
