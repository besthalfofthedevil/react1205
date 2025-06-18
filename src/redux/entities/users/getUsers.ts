import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersTotal } from "./usersSlice";

export const getUsers = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Failed to fetch users");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      //TODO: Imptove types
      return !selectUsersTotal(getState());
    },
  }
);
