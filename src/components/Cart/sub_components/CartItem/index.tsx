//Utils
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/games";
import api from "../../../../api/api.json";

//Styling
import { FiTrash2 } from "react-icons/fi";
import { GameInfo, ItemContainer } from "./styles";

interface ICartItem {
  numbers: number[];
  type: string;
  id: number;
}

export default function CartItem(props: ICartItem): JSX.Element {
  const game = api.types.find((game) => game.type === props.type);
  const dispatch = useDispatch();

  let numbers = props.numbers;
  numbers = numbers.slice().sort((a, b) => a - b);

  const price = game!.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleRemoveItem() {
    dispatch(removeFromCart({ id: props.id, price: game!.price }));
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
