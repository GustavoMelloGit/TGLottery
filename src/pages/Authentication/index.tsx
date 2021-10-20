import React from "react";
import ArrowedButton from "../../components/ui/ArrowedButton";
import {
  Aside,
  AuthenticationWrapper,
  Container,
  ForgotPassword,
  FormWrapper,
  Input,
  SpanWrapper,
} from "./styles";

export default function Authentication() {
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
      <AuthenticationWrapper>
        <h1>Authentication</h1>
        <FormWrapper>
          <form action="">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </form>
          <ForgotPassword>I forgot my password</ForgotPassword>
          <ArrowedButton text="Log In" color="#B5C401" />
        </FormWrapper>
        <ArrowedButton text="Sign Up" color="#707070" />
      </AuthenticationWrapper>
    </Container>
  );
}
