import { FormEvent, useRef } from "react";
import FormProps from "../../../models/FormProps";
import {
  AuthenticationWrapper,
  ForgotPassword,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import ArrowedButton from "../../ui/ArrowedButton";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../store/auth";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../store";

const LogIn: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(
    (user: RootState) => user.auth.isAuthenticated
  );

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleForgotPassword() {
    props.setForm(1);
  }
  function handleSignIn() {
    props.setForm(2);
  }

  function handleLoginSubmit(e: FormEvent) {
    e.preventDefault();

    //Guarda as informações digitadas
    const email = emailRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();

    //Valida a digitação
    if (email.length < 6 || !email.includes("@")) {
      alert("Enter a valid email");
      return;
    } else if (password.length < 6) {
      alert("Passwords must be longer than 6");
      return;
    }

    //Faz login
    dispatch(logIn({ email, password }));
    if (isAuthenticated) {
      history.push("/home");
    } else alert("Email and/or password invalid");
  }

  return (
    <AuthenticationWrapper>
      <h1>Authentication</h1>
      <FormWrapper>
        <form onSubmit={handleLoginSubmit}>
          <Input type="email" placeholder="Email" ref={emailRef} required />
          <Input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
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
      <ArrowedButton text="Sign Up" onClick={handleSignIn} />
    </AuthenticationWrapper>
  );
};

export default LogIn;
