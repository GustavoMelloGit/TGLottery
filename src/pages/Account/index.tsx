//Utils
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useHistory } from "react-router";
import api from "../../api/api.json";

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
  GamesList,
  ArrowedButton,
  GameItem,
} from "../../components";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const history = useHistory();
  const savedGames = useSelector((state: RootState) => state.games.savedGames);
  const gameResponse = api.types[gameSelected];

  const gameFilter = savedGames.filter(
    (game) => game.type === gameResponse.type
  );

  const games = gameFilter.map((game, index) => (
    <li key={index}>
      <GameItem type={game.type} numbers={game.numbers} date={game.date} />
    </li>
  ));

  function handleNewBet() {
    history.push("/home");
  }
  return (
    <Container>
      <Header />
      <Content>
        <ContentHeader>
          <h1>Recent games</h1>
          <Filters>
            <span>Filters</span>
            <GamesList
              gameSelected={gameSelected}
              setGameSelected={setGameSelected}
            />
          </Filters>
          <ArrowedButton
            text="New Bet"
            color="#B5C401"
            className="button"
            onClick={handleNewBet}
          />
        </ContentHeader>
        <GamesListWrapper>{games}</GamesListWrapper>
      </Content>
      <Footer />
    </Container>
  );
}
