import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Button } from "./styles";

interface IActionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  filled?: boolean;
  Image?: IconType;
}

export default function ActionButton(props: IActionButton) {
  const { text, filled = false, color, Image } = props;

  return (
    <Button color={color} filled={filled}>
      {Image && <Image className="icon" />}
      {text}
    </Button>
  );
}
