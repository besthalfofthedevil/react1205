import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsTotal } from "./restaurantsSlice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurants`);
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Failed to fetch restaurants");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      //TODO: Imptove types
      const restaurantsCount = selectRestaurantsTotal(getState());
      // We migh have only one restaurant if user started from restraun page.
      return restaurantsCount < 2;
    },
  }
);
