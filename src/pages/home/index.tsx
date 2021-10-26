//Utils
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addNumberSelected } from "../../store/games";
import toast from "react-hot-toast";

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
import {
  Header,
  Footer,
  ActionList,
  NumberButton,
  Cart,
  GamesList,
  Toast,
} from "../../components";

export default function Home(): JSX.Element {
  const [gameSelected, setGameSelected] = useState(0);
  const dispatch = useDispatch();

  const gameResponse = useMemo(() => api.types[gameSelected], [gameSelected]);

  const handleAddSelectedNumber = (index: number) => {
    try {
      dispatch(addNumberSelected({ index, max: gameResponse.max_number }));
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const getGameNumbers = () => {
    let numbers = [];
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
      <Toast />
    </Container>
  );
}
