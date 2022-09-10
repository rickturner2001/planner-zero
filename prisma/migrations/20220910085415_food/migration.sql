/*
  Warnings:

  - You are about to drop the column `Protein` on the `Food` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Food" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "description" TEXT,
    "quantity" REAL NOT NULL,
    "type" TEXT,
    "kcal" REAL,
    "fat" REAL,
    "cholesterol" REAL,
    "sodium" REAL,
    "potassium" REAL,
    "carbohydrate" REAL,
    "protein" REAL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Food" ("carbohydrate", "cholesterol", "description", "emoji", "fat", "id", "kcal", "name", "potassium", "quantity", "sodium", "type", "userId") SELECT "carbohydrate", "cholesterol", "description", "emoji", "fat", "id", "kcal", "name", "potassium", "quantity", "sodium", "type", "userId" FROM "Food";
DROP TABLE "Food";
ALTER TABLE "new_Food" RENAME TO "Food";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
