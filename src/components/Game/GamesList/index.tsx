import { useDispatch } from "react-redux";
import api from "../../../api/api.json";
import { cleanNumbersArray } from "../../../store/games";
import GameButton from "../GameButton";
import { GameList } from "./styles";

interface IGamesList {
  gameSelected: number;
  setGameSelected: (game: number) => void;
}
export default function GamesList({
  gameSelected,
  setGameSelected,
}: IGamesList) {
  const dispatch = useDispatch();

  function handleSelectGame(index: number) {
    setGameSelected(index);
    dispatch(cleanNumbersArray());
  }
  const games = api.types.map((game, index) => (
    <li key={game.type}>
      <GameButton
        text={game.type}
        textColor={game.color}
        index={index}
        selected={gameSelected}
        onClick={() => handleSelectGame(index)}
      />
    </li>
  ));
  return <GameList>{games}</GameList>;
}
