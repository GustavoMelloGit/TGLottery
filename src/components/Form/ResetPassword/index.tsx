//Utils
import FormProps from "../../../models/FormProps";

//Styling
import {
  AuthenticationWrapper,
  FormWrapper,
  Input,
} from "../../../pages/Authentication/styles";

//Components
import { ArrowedButton } from "../../";

const ResetPassword: React.FC<FormProps> = (props) => {
  function handleGoBack() {
    props.setForm(0);
  }
  return (
    <AuthenticationWrapper>
      <h1>Reset Password</h1>
      <FormWrapper>
        <Input
          type="email"
          placeholder="Email"
          required
          data-cy="email-input"
        />
        <ArrowedButton
          text="Send Link"
          color="#B5C401"
          data-cy="sendLink-button"
        />
      </FormWrapper>
      <ArrowedButton
        onClick={handleGoBack}
        text="Back"
        arrowToRight={false}
        data-cy="goBack-button"
      />
    </AuthenticationWrapper>
  );
};
export default ResetPassword;
