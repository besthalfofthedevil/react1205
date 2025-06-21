import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dishes/dishesSlice";
import { cartSlice } from "./entities/cart/cartSlice";
import { restaurantSlice } from "./entities/restaurants/restaurantsSlice";
import { reviewsSlice } from "./entities/reviews/reviewsSlice";
import { usersSlice } from "./entities/users/usersSlice";
import { requestSlice } from "./entities/request/requestSlice";
import { useDispatch } from "react-redux";
import { api } from "./api";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log(action);
  next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware, loggerMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
