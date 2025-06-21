import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "reviews/getRestaurantReviews",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
      );
      const result = await response.json();

      if (!result?.length) {
        return rejectWithValue("Failed to fetch restaurant reviews");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
