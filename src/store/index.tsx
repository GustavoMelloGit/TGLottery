import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import gamesSlice from "./games";
import {
  addNumberSelected,
  cleanNumbersArray,
  completeGame,
  addToCart,
  removeFromCart,
  saveGames,
  clearCartGames,
} from "./games";
import { logIn, logOut, signIn } from "./auth";

const store = configureStore({
  reducer: {
    auth: authSlice,
    games: gamesSlice,
  },
});

export {
  logIn,
  logOut,
  signIn,
  addNumberSelected,
  cleanNumbersArray,
  completeGame,
  addToCart,
  removeFromCart,
  saveGames,
  clearCartGames,
};
export type RootState = ReturnType<typeof store.getState>;
export default store;
