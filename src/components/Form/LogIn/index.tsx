//Utils
import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "@store/index";
import { useHistory } from "react-router-dom";
import FormProps from "../../../models/FormProps";
import toast from "react-hot-toast";
import api from "@api/api";
import endpointsConfig from "@api/endpoints.config";
import { authenticationIsValid } from "@utils/validation";

//Styling
import {
  AuthenticationWrapper,
  ForgotPassword,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";

//Components
import { ArrowedButton } from "../../";

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
    const loading = toast.loading("Carregando...");

    //Guarda as informações digitadas
    const email = emailRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();

    //Valida informações
    if (!authenticationIsValid(email, password)) {
      toast.dismiss(loading);
      toast.error("Preencha todos os campos corretamente!");
      return;
    }

    api
      .post(
        `${endpointsConfig.REACT_APP_API_URL}signInWithPassword?key=${endpointsConfig.REACT_APP_API_KEY}`,
        {
          email,
          password,
        }
      )
      .then((response) => {
        toast.dismiss(loading);
        if (response.status === 200) {
          dispatch(logIn(response.data));
          history.push("/home");
        }
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error("Erro ao realizar login");
      });
  }

  return (
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
  );
};

export default LogIn;
