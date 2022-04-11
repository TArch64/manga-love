-- CreateTable
CREATE TABLE "DatabasePasswordReset" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "code" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DatabasePasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabasePasswordReset_code_key" ON "DatabasePasswordReset"("code");

-- AddForeignKey
ALTER TABLE "DatabasePasswordReset" ADD CONSTRAINT "DatabasePasswordReset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DatabaseUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
