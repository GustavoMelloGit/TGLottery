import React, { ReactNode } from "react";
import { CardContainer } from "./styles";

interface ICard {
  children: ReactNode;
}
export default function Card(props: ICard) {
  return <CardContainer>{props.children}</CardContainer>;
}
