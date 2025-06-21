import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type Dish } from "../types";
import type { RootState } from "../../store";
import { getRestaurantMenu } from "./getMenu";
import { getDish } from "./getDish";

const entityAdapter = createEntityAdapter<Dish>();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantMenu.fulfilled, (state, action) => {
        const { payload } = action;
        entityAdapter.upsertMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, action) => {
        const { payload } = action;
        entityAdapter.upsertOne(state, payload);
      });
  },
});

export const selectDishesSlice = (state: RootState) => state[dishesSlice.name];

export const { selectIds: selectDishIds, selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);
