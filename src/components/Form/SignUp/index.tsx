//Utils
import React, { useRef } from "react";
import FormProps from "../../../models/FormProps";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/auth";

//Styling
import {
  AuthenticationWrapper,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import toast from "react-hot-toast";

//Components
import { ArrowedButton, Toast } from "../..";
import { ISignIn } from "../../../models/AuthInterfaces";

const SignUp: React.FC<FormProps> = (props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function handleGoBack() {
    props.setForm(0);
  }
  function handleSignIn() {
    //Getting input values
    const enteredName = nameInput.current!.value;
    const enteredEmail = emailInput.current!.value;
    const enteredPassword = passwordInput.current!.value;

    //SignIn
    const user: ISignIn = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
    };
    try {
      dispatch(signIn(user));
    } catch (e: any) {
      toast.error(e.message);
      return;
    }
    toast.success("Cadastrado com sucesso!");
    props.setForm(0);
  }
  return (
    <>
      <AuthenticationWrapper>
        <h1>Registration</h1>
        <FormWrapper>
          <Input type="text" placeholder="Name" required ref={nameInput} />
          <Input type="email" placeholder="Email" required ref={emailInput} />
          <Input
            type="password"
            placeholder="Password"
            required
            ref={passwordInput}
          />
          <ArrowedButton
            text="Register"
            color="#B5C401"
            style={{ marginTop: 20 }}
            onClick={handleSignIn}
          />
        </FormWrapper>
        <ArrowedButton
          text="Back"
          arrowToRight={false}
          onClick={handleGoBack}
        />
      </AuthenticationWrapper>
      <Toast />
    </>
  );
};

export default SignUp;
