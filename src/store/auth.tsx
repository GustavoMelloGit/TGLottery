import { createSlice } from "@reduxjs/toolkit";

interface UserProps {
  email: string;
  password: string;
  id: string;
}

interface AuthProps {
  user: UserProps;
  isAuthenticated: boolean;
}
const initialState: AuthProps = {
  isAuthenticated: false,
  user: {
    email: "",
    password: "",
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
    logOut(state, action) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
