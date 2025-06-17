import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurantsSlice";

export const getRestaurant = createAsyncThunk(
  "restaurant/getRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/restaurant/${restaurantId}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      //TODO: Imptove types
      return !selectRestaurantById(getState(), restaurantId);
    },
  }
);
