import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const result = await fetch(`http://localhost:3001/api/restaurants`)
      .then((response) => response.json())

    if (!result?.length) {
      return rejectWithValue("Failed to fetch restaurants");

    }
     return result; 
  }
);
