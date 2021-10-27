//Utils
import { ButtonHTMLAttributes } from "react";
//Styling
import { Button } from "./styles";

interface IGameButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor: string;
  index: number;
  selected: boolean;
}
export default function GameButton(props: IGameButton): JSX.Element {
  return (
    <Button buttonSelected={props.selected} color={props.textColor} {...props}>
      {props.text}
    </Button>
  );
}
