import { z } from "zod";

export const createFoodSchema = z.object({
  name: z.string(),
  emoji: z.string(),
  description: z.string().optional(),
  quantity: z.number(),
  type: z.enum([
    "VEGETABLE",
    "FRUIT",
    "GRAIN",
    "BEAN",
    "NUT",
    "MEAT",
    "POULTRY",
  ]),
  kcal: z.number(),
  fat: z.number(),
  cholesterol: z.number(),
  sodium: z.number(),
  potassium: z.number(),
  carbohydrate: z.number(),
  protein: z.number(),
});

export const deleteIngredient = z.object({
  id: z.string(),
});

export type deleteIngredient = z.TypeOf<typeof deleteIngredient>;

export type createFoodInput = z.TypeOf<typeof createFoodSchema>;
