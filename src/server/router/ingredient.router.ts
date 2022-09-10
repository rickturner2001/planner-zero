import { createRouter } from "./context";
import { createFoodSchema } from "../../schemas/food.schema";

export const ingredientRouter = createRouter()
  .mutation("new-ingredient", {
    input: createFoodSchema,
    async resolve({ input, ctx }) {
      const ingredient = ctx.prisma.food.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return ingredient;
    },
  })
  .query("get-ingredients", {
    async resolve({ ctx }) {
      return await ctx.prisma.food.findMany({
        where: {
          user: {
            id: ctx.session?.user?.id,
          },
        },
      });
    },
  });
