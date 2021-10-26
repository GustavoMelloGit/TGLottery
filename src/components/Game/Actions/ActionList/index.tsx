import React from "react";
import { ActionsListContainer } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ActionButton from "../ActionButton";
import api from "../../../../api/api.json";
import { useDispatch } from "react-redux";
import {
  addToCart,
  cleanNumbersArray,
  completeGame,
} from "../../../../store/games";

interface IActionList {
  gameSelected: number;
}

export default function ActionList({ gameSelected }: IActionList) {
  const dispatch = useDispatch();
  const gameResponse = api.types[gameSelected];

  function handleClearGame() {
    dispatch(cleanNumbersArray());
  }
  function handleCompleteGame() {
    dispatch(cleanNumbersArray());
    dispatch(
      completeGame({
        max: gameResponse.max_number,
        range: gameResponse.range,
      })
    );
  }
  function handleAddToCart() {
    try {
      dispatch(
        addToCart({
          type: gameResponse.type,
          min: gameResponse.max_number,
          price: gameResponse.price,
        })
      );
    } catch (e) {
      alert(e);
    }
  }
  return (
    <ActionsListContainer>
      <li>
        <ActionButton
          text="Complete game"
          gameColor={gameResponse.color}
          onClick={handleCompleteGame}
        />
      </li>
      <li>
        <ActionButton
          text="Clear game"
          gameColor={gameResponse.color}
          onClick={handleClearGame}
        />
      </li>
      <li>
        <ActionButton
          text="Add to cart"
          Image={AiOutlineShoppingCart}
          gameColor={gameResponse.color}
          onClick={handleAddToCart}
          filled
        />
      </li>
    </ActionsListContainer>
  );
}
