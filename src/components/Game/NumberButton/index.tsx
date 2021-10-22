import React, { ButtonHTMLAttributes } from "react";
import { Number } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface INumberButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: string;
  color: string;
  onClick: () => void;
}
export default function NumberButton(props: INumberButton) {
  const numbers = useSelector((state: RootState) => state.games.game.numbers);
  let selected: boolean = false;
  if (numbers.includes(+props.index)) {
    selected = true;
  }
  return (
    <Number selected={selected} gameColor={props.color} {...props}>
      {props.index}
    </Number>
  );
}
