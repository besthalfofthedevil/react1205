import { createSlice } from "@reduxjs/toolkit";
import {
  // normalizedRestaurants,
  type Restaurant,
} from "../../../mocks/normalized-mock";
import { getRestaurants } from "./getRestraunts";

export interface RestaurantStore {
  ids: string[];
  restaurants: Record<string, Restaurant>;
  requestStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

const initialState: RestaurantStore = {
  ids: [],
  restaurants: {},
  requestStatus: "idle",
};

export const restaurantSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (state: RestaurantStore) => state.ids,
    selectRestaurantById: (state: RestaurantStore, id: string) =>
      state.restaurants[id],
    selectRequestStatus: (state: RestaurantStore) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
          state.requestStatus = "fulfilled";
        const { payload } = action;
        state.ids = (payload as Restaurant[]).map(
          (restaurant) => restaurant.id
        );
        state.restaurants = (payload as Restaurant[]).reduce<
          Record<string, Restaurant>
        >((acc, restraunt) => {
          acc[restraunt.id] = restraunt;

          return acc;
        }, {});
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = "rejected";
        console.error("Failed to fetch restaurants:", action.error.message);
      });
  },
});

export const { selectRestaurantIds, selectRestaurantById, selectRequestStatus,} =
  restaurantSlice.selectors;
