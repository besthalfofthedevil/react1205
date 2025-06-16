import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes, type Dish } from "../mocks/normalized-mock";
import type { RootState } from "../redux/store";

export interface DishesStore {
  ids: string[];
  dishes: Record<string, Dish>;
}

const initialState: DishesStore = {
  ids: normalizedDishes.map(({ id }) => id),
  dishes: normalizedDishes.reduce<Record<string, Dish>>((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState,
  reducers: {},
  selectors: {
    selectDishIds: (store: DishesStore) => store.ids,
    selectDishById: (store: DishesStore, id: string) => store.dishes[id],
  },
});

export const { selectDishIds, selectDishById } = dishesSlice.selectors;

export const selectDishSlice = (state: RootState) => state[dishesSlice.name];
