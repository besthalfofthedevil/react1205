import { createSlice } from "@reduxjs/toolkit";
import {
  normalizedRestaurants,
  type Restaurant,
} from "../mocks/normalized-mock";

export interface RestaurantState {
  ids: string[];
  restaurants: Record<string, Restaurant>;
}

const initialState: RestaurantState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  restaurants: normalizedRestaurants.reduce((acc, restraunt) => {
    acc[restraunt.id] = restraunt;

    return acc;
  }, {} as Record<string, Restaurant>),
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (state: RestaurantState) => state.ids,
    selectRestaurantById: (state: RestaurantState, id: string) =>
      state.restaurants[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantSlice.selectors;
