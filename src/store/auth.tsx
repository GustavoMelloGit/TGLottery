import { createSlice } from "@reduxjs/toolkit";
import { AuthProps, ILogin, ISignIn } from "../models/AuthInterfaces";

const initialState: AuthProps = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  users: [
    {
      email: "",
      password: "",
      name: "",
      id: "",
    },
  ],
  user: {
    email: "",
    password: "",
    name: "",
    id: "",
  },
};

function validEmail(email: string) {
  if (email.length < 6 || !email.includes("@")) {
    return false;
  }
  return true;
}

function validPassword(password: string) {
  if (password.length < 6) {
    return false;
  }
  return true;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      const data: ILogin = action.payload;

      if (!validEmail(data.email) || !validPassword(data.password)) {
        throw new Error("E-mail ou senha inválidos");
      }

      const userExists = state.users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (!userExists) throw new Error("Usuário não existe");

      state.user.email = data.email;
      state.user.password = data.password;
      state.user.id = userExists.id;
      state.user.name = userExists.name;
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

      if (data.name.trim().length < 2) {
        throw new Error("Entre um nome válido");
      } else if (!validEmail(data.email)) {
        throw new Error("Entre um e-mail válido");
      } else if (!validPassword(data.password)) {
        throw new Error("Senhas precisam ser mais longas que 6 caracteres");
      }
      if (state.users.find((user) => user.email === data.email)) {
        throw new Error("E-mail já está sendo utilizado");
      }
      const id = new Date().toString();

      state.users.push({
        email: data.email,
        name: data.name,
        password: data.password,
        id,
      });
    },
  },
});

export const { logIn, logOut, signIn } = authSlice.actions;
export default authSlice.reducer;
