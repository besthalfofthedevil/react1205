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
  restaurants: normalizedRestaurants.reduce<Record<string, Restaurant>>(
    (acc, restraunt) => {
      acc[restraunt.id] = restraunt;

      return acc;
    },
    {}
  ),
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
