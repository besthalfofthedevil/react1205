import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers, type User } from "../mocks/normalized-mock";

export interface UsersStore {
  ids: string[];
  users: Record<string, User>;
}

const initialState: UsersStore = {
  ids: normalizedUsers.map(({ id }) => id),
  users: normalizedUsers.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {} as Record<string, User>),
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (store: UsersStore) => store.ids,
    selectRestaurantById: (store: UsersStore, id: string) => store.users[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  usersSlice.selectors;
