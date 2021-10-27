//Utils
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory } from "react-router";
import api from "../../api/api.json";
import { GameProps } from "../../models/GamesInterfaces";

//Styling
import {
  Container,
  Content,
  ContentHeader,
  Filters,
  GamesListWrapper,
} from "./styles";

//Components
import {
  Header,
  Footer,
  ArrowedButton,
  GameItem,
  GameButton,
} from "../../components";

export default function Home(): JSX.Element {
  const [gameSelected, setGameSelected] = useState<number[]>([]);
  const savedGames = useSelector((state: RootState) => state.games.savedGames);
  const history = useHistory();
  const gameResponse = api.types;

  function handleNewBet() {
    history.push("/home");
  }
  function handleFilterClicked(index: number) {
    if (gameSelected.includes(index)) {
      setGameSelected((prev) => prev.filter((element) => element !== index));
      return;
    }
    setGameSelected((prev) => [...prev, index]);
  }
  function isSelected(index: number) {
    return gameSelected.includes(index);
  }
  function returnMapOfGames(game: GameProps[]) {
    return game.map((game, index) => (
      <li key={index}>
        <GameItem type={game.type} numbers={game.numbers} date={game.date} />
      </li>
    ));
  }

  const filtersButton = api.types.map((game, index) => (
    <li key={index}>
      <GameButton
        text={game.type}
        textColor={game.color}
        index={index}
        selected={isSelected(index)}
        onClick={() => handleFilterClicked(index)}
      />
    </li>
  ));
  const games = gameSelected.map((number) => gameResponse[number]);
  const gameFilter = savedGames.filter((game) =>
    games.some((element) => element.type === game.type)
  );
  const gamesFiltered = returnMapOfGames(gameFilter);
  const allGames = returnMapOfGames(savedGames);

  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <h1>Recent games</h1>
          <Filters>
            <span>Filters</span>
            {filtersButton}
          </Filters>
          <ArrowedButton
            text="New Bet"
            color="#B5C401"
            className="button"
            onClick={handleNewBet}
          />
        </ContentHeader>
        <GamesListWrapper>
          {gameSelected.length > 0 ? gamesFiltered : allGames}
        </GamesListWrapper>
      </Content>
      <Footer />
    </Container>
  );
}
