-- CreateEnum
CREATE TYPE "DatabaseMangaSource" AS ENUM ('KITSU');

-- CreateEnum
CREATE TYPE "DatabaseMangaType" AS ENUM ('MANGA', 'MANHUA', 'MANHWA');

-- CreateTable
CREATE TABLE "DatabaseUser" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,

    CONSTRAINT "DatabaseUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseManga" (
    "id" TEXT NOT NULL,
    "source" "DatabaseMangaSource" NOT NULL,
    "sourceId" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "originalName" VARCHAR(200) NOT NULL,
    "uaName" VARCHAR(200),
    "description" TEXT NOT NULL,
    "type" "DatabaseMangaType" NOT NULL,
    "releaseDate" DATE,
    "finishDate" DATE,

    CONSTRAINT "DatabaseManga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseImage" (
    "id" TEXT NOT NULL,
    "originalSrc" TEXT NOT NULL,
    "originalAspectRatio" DOUBLE PRECISION NOT NULL,
    "targetId" TEXT NOT NULL,

    CONSTRAINT "DatabaseImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUser_email_key" ON "DatabaseUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseManga_source_sourceId_key" ON "DatabaseManga"("source", "sourceId");

-- AddForeignKey
ALTER TABLE "DatabaseImage" ADD CONSTRAINT "DatabaseImage_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "DatabaseManga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
