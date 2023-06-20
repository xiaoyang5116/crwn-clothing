import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectorUserReducer = (state:RootState): UserState => state.user;

export const selectorCurrentUser = createSelector(
  [selectorUserReducer],
  (user) => user.currentUser
);
