import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { Dish, Restaurant, Review } from "../entities/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], string>({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
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
  }),
});

export const {
  useGetReviewsQuery,
  useLazyGetReviewsQuery,
  useGetRestaurantsQuery,
  useGetMenuQuery,
  useGetDishQuery,
} = api;
