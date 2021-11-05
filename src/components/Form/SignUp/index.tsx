//Utils
import React, { useRef } from "react";
import FormProps from "../../../models/FormProps";
import api from "@api/api";
import endpointsConfig from "@api/endpoints.config";

//Styling
import {
  AuthenticationWrapper,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import toast from "react-hot-toast";

//Components
import { ArrowedButton } from "../../";
import { authenticationIsValid } from "@utils/validation";

const SignUp: React.FC<FormProps> = (props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  function handleGoBack() {
    props.setForm(0);
  }
  async function handleSignIn() {
    const loading = toast.loading("Carregando...");
    //Getting input values
    //const enteredName = nameInput.current!.value;
    const enteredEmail = emailInput.current!.value;
    const enteredPassword = passwordInput.current!.value;

    if (!authenticationIsValid(enteredEmail, enteredPassword)) {
      toast.dismiss(loading);
      toast.error("Preencha os campos corretamente");
      return;
    }
    //SignIn
    api
      .post(
        `${endpointsConfig.REACT_APP_API_URL}signUp?key=${endpointsConfig.REACT_APP_API_KEY}`,
        {
          email: enteredEmail,
          password: enteredPassword,
        }
      )
      .then((response) => {
        toast.dismiss(loading);
        if (response.status === 200) {
          toast.success("Cadastrado com sucesso!");
          props.setForm(0);
        }
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar!");
        toast.dismiss(loading);
      });
  }
  return (
    <AuthenticationWrapper>
      <h1>Registration</h1>
      <FormWrapper>
        <form onSubmit={handleSignIn}>
          <Input
            type="text"
            placeholder="Name"
            required
            ref={nameInput}
            data-cy="name-input"
          />
          <Input
            type="email"
            placeholder="Email"
            required
            ref={emailInput}
            data-cy="email-input"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            ref={passwordInput}
            data-cy="password-input"
          />
        </form>
        <ArrowedButton
          text="Register"
          type="submit"
          color="#B5C401"
          style={{ marginTop: 20 }}
          onClick={handleSignIn}
          data-cy="register-button"
        />
      </FormWrapper>
      <ArrowedButton
        text="Back"
        arrowToRight={false}
        onClick={handleGoBack}
        data-cy="goBack-button"
      />
    </AuthenticationWrapper>
  );
};

export default SignUp;
