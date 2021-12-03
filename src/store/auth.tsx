import { createSlice } from "@reduxjs/toolkit";
import { calculateRemainingTime } from "@utils/authentication";
import { AuthProps, ILogin } from "../models/AuthInterfaces";

const initialState: AuthProps = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  user: {
    email: "",
    password: "",
    name: "",
    id: localStorage.getItem("@tgl:token") || "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("@tgl:token");
    },
    logIn(state, action) {
      const data: ILogin = action.payload;
      const { expirationTime } = action.payload;

      const remainingTime = calculateRemainingTime(expirationTime);

      setTimeout(logOut, 3000);
      console.log(remainingTime);

      state.user.email = data.email;
      state.user.password = data.password;
      state.user.id = data.idToken;
      state.isAuthenticated = true;

      localStorage.setItem("isAuthenticated", "Authenticated");
      localStorage.setItem("@tgl:token", data.idToken);
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
