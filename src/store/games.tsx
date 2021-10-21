import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api.json";

const initialState = api.types;

const gamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {},
});
