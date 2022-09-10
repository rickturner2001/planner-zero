import { Food } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginRequired from "../components/LoginRequired";
import PageContainer from "../components/PageContainer";
import { FoodType } from "../types";
import { trpc } from "../utils/trpc";
import { getTextByIngredientType } from "./new-ingredient";

const Ingredients = () => {
  const { data: session } = useSession();
  const rounter = useRouter();

  const { data: ingredients } = trpc.useQuery(["ingredient.get-ingredients"]);

  const IngredientCard = ({ ingredient }: { ingredient: Food }) => {
    return (
      <div className="card w-96  bg-base-200 select-none shadow cursor-pointer hover:scale-105 transition-all">
        <figure>
          <p className="text-7xl p-8 select-none">{ingredient.emoji || "❓"}</p>
        </figure>
        <div className="card-body">
          <div className="flex justify-between gap-5 items-center">
            <h2 className="card-title w-[50%] truncate">
              {ingredient.name || "Some Ingredient"}
            </h2>
            <p className=" text-base-content/70 text-sm font-bold w-[20%]">
              Quantity
            </p>
            <p className="text-sm font-bold max-w-[30%] truncate">
              {ingredient.quantity | 0}
            </p>
          </div>
          <div className="divider"></div>

          <div className="flex gap-4">
            <div className="dropdown dropdown-top w-1/2">
              <div tabIndex={0}>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Kcals
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.kcal}
                  </p>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Proteins
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.protein}
                  </p>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Fats
                  </span>
                  <p className="text-sm font-bold truncate">{ingredient.fat}</p>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Carbohydrates
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.carbohydrate}
                  </p>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Sodium
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.cholesterol}
                  </p>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-top w-1/2">
              <div tabIndex={0}>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Potassium
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.sodium}
                  </p>
                </div>
                <div className="flex items-center p-1">
                  <span className="text-base-content/70 w-28 text-xs">
                    Cholesterol
                  </span>
                  <p className="text-sm font-bold truncate">
                    {ingredient.potassium}
                  </p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-center">
                  {getTextByIngredientType(ingredient.type as FoodType)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageContainer
      title={`${
        session?.user?.name?.endsWith("s") || session?.user?.name?.endsWith("x")
          ? `${session?.user?.name}'`
          : `${session?.user?.name}'s`
      } Ingredients`}
    >
      <div className=" bg-gradient-to-r from-amber-400 to-amber-600 rounded p-8 mt-10">
        <div className="grid grid-cols-3 h-full gap-y-5">
          {ingredients?.map((ingredient) => {
            return (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default Ingredients;
