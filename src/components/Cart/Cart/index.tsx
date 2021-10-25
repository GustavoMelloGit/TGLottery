import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { clearCartGames, saveGames } from "../../../store/games";
import { Centered } from "../../../styles/globalStyles";
import ArrowedButton from "../../ui/ArrowedButton";
import Card from "../../ui/Card";
import CartContent from "../CartContent";
import { CardContent, SaveWrapper } from "./styles";

export default function Cart() {
  const gamesCtx = useSelector((state: RootState) => state.games);
  const dispatch = useDispatch();

  function handleSaveCart() {
    try {
      dispatch(saveGames());
      dispatch(clearCartGames());
      alert("Game(s) saved!");
    } catch (e) {
      alert(e);
      return;
    }
  }
  return (
    <Card>
      <CardContent>
        <h1>Cart</h1>
        <Centered>
          {gamesCtx.cartGames.length > 0 ? (
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
