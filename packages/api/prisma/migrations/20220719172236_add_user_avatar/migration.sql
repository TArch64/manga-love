/*
  Warnings:

  - You are about to drop the `DatabasePasswordReset` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[avatarId]` on the table `DatabaseUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatarId` to the `DatabaseUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DatabaseUserActionType" AS ENUM ('RESET_PASSWORD', 'EMAIL_VERIFICATION');

-- DropForeignKey
ALTER TABLE "DatabasePasswordReset" DROP CONSTRAINT "DatabasePasswordReset_userId_fkey";

-- AlterTable
ALTER TABLE "DatabaseUser" ADD COLUMN     "avatarId" TEXT NOT NULL;

-- DropTable
DROP TABLE "DatabasePasswordReset";

-- CreateTable
CREATE TABLE "DatabaseUserAction" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(200) NOT NULL,
    "type" "DatabaseUserActionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DatabaseUserAction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUserAction_code_key" ON "DatabaseUserAction"("code");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUser_avatarId_key" ON "DatabaseUser"("avatarId");

-- AddForeignKey
ALTER TABLE "DatabaseUser" ADD CONSTRAINT "DatabaseUser_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "DatabaseImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseUserAction" ADD CONSTRAINT "DatabaseUserAction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DatabaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
