import React, { useState } from "react";
import Header from "../../components/layout/Header";
import {
  Container,
  Content,
  ContentHeader,
  Filters,
  GamesListWrapper,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Footer from "../../components/layout/Footer";
import GamesList from "../../components/Game/GamesList";
import ArrowedButton from "../../components/ui/ArrowedButton";
import GameItem from "../../components/Game/GameItem";
import { useHistory } from "react-router";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const history = useHistory();
  const savedGames = useSelector((state: RootState) => state.games.savedGames);
  console.log(savedGames);
  const games = savedGames.map((game, index) => (
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
