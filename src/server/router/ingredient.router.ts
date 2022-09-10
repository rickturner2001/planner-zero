import { createRouter } from "./context";
import { createFoodSchema, deleteIngredient } from "../../schemas/food.schema";

export const ingredientRouter = createRouter()
  .mutation("new-ingredient", {
    input: createFoodSchema,
    async resolve({ input, ctx }) {
      const ingredient = await ctx.prisma.food.create({
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
  })
  .mutation("delete-ingredient", {
    input: deleteIngredient,

    async resolve({ ctx, input }) {
      const ingredient = await ctx.prisma.food.delete({
        where: {
          id: input.id,
        },
      });
      return ingredient;
    },
  });
