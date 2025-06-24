import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type Dish } from "../types";
import type { RootState } from "../../store";
import { getRestaurantMenu } from "./getMenu";
import { getDish } from "./getDish";
import { api } from "../../api";

export const dishEntityAdapter = createEntityAdapter<Dish>();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: dishEntityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantMenu.fulfilled, (state, action) => {
        const { payload } = action;
        dishEntityAdapter.upsertMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, action) => {
        const { payload } = action;
        dishEntityAdapter.upsertOne(state, payload);
      })
      .addMatcher(api.endpoints.getMenu.matchFulfilled, (state, action) => {
        const { payload } = action;
        dishEntityAdapter.upsertMany(state, payload);
      });
  },
});

export const selectDishesSlice = (state: RootState) => state[dishesSlice.name];

export const { selectIds: selectDishIds, selectById: selectDishById } =
  dishEntityAdapter.getSelectors(selectDishesSlice);
