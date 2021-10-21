import React, { useState } from "react";
import { Aside, Container, SpanWrapper } from "./styles";
import LogIn from "../../components/Form/LogIn";
import ResetPassword from "../../components/Form/ResetPassword";
import SignUp from "../../components/Form/SignUp";

export default function Authentication() {
  const [userForm, setUserForm] = useState(0);

  function showUserForm(index: number) {
    switch (index) {
      case 0:
        return <LogIn setForm={setUserForm} />;
      case 1:
        return <ResetPassword setForm={setUserForm} />;
      case 2:
        return <SignUp setForm={setUserForm} />;
    }
  }

  return (
    <Container>
      <Aside>
        <h1>
          The <br /> Greatest <br /> App
        </h1>
        <SpanWrapper>
          <span>for</span>
        </SpanWrapper>
        <h1>LOTTERY</h1>
      </Aside>
      {showUserForm(userForm)}
    </Container>
  );
}
