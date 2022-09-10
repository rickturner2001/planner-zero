export enum FoodType {
  VEGETABLE = "VEGETABLE",
  FRUIT = "FRUIT",
  GRAIN = "GRAIN",
  BEAN = "BEAN",
  NUT = "NUT",
  MEAT = "MEAT",
  POULTRY = "POULTRY",
}

export enum IngredientActionType {
  SET_NAME,
  SET_EMOJI,
  SET_QUANTITY,
  SET_TYPE,
  SET_KCALS,
  SET_FAT,
  SET_CHOLESTEROL,
  SET_SODIUM,
  SET_POTASSIUM,
  SET_CARBOHYDRATE,
  SET_PROTEIN,
  SET_RECIPES,
}

export type IngredientState = {
  name: String;
  emoji: String;
  quantity: number;
  type: FoodType;
  kcals: number;
  fat: number;
  cholesterol: number;
  sodium: number;
  potassium: number;
  carbohydrate: number;
  protein: number;
};

export interface IngredientAction {
  type: IngredientActionType;
  payload: String | number | FoodType;
}
