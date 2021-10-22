import React from "react";
import { ItemsList } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartItem from "../CartItem";

export default function CartList() {
  const games = useSelector((state: RootState) => state.games);
  return (
    <ItemsList>
      {games.games.map((game, index) => (
        <CartItem
          key={index}
          numbers={game.numbers}
          type={game.type}
          id={index}
        />
      ))}
    </ItemsList>
  );
}
