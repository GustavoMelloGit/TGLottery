import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Centered } from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import CartContent from "../CartContent";
import { CardContent } from "./styles";

export default function Cart() {
  const gamesCtx = useSelector((state: RootState) => state.games.games);
  return (
    <Card>
      <CardContent>
        <h1>Cart</h1>
        <Centered>
          {gamesCtx.length > 0 ? (
            <>
              <CartContent />
            </>
          ) : (
            <h2>Carrinho vazio</h2>
          )}
        </Centered>
      </CardContent>
    </Card>
  );
}
