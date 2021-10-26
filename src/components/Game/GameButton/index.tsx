//Utils
import { ButtonHTMLAttributes } from "react";
//Styling
import { Button } from "./styles";

interface IGameButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor: string;
  index: number;
  selected: number;
}
export default function GameButton(props: IGameButton) {
  const isSelected = props.index === props.selected;
  return (
    <Button buttonSelected={isSelected} color={props.textColor} {...props}>
      {props.text}
    </Button>
  );
}
