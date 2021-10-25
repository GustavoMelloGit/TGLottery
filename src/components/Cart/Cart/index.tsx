import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { saveGames } from "../../../store/games";
import { Centered } from "../../../styles/globalStyles";
import ArrowedButton from "../../ui/ArrowedButton";
import Card from "../../ui/Card";
import CartContent from "../CartContent";
import { CardContent, SaveWrapper } from "./styles";

export default function Cart() {
  const gamesCtx = useSelector((state: RootState) => state.games.cartGames);
  const dispatch = useDispatch();

  function handleSaveCart() {
    dispatch(saveGames());
  }
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
            <h2>Empty cart</h2>
          )}
        </Centered>
      </CardContent>
      <SaveWrapper onClick={handleSaveCart}>
        <ArrowedButton text="Save" color="#27C383" />
      </SaveWrapper>
    </Card>
  );
}
