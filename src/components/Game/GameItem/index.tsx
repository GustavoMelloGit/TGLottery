import { GameContainer, GameInfo, VerticalLine } from "./styles";
import api from "../../../api/api.json";

interface IGameItem {
  type: string;
  numbers: number[];
  date: number;
}
export default function GameItem(props: IGameItem) {
  const game = api.types.find((game) => game.type === props.type);
  const dateObj = new Date(props.date * 1000);
  const price = game!.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const date =
    ("0" + dateObj.getDay()).slice(-2) +
    "/" +
    ("0" + dateObj.getMonth()).slice(-2) +
    "/" +
    dateObj.getFullYear();
  return (
    <GameContainer>
      <VerticalLine color={game!.color} />
      <GameInfo color={game!.color}>
        <h1>{props.numbers.join(", ")}</h1>
        <span>{`${date} - ${price}`}</span>
        <h1 className="type">{props.type}</h1>
      </GameInfo>
    </GameContainer>
  );
}