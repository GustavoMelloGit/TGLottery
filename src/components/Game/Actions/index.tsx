//Utils
import api from "../../../api/api.json";
import { useDispatch } from "react-redux";
import {
  addToCart,
  cleanNumbersArray,
  completeGame,
} from "../../../store/games";
import toast from "react-hot-toast";

//Styling
import { ActionsListContainer } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

//Components
import ActionButton from "./sub_components/ActionButton";

interface IActionList {
  gameSelected: number;
}

export default function ActionList({ gameSelected }: IActionList): JSX.Element {
  const dispatch = useDispatch();
  const gameResponse = api.types[gameSelected];

  function handleClearGame() {
    dispatch(cleanNumbersArray());
  }
  function handleCompleteGame() {
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
    } catch (e: any) {
      toast.error(e.message);
    }
  }
  return (
    <ActionsListContainer>
      <li>
        <ActionButton
          text="Complete game"
          gameColor={gameResponse.color}
          onClick={handleCompleteGame}
          data-cy="completeGame-button"
        />
      </li>
      <li>
        <ActionButton
          text="Clear game"
          gameColor={gameResponse.color}
          onClick={handleClearGame}
          data-cy="clearGame-button"
        />
      </li>
      <li>
        <ActionButton
          text="Add to cart"
          Image={AiOutlineShoppingCart}
          gameColor={gameResponse.color}
          onClick={handleAddToCart}
          data-cy="addToCart-button"
          filled
        />
      </li>
    </ActionsListContainer>
  );
}
