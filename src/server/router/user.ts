import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter().mutation("register-user", {
  async resolve({ input, ctx }) {
    const user = {};
  },
});
