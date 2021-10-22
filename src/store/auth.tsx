import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api.json";
export interface UserProps {
  email: string;
  password: string;
  name: string;
  id: string;
  games: object;
}

export interface ISignIn {
  email: string;
  password: string;
  name: string;
}

interface AuthProps {
  user: UserProps;
  isAuthenticated: boolean;
}

interface ILogin {
  email: string;
  password: string;
}
const initialState: AuthProps = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  user: {
    email: "",
    password: "",
    name: "",
    id: "",
    games: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      const data: ILogin = action.payload;

      const isValid = api.users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!isValid) return;

      state.user.email = data.email;
      state.user.password = data.password;
      state.user.id = isValid.id;
      state.user.name = isValid.name;
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "Authenticated");
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      localStorage.removeItem("isAuthenticated");
    },
    signIn(state, action) {
      const data: ISignIn = action.payload;
      const id = new Date().toString();

      api.users.push({
        email: data.email,
        name: data.name,
        password: data.password,
        games: [],
        id,
      });
    },
  },
});

export const { logIn, logOut, signIn } = authSlice.actions;
export default authSlice.reducer;
