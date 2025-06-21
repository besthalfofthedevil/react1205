import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantMenu = createAsyncThunk(
  "dishes/getRestaurantMenu",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
      );
      const result = await response.json();

      if (!result?.length) {
        return rejectWithValue("Failed to fetch restaurant Menu");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
