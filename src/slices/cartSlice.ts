import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectDishSlice, type DishesStore } from "./dishesSlice";

export type CartStore = Record<string, number>;

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state: CartStore, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state: CartStore, { payload }) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectItemAmountById: (state: CartStore, id) => {
      return state[id] || 0;
    },
  },
});

const selectCartSlice = (state: RootState) => state[cartSlice.name];

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice: CartStore) => {
    return Object.keys(cartSlice).reduce<{ id: string; amount: number }[]>(
      (acc, id) => {
        acc.push({ id, amount: cartSlice[id] });

        return acc;
      },
      []
    );
  }
);

export const selectCartTotal = createSelector(
  [selectCartSlice, selectDishSlice],
  (cartSlice: CartStore, dishSlice: DishesStore) => {
    return Object.keys(cartSlice).reduce<number>((acc, id) => {

      return acc + dishSlice.dishes[id].price * cartSlice[id];
    }, 0);
  }
);
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
