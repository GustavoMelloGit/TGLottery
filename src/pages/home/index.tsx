import React, { useState } from "react";
import GameButton from "../../components/Game/GameButton";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  ActionsList,
  Container,
  Content,
  GameDescription,
  GameList,
  GameWrapper,
} from "./styles";
import api from "../../api/api.json";
import ActionButton from "../../components/Game/ActionButton";
import Card from "../../components/ui/Card";

export default function Home() {
  const [gameSelected, setGameSelected] = useState(0);

  const gameResponse = api.types[gameSelected];

  function handleSelectGame(index: number) {
    setGameSelected(index);
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
          <ActionsList>
            <li>
              <ActionButton text="Complete game" color={gameResponse.color} />
            </li>
            <li>
              <ActionButton text="Clear game" color={gameResponse.color} />
            </li>
            <li>
              <ActionButton
                text="Add to cart"
                Image={AiOutlineShoppingCart}
                color={gameResponse.color}
                filled
              />
            </li>
          </ActionsList>
        </GameWrapper>
        <Card>
          <h2>Cart</h2>
        </Card>
      </Content>
      <Footer />
    </Container>
  );
}
