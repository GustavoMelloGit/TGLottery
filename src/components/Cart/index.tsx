//Utils
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { clearCartGames, saveGames } from "../../store/games";
import { toast } from "react-hot-toast";

//Styling
import { CardContent, SaveWrapper } from "./styles";
import { Centered } from "../../styles/globalStyles";

//Components
import { CartContent } from "./sub_components";
import ArrowedButton from "../ui/ArrowedButton";
import Card from "../ui/Card";
import { useHistory } from "react-router";
import { Toast } from "..";

export default function Cart(): JSX.Element {
  const gamesCtx = useSelector((state: RootState) => state.games);
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

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
      <Toast />
    </Card>
  );
}
