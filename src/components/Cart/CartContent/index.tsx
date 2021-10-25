import React from "react";
import CartList from "../CartList";
import { CartContentContainer, CartTotal } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function CartContent() {
  const price = useSelector(
    (state: RootState) => state.games.totalPrice
  ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return (
    <CartContentContainer>
      <CartList />
      <CartTotal>
        <h1>
          Cart <span>total: {price}</span>
        </h1>
      </CartTotal>
    </CartContentContainer>
  );
}
