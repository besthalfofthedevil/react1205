import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type Review } from "../../../mocks/normalized-mock";
import type { RootState } from "../../store";
import { getReviews } from "./getReviews";

const entityAdapter = createEntityAdapter<Review>();

export const reveiwsSlice = createSlice({
  name: "reveiwsSlice",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, action) => {
      const { payload } = action;
      entityAdapter.upsertMany(state, payload);
    });
  },
});

export const selectReviewssSlice = (state: RootState) =>
  state[reveiwsSlice.name];

export const { selectIds: selectReviewIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewssSlice);
