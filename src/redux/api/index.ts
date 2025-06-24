import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type {
  Dish,
  Restaurant,
  ReviewAddDto,
  ReviewDto,
} from "../entities/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query<ReviewDto[], string>({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "reviews", id: "all" }],
    }),
    getRestaurants: builder.query<Restaurant[], undefined>({
      query: () => `restaurants`,
    }),
    getMenu: builder.query<Dish[], string>({
      query: (restaurantId) => `dishes?restaurantId=${restaurantId}`,
    }),
    getDish: builder.query<Dish, string>({
      query: (dishId) => `dish/${dishId}`,
    }),
    addReview: builder.mutation<
      ReviewDto,
      { restaurantId: string; review: ReviewAddDto }
    >({
      query: ({ restaurantId, review }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
    updateReview: builder.mutation<ReviewDto, { review: ReviewDto }>({
      query: ({ review }) => ({
        url: `review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useLazyGetReviewsQuery,
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetDishQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = api;
