import React from "react";
import { Divider } from "../../ui/Divider";
import { Container } from "./style";

export default function Footer(): JSX.Element {
  return (
    <Container>
      <Divider />
      <div className="inner_content">
        <span>Copyright 2020 Luby Software</span>
      </div>
    </Container>
  );
}
