//Utils
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNumberSelected } from "../../store/games";

//Styles
import {
  Container,
  Content,
  GameDescription,
  GameWrapper,
  NumbersWrapper,
} from "./styles";
import api from "../../api/api.json";

//Components
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import NumberButton from "../../components/Game/NumberButton";
import Cart from "../../components/Cart/Cart";
import ActionList from "../../components/Game/Actions/ActionList";
import GamesList from "../../components/Game/GamesList";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const dispatch = useDispatch();

  const gameResponse = useMemo(() => api.types[gameSelected], [gameSelected]);

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
          <GamesList
            gameSelected={gameSelected}
            setGameSelected={setGameSelected}
          />
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
