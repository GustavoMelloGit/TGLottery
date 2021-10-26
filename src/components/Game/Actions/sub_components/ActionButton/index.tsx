//Utils
import { ButtonHTMLAttributes } from "react";

//Styling
import { IconType } from "react-icons";
import { Button } from "./styles";
interface IActionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  gameColor: string;
  filled?: boolean;
  Image?: IconType;
}

export default function ActionButton(props: IActionButton): JSX.Element {
  const { text, filled = false, gameColor, Image } = props;

  return (
    <Button color={gameColor} filled={filled} {...props}>
      {Image && <Image className="icon" />}
      {text}
    </Button>
  );
}
