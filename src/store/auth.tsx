import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api.json";
export interface UserProps {
  email: string;
  password: string;
  name: string;
  id: string;
}

interface AuthProps {
  user: UserProps;
  isAuthenticated: boolean;
}
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
      const data: UserProps = action.payload;
      state.user.email = data.email;
      state.user.password = data.password;
      state.user.id = data.id;
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "Authenticated");
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      localStorage.removeItem("isAuthenticated");
    },
    signIn(state, action) {
      const data: UserProps = action.payload;
      api.users.push({
        email: data.email,
        name: data.name,
        password: data.password,
        id: data.id,
      });
    },
  },
});

export const { logIn, logOut, signIn } = authSlice.actions;
export default authSlice.reducer;
