import FormProps from "../../../models/FormProps";
import {
  AuthenticationWrapper,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";
import ArrowedButton from "../../ui/ArrowedButton";

const ResetPassword: React.FC<FormProps> = (props) => {
  function handleGoBack() {
    props.setForm(0);
  }
  return (
    <AuthenticationWrapper>
      <h1>Reset Password</h1>
      <FormWrapper>
        <Input type="email" placeholder="Email" />
        <ArrowedButton text="Send Link" color="#B5C401" />
      </FormWrapper>
      <ArrowedButton
        onClick={handleGoBack}
        text="Back"
        color="#707070"
        arrowToRight={false}
      />
    </AuthenticationWrapper>
  );
};
export default ResetPassword;
