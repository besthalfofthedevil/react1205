import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type User } from "../types";
import type { RootState } from "../../store";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter<User>();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const { payload } = action;
      entityAdapter.upsertMany(state, payload);
    });
  },
});

export const selectReviewssSlice = (state: RootState) =>
  state[usersSlice.name];

export const {
  selectIds: selectUserIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal,
} = entityAdapter.getSelectors(selectReviewssSlice);
