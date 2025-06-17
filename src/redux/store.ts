import {
  configureStore
} from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dishes/dishesSlice";
import { cartSlice } from "./entities/cart/cartSlice";
import { restaurantSlice } from "./entities/restaurants/restaurantsSlice";
import { reveiwsSlice } from "./entities/reviews/reviewsSlice";
import { usersSlice } from "./entities/users/usersSlice";
import { requestSlice } from "./entities/request/requestSlice";
import { useDispatch } from "react-redux";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log(action);
  next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reveiwsSlice.name]: reveiwsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(loggerMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
