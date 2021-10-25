import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
interface IArrowedButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  arrowToRight?: boolean;
  color?: string;
}

export default function ArrowedButton(props: IArrowedButton) {
  const { text, arrowToRight = true, color = "#707070" } = props;
  return (
    <Button color={color} {...props}>
      {arrowToRight ? (
        <>
          {text} <AiOutlineArrowRight className="arrow" />
        </>
      ) : (
        <>
          <AiOutlineArrowLeft className="arrow" /> {text}
        </>
      )}
    </Button>
  );
}
