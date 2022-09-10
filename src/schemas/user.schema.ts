import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const getUser = z.object({
  email: z.string(),
});

export type createUserInput = z.TypeOf<typeof createUserSchema>;
