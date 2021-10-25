import { createSlice } from "@reduxjs/toolkit";
export interface IUser {
  name: string;
  email: string;
  password: string;
  id: string;
}
export interface ISignIn {
  email: string;
  password: string;
  name: string;
}

interface AuthProps {
  users: IUser[];
  user: IUser;
  isAuthenticated: boolean;
}

interface ILogin {
  email: string;
  password: string;
}
const initialState: AuthProps = {
  isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")),
  users: [
    {
      email: "test@test.com",
      password: "123456",
      name: "Teste",
      id: "p1",
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
        throw new Error("Not a valid email or/and password");
      }

      const userExists = state.users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (!userExists) throw new Error("User does not exists");

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
        throw new Error("Enter a valid name");
      } else if (!validEmail(data.email)) {
        throw new Error("Enter a valid email");
      } else if (!validPassword(data.password)) {
        throw new Error("Passwords must be longer than 6");
      }
      if (state.users.find((user) => user.email === data.email)) {
        throw new Error("Email already exists");
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
