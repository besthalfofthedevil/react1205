import { createSlice } from "@reduxjs/toolkit";
import {
  normalizedReviews,
  type Review,
} from "../mocks/normalized-mock";

export interface ReviewsStore {
  ids: string[];
  reviews: Record<string, Review>;
}

const initialState: ReviewsStore = {
  ids: normalizedReviews.map(({ id }) => id),
  reviews: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {} as Record<string, Review>),
};

export const reveiwsSlice = createSlice({
  name: "reveiwsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectReviewIds: (state: ReviewsStore) => state.ids,
    selectReviewById: (state: ReviewsStore, id: string) =>
      state.reviews[id],
  },
});

export const { selectReviewIds, selectReviewById } =
  reveiwsSlice.selectors;
