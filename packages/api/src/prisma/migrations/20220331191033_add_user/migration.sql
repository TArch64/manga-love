-- CreateTable
CREATE TABLE "DatabaseUser" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(200) NOT NULL,

    CONSTRAINT "DatabaseUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseUser_email_key" ON "DatabaseUser"("email");
