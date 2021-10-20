import { FormEvent, useRef } from "react";
import FormProps from "../../../models/FormProps";
import {
  AuthenticationWrapper,
  ForgotPassword,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import ArrowedButton from "../../ui/ArrowedButton";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/auth";
import { useHistory } from "react-router-dom";

const LogIn: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleForgotPassword() {
    props.setForm(1);
  }

  function handleLoginSubmit(e: FormEvent) {
    e.preventDefault();

    const email = emailRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const id = new Date().toString();
    if (email.length < 6 || !email.includes("@")) {
      alert("Digite um email válido");
      return;
    } else if (password.length < 6) {
      alert("Digite uma senha válida");
      return;
    }
    dispatch(logIn({ email, password, id }));
    history.push("/home");
  }

  return (
    <AuthenticationWrapper>
      <h1>Authentication</h1>
      <FormWrapper>
        <form onSubmit={handleLoginSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} />
          <Input type="password" placeholder="Password" ref={passwordRef} />
        </form>
        <ForgotPassword onClick={handleForgotPassword}>
          I forgot my password
        </ForgotPassword>
        <ArrowedButton
          onClick={handleLoginSubmit}
          text="Log In"
          color="#B5C401"
        />
      </FormWrapper>
      <ArrowedButton text="Sign Up" color="#707070" />
    </AuthenticationWrapper>
  );
};

export default LogIn;
