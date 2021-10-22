//Utils
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNumberSelected, cleanNumbersArray } from "../../store/games";

//Styles
import {
  Container,
  Content,
  GameDescription,
  GameList,
  GameWrapper,
  NumbersWrapper,
} from "./styles";
import api from "../../api/api.json";

//Components
import Header from "../../components/layout/Header";
import GameButton from "../../components/Game/GameButton";
import Footer from "../../components/layout/Footer";
import NumberButton from "../../components/Game/NumberButton";
import Cart from "../../components/Cart/Cart";
import ActionList from "../../components/Game/Actions/ActionList";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const dispatch = useDispatch();

  const gameResponse = useMemo(() => api.types[gameSelected], [gameSelected]);

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

  const handleAddSelectedNumber = (index: number) => {
    try {
      dispatch(addNumberSelected({ index, max: gameResponse.max_number }));
    } catch (e) {
      alert(e);
    }
  };

  const getGameNumbers = () => {
    var numbers = [];
    for (let i = 1; i <= gameResponse.range; i++) {
      numbers.push(
        <NumberButton
          key={i}
          index={("0" + i).slice(-2)}
          color={gameResponse.color}
          onClick={() => {
            handleAddSelectedNumber(i);
          }}
        />
      );
    }
    return numbers;
  };

  return (
    <Container>
      <Header />
      <Content>
        <GameWrapper>
          <h2>
            NEW BET <span>FOR {gameResponse.type}</span>
          </h2>
          <h4>Choose a game</h4>
          <GameList>{games}</GameList>
          <h4>Fill your bet</h4>
          <GameDescription>{gameResponse.description}</GameDescription>
          <NumbersWrapper>{getGameNumbers()}</NumbersWrapper>
          <ActionList gameSelected={gameSelected} />
        </GameWrapper>
        <Cart />
      </Content>
      <Footer />
    </Container>
  );
}
