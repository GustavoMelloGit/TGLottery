//Utils
import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/auth";
import { useHistory } from "react-router-dom";
import FormProps from "../../../models/FormProps";
import toast from "react-hot-toast";

//Styling
import {
  AuthenticationWrapper,
  ForgotPassword,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";

//Components
import { ArrowedButton, Toast } from "../../";

const LogIn: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

    //Faz login
    try {
      dispatch(logIn({ email, password }));
    } catch (e: any) {
      toast.error(e.message);
      return;
    }
    history.push("/home");
  }

  return (
    <>
      <AuthenticationWrapper>
        <h1>Authentication</h1>
        <FormWrapper>
          <form onSubmit={handleLoginSubmit}>
            <Input
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
              data-cy="email-input"
              autoFocus
            />
            <Input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
              data-cy="password-input"
            />
          </form>
          <ForgotPassword
            onClick={handleForgotPassword}
            data-cy="forgot-password"
          >
            I forgot my password
          </ForgotPassword>
          <ArrowedButton
            onClick={handleLoginSubmit}
            text="Log In"
            color="#B5C401"
            data-cy="login-button"
          />
        </FormWrapper>
        <ArrowedButton
          text="Sign Up"
          onClick={handleSignIn}
          data-cy="signup-button"
        />
      </AuthenticationWrapper>
      <Toast />
    </>
  );
};

export default LogIn;
