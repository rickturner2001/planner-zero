import { useEffect, useReducer, useState } from "react";
import PageContainer from "../components/PageContainer";
import {
  FoodType,
  IngredientAction,
  IngredientActionType,
  IngredientState,
} from "../types";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import EmojiModal from "../components/EmojiModal";

const initialState: IngredientState = {
  name: "",
  emoji: "",
  quantity: 0,
  type: FoodType.BEAN,
  kcals: 0,
  fat: 0,
  cholesterol: 0,
  sodium: 0,
  potassium: 0,
  carbohydrate: 0,
  protein: 0,
};

export const getTextByIngredientType = (ingredientType: FoodType) => {
  switch (ingredientType) {
    case FoodType.BEAN:
      return (
        <span className="badge badge-lg bg-amber-900 border-none">
          {"Bean 🫘"}
        </span>
      );
    case FoodType.FRUIT:
      return (
        <span className="badge badge-lg bg-amber-500 border-none">
          {"Fruit 🥝"}
        </span>
      );

    case FoodType.GRAIN:
      return (
        <span className="badge badge-lg bg-yellow-600 border-none w-max ">
          {"Grain 🌾"}
        </span>
      );
    case FoodType.MEAT:
      return (
        <span className="badge badge-lg bg-red-700 border-none w-max">
          {"Meat 🥩"}
        </span>
      );
    case FoodType.NUT:
      return (
        <span className="badge badge-lg badge-ghost w-max">{"Nut 🥜"}</span>
      );
    case FoodType.POULTRY:
      return (
        <span className="badge badge-lg bg-amber-800 border-none w-max">
          {"Poultry 🍗"}
        </span>
      );
    case FoodType.VEGETABLE:
      return (
        <span className="badge badge-lg bg-green-700 border-none w-max">
          {"Vegetable 🥗"}
        </span>
      );
  }
};

import Select from "react-select";
import { trpc } from "../utils/trpc";

const reducer = (state: IngredientState, aciton: IngredientAction) => {
  switch (aciton.type) {
    case IngredientActionType.SET_NAME:
      return { ...state, name: aciton.payload as string };
    case IngredientActionType.SET_EMOJI:
      return { ...state, emoji: aciton.payload as string };
    case IngredientActionType.SET_CARBOHYDRATE:
      return { ...state, carbohydrate: aciton.payload as number };
    case IngredientActionType.SET_CHOLESTEROL:
      return { ...state, cholesterol: aciton.payload as number };
    case IngredientActionType.SET_FAT:
      return { ...state, fat: aciton.payload as number };
    case IngredientActionType.SET_KCALS:
      return { ...state, kcals: aciton.payload as number };
    case IngredientActionType.SET_POTASSIUM:
      return { ...state, potassium: aciton.payload as number };
    case IngredientActionType.SET_PROTEIN:
      return { ...state, protein: aciton.payload as number };
    case IngredientActionType.SET_SODIUM:
      return { ...state, sodium: aciton.payload as number };
    case IngredientActionType.SET_TYPE:
      return { ...state, type: aciton.payload as FoodType };
    case IngredientActionType.SET_QUANTITY:
      return { ...state, quantity: aciton.payload as number };
    default:
      return state;
  }
};

