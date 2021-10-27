//Utils
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ButtonHTMLAttributes } from "react";

//Styling
import { Number } from "./styles";

interface INumberButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: string;
  color: string;
  onClick: () => void;
}
export default function NumberButton(props: INumberButton): JSX.Element {
  const numbers = useSelector((state: RootState) => state.games.game.numbers);
  let selected: boolean = false;
  if (numbers.includes(+props.index)) {
    selected = true;
  }
  return (
    <Number
      selected={selected}
      gameColor={props.color}
      data-cy={`numbers-button(${+props.index})`}
      {...props}
    >
      {props.index}
    </Number>
  );
}
