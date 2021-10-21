import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
interface IArrowedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  arrowToRight?: boolean;
  color?: string;
}

export default function ArrowedButton(props: IArrowedButton) {
  const { text, arrowToRight = true, color } = props;
  return (
    <Button color={color} {...props}>
      {arrowToRight ? (
        <>
          {text} <AiOutlineArrowRight />
        </>
      ) : (
        <>
          <AiOutlineArrowLeft /> {text}
        </>
      )}
    </Button>
  );
}