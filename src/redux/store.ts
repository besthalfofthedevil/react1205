import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dishes/dishesSlice";
import { cartSlice } from "./entities/cart/cartSlice";
import { restaurantSlice } from "./entities/restaurants/restaurantsSlice";
import { reveiwsSlice } from "./entities/reviews/reviewsSlice";
import { usersSlice } from "./entities/users/usersSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reveiwsSlice.name]: reveiwsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
 