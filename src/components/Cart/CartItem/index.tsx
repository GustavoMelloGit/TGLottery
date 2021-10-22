import React from "react";
import { GameInfo, ItemContainer } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import api from "../../../api/api.json";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/games";

interface ICartItem {
  numbers: number[];
  type: string;
  id: number;
}

export default function CartItem(props: ICartItem) {
  const game = api.types.find((game) => game.type === props.type);
  const dispatch = useDispatch();

  let numbers = props.numbers;
  numbers = numbers.slice().sort((a, b) => a - b);

  const price = game!.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleRemoveItem() {
    dispatch(removeFromCart(props.id));
  }
  return (
    <ItemContainer>
      <FiTrash2 className="img" onClick={handleRemoveItem} />
      <GameInfo color={game!.color}>
        <p>{numbers.join(", ")}</p>
        <span>
          {props.type} <span>{price}</span>
        </span>
      </GameInfo>
    </ItemContainer>
  );
}
