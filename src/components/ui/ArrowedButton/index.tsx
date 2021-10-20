import React from "react";
import { Button } from "./styles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
interface IArrowedButton {
  text: string;
  arrowToRigth?: boolean;
  color?: string;
}

export default function ArrowedButton({
  text,
  arrowToRigth = true,
  color,
}: IArrowedButton) {
  return (
    <Button color={color}>
      {text} {arrowToRigth ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </Button>
  );
}
