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
  kcals: z.number().optional(),
  fat: z.number().optional(),
  cholesterol: z.number().optional(),
  sodium: z.number().optional(),
  potassium: z.number().optional(),
  carbohydrate: z.number().optional(),
  Protein: z.number().optional(),
  recipes: z.string().array(),
  userId: z.string(),
});

export const getUser = z.object({
  email: z.string(),
});

export type createFoodInput = z.TypeOf<typeof createFoodSchema>;
