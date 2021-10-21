import React, { useRef } from "react";
import FormProps from "../../../models/FormProps";
import {
  AuthenticationWrapper,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import ArrowedButton from "../../ui/ArrowedButton";
import { useDispatch } from "react-redux";
import { signIn, UserProps } from "../../../store/auth";
import api from "../../../api/api.json";

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

    //Data validation
    if (enteredName.trim().length < 2) {
      alert("Enter a valid name");
      return;
    } else if (enteredEmail.length < 6 || !enteredEmail.includes("@")) {
      alert("Enter a valid email");
      return;
    } else if (enteredPassword.trim().length < 6) {
      alert("Passwords must be longer than 6");
      return;
    }
    if (api.users.find((user) => user.email === enteredEmail)) {
      alert("Email already exists");
      return;
    }

    //SignIn
    const id = new Date().toString();
    const user: UserProps = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
      id: id,
    };
    dispatch(signIn(user));
    alert("Signed in with success!");
    props.setForm(0);
  }
  return (
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
      <ArrowedButton text="Back" arrowToRight={false} onClick={handleGoBack} />
    </AuthenticationWrapper>
  );
};

export default SignUp;
