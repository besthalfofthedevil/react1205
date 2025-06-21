import {
  createSlice,
  type PayloadAction,
  type UnknownAction,
} from "@reduxjs/toolkit";

export const RequestStatus = {
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
} as const;

export type RequestStatusType = keyof typeof RequestStatus;

export type RequestsState = Record<string, RequestStatusType>;

const isRequestAction =
  (postfix: string) =>
  (
    action: UnknownAction
  ): action is PayloadAction<unknown, string, Record<string, string>> => {
    return action.type.endsWith(postfix);
  };

export const requestSlice = createSlice({
  name: "request",
  initialState: {} satisfies RequestsState as RequestsState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state, id) => state[id] || RequestStatus.idle,
    selectIsLoading: (state, id) => state[id] === RequestStatus.pending,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isRequestAction(RequestStatus.pending), (state, { meta }) => {
        state[meta.requestId] = RequestStatus.pending;
      })
      .addMatcher(
        isRequestAction(RequestStatus.fulfilled),
        (state, { meta }) => {
          state[meta.requestId] = RequestStatus.fulfilled;
        }
      )
      .addMatcher(
        isRequestAction(RequestStatus.rejected),
        (state, { meta }) => {
          state[meta.requestId] = RequestStatus.rejected;
        }
      );
  },
});

export const { selectRequestStatus } = requestSlice.selectors;
