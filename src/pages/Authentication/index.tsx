//Utils
import { useState } from "react";

//Styling
import { Aside, Container, SpanWrapper } from "./styles";

//Components
import { LogIn, ResetPassword, SignUp } from "../../components";

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
