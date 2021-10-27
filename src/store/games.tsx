import { createSlice } from "@reduxjs/toolkit";
import { IGames, INumberProps } from "../models/GamesInterfaces";
const initialState: IGames = {
  game: {
    id: -1,
    type: "",
    date: +new Date(),
    numbers: [],
  },
  cartGames: [],
  savedGames: [],
  totalPrice: 0,
};
const gamesSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    addNumberSelected(state, action) {
      const data: INumberProps = action.payload;
      if (!state.game.numbers.includes(data.index)) {
        if (state.game.numbers.length < data.max) {
          state.game.numbers.push(data.index);
        } else {
          throw new Error("Número máximo de números selecionados");
        }
      } else {
        state.game.numbers.splice(state.game.numbers.indexOf(data.index), 1);
      }
    },
    cleanNumbersArray(state) {
      state.game.numbers = [];
    },
    completeGame(state, action) {
      const data: { max: number; range: number; type: string } = action.payload;
      selectRandomNumbers();
      function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      function selectRandomNumbers() {
        if (state.game.numbers.length < data.max) {
          const random = randomNumber(1, data.range);
          state.game.numbers.push(random);
          selectRandomNumbers();
        } else return;
      }
    },
    addToCart(state, action) {
      const data: { type: string; min: number; price: number } = action.payload;
      if (state.game.numbers.length < data.min) {
        const rest = data.min - state.game.numbers.length;
        throw new Error(
          `Jogo inválido, restam ${rest} número${rest > 1 ? "s" : ""}`
        );
      }
      state.game.type = data.type;
      state.game.date = +new Date();
      state.game.id = state.cartGames.length;
      state.cartGames.push(state.game);
      state.totalPrice += data.price;
      state.game = initialState.game;
    },
    removeFromCart(state, action) {
      const data: { id: number; price: number } = action.payload;
      state.cartGames.splice(data.id, 1);
      state.totalPrice -= data.price;
    },
    saveGames(state) {
      if (state.totalPrice > 30) {
        state.cartGames.forEach((game) => state.savedGames.push(game));
      } else {
        throw new Error("O carrinho precisa ter no mínimo R$30,00");
      }
    },
    clearCartGames(state) {
      state.cartGames = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addNumberSelected,
  cleanNumbersArray,
  completeGame,
  addToCart,
  removeFromCart,
  saveGames,
  clearCartGames,
} = gamesSlice.actions;
export default gamesSlice.reducer;
