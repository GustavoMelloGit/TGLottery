//Utils
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

//Styling
import { CartContentContainer, CartTotal } from "./styles";

//Components
import { CartList } from "..";

export default function CartContent(): JSX.Element {
  const price = useSelector(
    (state: RootState) => state.games.totalPrice
  ).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return (
    <CartContentContainer>
      <CartList />
      <CartTotal>
        <h1>
          Cart <span>total: {price}</span>
        </h1>
      </CartTotal>
    </CartContentContainer>
  );
}
