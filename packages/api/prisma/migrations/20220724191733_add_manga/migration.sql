-- CreateTable
CREATE TABLE "DatabaseLibraryManga" (
    "folderId" TEXT NOT NULL,
    "mangaId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DatabaseManga" (
    "id" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,

    CONSTRAINT "DatabaseManga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseLocaleText" (
    "id" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "ua" TEXT NOT NULL,

    CONSTRAINT "DatabaseLocaleText_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseLibraryManga_folderId_mangaId_key" ON "DatabaseLibraryManga"("folderId", "mangaId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseManga_titleId_key" ON "DatabaseManga"("titleId");

-- AddForeignKey
ALTER TABLE "DatabaseLibraryManga" ADD CONSTRAINT "DatabaseLibraryManga_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "DatabaseLibraryFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseLibraryManga" ADD CONSTRAINT "DatabaseLibraryManga_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "DatabaseManga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseManga" ADD CONSTRAINT "DatabaseManga_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "DatabaseLocaleText"("id") ON DELETE CASCADE ON UPDATE CASCADE;
