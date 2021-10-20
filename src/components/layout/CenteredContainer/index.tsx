import React from "react";
import { Container } from "./styles";

const CenteredContainer: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default CenteredContainer;
