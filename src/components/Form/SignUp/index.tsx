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
import { ArrowedButton, Toast } from "../../";

const SignUp: React.FC<FormProps> = (props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  function handleGoBack() {
    props.setForm(0);
  }
  async function handleSignIn() {
    //Getting input values
    const enteredName = nameInput.current!.value;
    const enteredEmail = emailInput.current!.value;
    const enteredPassword = passwordInput.current!.value;

    //SignIn
    try {
      api
        .post(
          `${endpointsConfig.REACT_APP_API_URL}signUp?key=${endpointsConfig.REACT_APP_API_KEY}`,
          {
            email: enteredEmail,
            password: enteredPassword,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success("Cadastrado com sucesso!");
            props.setForm(0);
          }
        });
    } catch (e: any) {
      toast.error(e.message);
      return;
    }
  }
  return (
    <>
      <AuthenticationWrapper>
        <h1>Registration</h1>
        <FormWrapper>
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
          <ArrowedButton
            text="Register"
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
      <Toast />
    </>
  );
};

export default SignUp;
