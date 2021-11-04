import { createSlice } from "@reduxjs/toolkit";
import { AuthProps, ILogin } from "../models/AuthInterfaces";

const initialState: AuthProps = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  user: {
    email: "",
    password: "",
    name: "",
    id: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      const data: ILogin = action.payload;
      state.user.email = data.email;
      state.user.password = data.password;
      state.user.id = data.idToken;
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "Authenticated");
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
