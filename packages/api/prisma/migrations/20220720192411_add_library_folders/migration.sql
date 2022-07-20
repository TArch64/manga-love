-- CreateTable
CREATE TABLE "DatabaseLibraryFolder" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DatabaseLibraryFolder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseLibraryFolder_name_userId_key" ON "DatabaseLibraryFolder"("name", "userId");

-- AddForeignKey
ALTER TABLE "DatabaseLibraryFolder" ADD CONSTRAINT "DatabaseLibraryFolder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DatabaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
