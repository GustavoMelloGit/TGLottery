import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import gamesSlice from "./games";

const store = configureStore({
  reducer: {
    auth: authSlice,
    games: gamesSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
