//Utils
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";

//Styling
import { ItemsList } from "./styles";

//Components
import { CartItem } from "..";

export default function CartList() {
  const games = useSelector((state: RootState) => state.games);
  return (
    <ItemsList>
      {games.cartGames.map((game, index) => (
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
