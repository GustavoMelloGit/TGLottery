//Utils
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumberSelected,
  cleanNumbersArray,
  completeGame,
} from "../../store/games";

//Styles
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  ActionsList,
  CardContent,
  CardContentInner,
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
import ActionButton from "../../components/Game/ActionButton";
import Card from "../../components/ui/Card";
import Footer from "../../components/layout/Footer";
import NumberButton from "../../components/Game/NumberButton";
import { RootState } from "../../store";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);
  const dispatch = useDispatch();

  const gameResponse = useMemo(() => api.types[gameSelected], [gameSelected]);
  const user = useSelector((state: RootState) => state.auth.user);

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

  function handleClearGame() {
    dispatch(cleanNumbersArray());
  }
  function handleCompleteGame() {
    dispatch(cleanNumbersArray());
    dispatch(
      completeGame({
        max: gameResponse.max_number,
        range: gameResponse.range,
      })
    );
  }
  function handleAddToCart() {}

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
          <ActionsList>
            <li>
              <ActionButton
                text="Complete game"
                gameColor={gameResponse.color}
                onClick={handleCompleteGame}
              />
            </li>
            <li>
              <ActionButton
                text="Clear game"
                gameColor={gameResponse.color}
                onClick={handleClearGame}
              />
            </li>
            <li>
              <ActionButton
                text="Add to cart"
                Image={AiOutlineShoppingCart}
                gameColor={gameResponse.color}
                onClick={handleAddToCart}
                filled
              />
            </li>
          </ActionsList>
        </GameWrapper>
        <Card>
          <CardContent>
            <h1>Cart</h1>
            <CardContentInner>
              {user.games.length > 0 ? "" : <h2>Carrinho vazio</h2>}
            </CardContentInner>
          </CardContent>
        </Card>
      </Content>
      <Footer />
    </Container>
  );
}
