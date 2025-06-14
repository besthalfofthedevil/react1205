import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./slices/restaurantsSlice";
import { dishesSlice } from "./slices/dishesSlice";
import { reveiwsSlice } from "./slices/reviewsSlice";
import { usersSlice } from "./slices/usersSlice";
import { cartSlice } from "./slices/cartSlice";

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
 