import { createSlice } from "@reduxjs/toolkit";
import {
  normalizedRestaurants,
  type Restaurant,
} from "../mocks/normalized-mock";

export interface RestaurantStore {
  ids: string[];
  restaurants: Record<string, Restaurant>;
}

const initialState: RestaurantStore = {
  ids: normalizedRestaurants.map(({ id }) => id),
  restaurants: normalizedRestaurants.reduce((acc, restraunt) => {
    acc[restraunt.id] = restraunt;

    return acc;
  }, {} as Record<string, Restaurant>),
};

export const restaurantSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (state: RestaurantStore) => state.ids,
    selectRestaurantById: (state: RestaurantStore, id: string) =>
      state.restaurants[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantSlice.selectors;
