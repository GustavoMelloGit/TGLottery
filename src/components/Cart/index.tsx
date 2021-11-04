//Utils
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { clearCartGames, saveGames } from "../../store/games";
import { toast } from "react-hot-toast";

//Styling
import { CardContent, SaveWrapper, CartTotal } from "./styles";
import { Centered } from "../../styles/globalStyles";

//Components
import { CartList } from "./sub_components";
import { ArrowedButton, Card } from "..";
import { useHistory } from "react-router";

export default function Cart(): JSX.Element {
  const gamesCtx = useSelector((state: RootState) => state.games);
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const price = gamesCtx.totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleSaveCart() {
    try {
      dispatch(saveGames());
      dispatch(clearCartGames());
      history.push(`/account/${user.user.id}`);
    } catch (e: any) {
      toast.error(e.message);
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
              <CartList />
            </>
          ) : (
            <>
              <h2>Empty cart</h2>
            </>
          )}
        </Centered>
        <CartTotal>
          <h1>
            Cart <span>total: {price}</span>
          </h1>
        </CartTotal>
      </CardContent>
      <SaveWrapper onClick={handleSaveCart}>
        <ArrowedButton text="Save" color="#27C383" data-cy="saveCart-button" />
      </SaveWrapper>
    </Card>
  );
}
