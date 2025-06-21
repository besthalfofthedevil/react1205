import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type Restaurant } from "../types";
import { getRestaurants } from "./getRestaurants";
import type { RootState } from "../../store";
import { getRestaurant } from "./getRestaurant";

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.fulfilled, (state, action) => {
        const { payload } = action;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (_, action) => {
        console.error("Failed to fetch restaurants:", action.error.message);
      })
      .addCase(getRestaurant.fulfilled, (state, action) => {
        const { payload } = action;
        entityAdapter.upsertOne(state, payload);
      });
  },
});

const selectRestaurantSlice = (state: RootState) => state[restaurantSlice.name];

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);
