import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers, type User } from "../../../mocks/normalized-mock";

export interface UsersStore {
  ids: string[];
  users: Record<string, User>;
}

const initialState: UsersStore = {
  ids: normalizedUsers.map(({ id }) => id),
  users: normalizedUsers.reduce<Record<string, User>>((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  selectors: {
    selectUserIds: (store: UsersStore) => store.ids,
    selectUserById: (store: UsersStore, id: string) => store.users[id],
  },
});

export const { selectUserIds, selectUserById } = usersSlice.selectors;
