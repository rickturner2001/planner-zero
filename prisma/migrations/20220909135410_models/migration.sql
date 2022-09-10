-- CreateTable
CREATE TABLE "Food" (
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
    "Protein" REAL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecipeSteps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "RecipeSteps_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeeklyPlanner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "WeeklyPlanner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FoodToRecipe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FoodToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Food" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FoodToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DayToRecipe" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_DayToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Day" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DayToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "WeeklyPlanner_userId_key" ON "WeeklyPlanner"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_FoodToRecipe_AB_unique" ON "_FoodToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodToRecipe_B_index" ON "_FoodToRecipe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DayToRecipe_AB_unique" ON "_DayToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToRecipe_B_index" ON "_DayToRecipe"("B");