const NewIngredient = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { mutate, error } = trpc.useMutation(["ingredient.new-ingredient"]);

  useEffect(() => {}, [state.emoji, menuIsActive]);

  const resetState = () => {
    dispatch({ type: IngredientActionType.SET_NAME, payload: "" });
    dispatch({ type: IngredientActionType.SET_CARBOHYDRATE, payload: 0 });
    dispatch({ type: IngredientActionType.SET_CHOLESTEROL, payload: 0 });
    dispatch({ type: IngredientActionType.SET_EMOJI, payload: "" });
    dispatch({ type: IngredientActionType.SET_FAT, payload: 0 });
    dispatch({ type: IngredientActionType.SET_POTASSIUM, payload: 0 });
    dispatch({ type: IngredientActionType.SET_PROTEIN, payload: 0 });
    dispatch({ type: IngredientActionType.SET_QUANTITY, payload: 0 });
    dispatch({ type: IngredientActionType.SET_TYPE, payload: FoodType.BEAN });
    dispatch({ type: IngredientActionType.SET_SODIUM, payload: 0 });
  };

  return (
    <PageContainer title="Ingredient Creation">
      <div className="flex flex-col justify-center items-center  h-[90vh] mt-5  bg-gradient-to-r from-emerald-400 to-emerald-600 rounded">
        <div className=" h-[75%] w-[75%] rounded p-6 ">
          <div className="flex justify-around items-start gap-20">
            <div className=" flex flex-col">
              <div className="flex flex-col justify-around gap-5">
                {/* NAME */}
                <div className="flex flex-col w-full">
                  <div className="flex gap-2">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="text-label opacity-70 font-bold">
                          Name
                        </span>
                      </label>
                      <input
                        value={state.name as string}
                        type={"text"}
                        className={"input input-bordered"}
                        onChange={(e) =>
                          dispatch({
                            type: IngredientActionType.SET_NAME,
                            payload: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-control w-max">
                      <label className="label">
                        <span className="text-label opacity-70 font-bold">
                          Quantity (g)
                        </span>
                      </label>
                      <input
                        value={state.quantity}
                        type={"number"}
                        className={"input input-bordered"}
                        onChange={(e) =>
                          dispatch({
                            type: IngredientActionType.SET_QUANTITY,
                            payload: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="flex gap-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Kcals (cal)
                        </span>
                      </label>
                      <input
                        value={state.kcals}
                        type={"number"}
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_KCALS,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Proteins (g)
                        </span>
                      </label>
                      <input
                        value={state.protein}
                        type={"number"}
                        className="input input-bordered"
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_PROTEIN,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Fats (g)
                        </span>
                      </label>
                      <input
                        value={state.fat}
                        type={"number"}
                        className="input input-bordered"
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_FAT,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Carbohydrates (g)
                        </span>
                      </label>
                      <input
                        value={state.carbohydrate}
                        type={"number"}
                        className="input input-bordered"
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_CARBOHYDRATE,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Sodium (mg)
                        </span>
                      </label>
                      <input
                        value={state.sodium}
                        type={"number"}
                        className="input input-bordered"
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_SODIUM,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold opacity-70">
                          Potassium (mg)
                        </span>
                      </label>
                      <input
                        value={state.potassium}
                        type={"number"}
                        className="input input-bordered"
                        onChange={(e) => {
                          dispatch({
                            type: IngredientActionType.SET_POTASSIUM,
                            payload: e.target.value.length
                              ? parseInt(e.target.value)
                              : 0,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold opacity-70">
                      Ingredient Type
                    </span>
                  </label>

                  <Select
                    options={[
                      { label: "Vegetable 🥗", value: FoodType.VEGETABLE },
                      { label: "Fruit 🥝", value: FoodType.FRUIT },
                      { label: "Grain 🌾", value: FoodType.GRAIN },
                      { label: "Bean 🫘", value: FoodType.BEAN },
                      { label: "Nut 🥜", value: FoodType.NUT },
                      { label: "Meat 🥩", value: FoodType.MEAT },
                      { label: "Poultry 🍗", value: FoodType.POULTRY },
                    ]}
                    onChange={(e) => {
                      if (e)
                        dispatch({
                          type: IngredientActionType.SET_TYPE,
                          payload: e?.value,
                        });
                    }}
                  />
                </div>

                <div className="divider"></div>
                <div className="flex gap-2">
                  <div className="flex flex-col w-full justify-start">
                    <label className="label">
                      <span className="label-text opacity-70 font-bold">
                        Emoji
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="emoji-modal"
                        onClick={() => {
                          setMenuIsActive((prev) => !prev);
                        }}
                        className="btn btn-modal font-bold flex gap-3 "
                      >
                        <p>Ingredient Emoji</p>
                        {state.emoji ? (
                          <p>{state.emoji}</p>
                        ) : (
                          <ArrowDownIcon className="w-5 h-5" />
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold opacity-70">
                        Cholesterol (mg)
                      </span>
                    </label>
                    <input
                      value={state.cholesterol}
                      type={"number"}
                      className="input input-bordered"
                      onChange={(e) => {
                        dispatch({
                          type: IngredientActionType.SET_CHOLESTEROL,
                          payload: e.target.value.length
                            ? parseInt(e.target.value)
                            : 0,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-96 h-max bg-base-200 select-none">
              <figure>
                <p className="text-7xl p-8 select-none">
                  {state.emoji || "❓"}
                </p>
              </figure>
              <div className="card-body">
                <div className="flex justify-between gap-5 items-center">
                  <h2 className="card-title w-[50%] truncate">
                    {state.name || "Some Ingredient"}
                  </h2>
                  <p className=" text-base-content/70 text-sm font-bold w-[20%]">
                    Quantity
                  </p>
                  <p className="text-sm font-bold max-w-[30%] truncate">
                    {state.quantity | 0}
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
                          {state.kcals}
                        </p>
                      </div>
                      <div className="flex items-center p-1">
                        <span className="text-base-content/70 w-28 text-xs">
                          Proteins
                        </span>
                        <p className="text-sm font-bold truncate">
                          {state.protein}
                        </p>
                      </div>
                      <div className="flex items-center p-1">
                        <span className="text-base-content/70 w-28 text-xs">
                          Fats
                        </span>
                        <p className="text-sm font-bold truncate">
                          {state.fat}
                        </p>
                      </div>
                      <div className="flex items-center p-1">
                        <span className="text-base-content/70 w-28 text-xs">
                          Carbohydrates
                        </span>
                        <p className="text-sm font-bold truncate">
                          {state.carbohydrate}
                        </p>
                      </div>
                      <div className="flex items-center p-1">
                        <span className="text-base-content/70 w-28 text-xs">
                          Sodium
                        </span>
                        <p className="text-sm font-bold truncate">
                          {state.cholesterol}
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
                          {state.sodium}
                        </p>
                      </div>
                      <div className="flex items-center p-1">
                        <span className="text-base-content/70 w-28 text-xs">
                          Cholesterol
                        </span>
                        <p className="text-sm font-bold truncate">
                          {state.potassium}
                        </p>
                      </div>
                      <div className="divider"></div>
                      <div className="">
                        {getTextByIngredientType(state.type)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                <div className="card-actions w-full">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => {
                      console.table(state);
                      mutate({
                        carbohydrate: state.carbohydrate,
                        cholesterol: state.cholesterol,
                        emoji: state.emoji as string,
                        fat: state.fat,
                        kcal: state.kcals,
                        name: state.name as string,
                        potassium: state.potassium,
                        protein: state.protein,
                        quantity: parseInt(state.quantity.toString()),
                        sodium: state.sodium,
                        type: state.type,
                        description: "",
                      });
                      resetState();
                    }}
                  >
                    Create Ingredient
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuIsActive && (
        <EmojiModal dispatch={dispatch} setMenuIsActive={setMenuIsActive} />
      )}
    </PageContainer>
  );
};

export default NewIngredient;
