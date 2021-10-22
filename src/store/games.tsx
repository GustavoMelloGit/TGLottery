import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api.json";
interface GameProps {
  type: string;
  numbers: number[];
}
interface INumberProps {
  index: number;
  max: number;
}
const initialState: GameProps = {
  type: "",
  numbers: [],
};

const gamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    addNumberSelected(state, action) {
      const data: INumberProps = action.payload;
      if (!state.numbers.includes(data.index)) {
        if (state.numbers.length < data.max) {
          state.numbers.push(data.index);
        } else {
          throw new Error("Max numbers selected");
        }
      } else {
        state.numbers.splice(state.numbers.indexOf(data.index), 1);
      }
    },
    cleanNumbersArray(state) {
      state.numbers = [];
    },
    completeGame(state, action) {
      const data: { max: number; range: number } = action.payload;
      selectRandomNumbers();
      function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      function selectRandomNumbers() {
        if (state.numbers.length < data.max) {
          const random = randomNumber(1, data.range);
          console.log(random);
          state.numbers.push(random);
          selectRandomNumbers();
        } else return;
      }
    },
    addToCart(state, action) {
      const data: GameProps = action.payload;
    },
  },
});

export const { addNumberSelected, cleanNumbersArray, completeGame } =
  gamesSlice.actions;
export default gamesSlice.reducer;
