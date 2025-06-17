import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  type Restaurant,
} from "../../../mocks/normalized-mock";
import { getRestaurants } from "./getRestraunts";
import type { RootState } from "../../store";

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.requestStatus = "fulfilled";
        const { payload } = action;
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = "rejected";
        console.error("Failed to fetch restaurants:", action.error.message);
      });
  },
});

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(
  (state: RootState) => state[restaurantSlice.name]
);

export const { selectRequestStatus } = restaurantSlice.selectors;
