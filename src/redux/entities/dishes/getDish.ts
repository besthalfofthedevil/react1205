import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishesSlice";

export const getDish = createAsyncThunk(
  "dishes/getDish",
  async (dishId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (dishId, { getState }) => {
      //TODO: Imptove types
      return !selectDishById(getState(), dishId);
    },
  }
);
