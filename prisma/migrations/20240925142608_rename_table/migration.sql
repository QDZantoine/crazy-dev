/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Article";

-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "utilLink" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "fakeNews" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);
