import { useHistory } from "react-router";
import { ArrowedButton } from "../../components";
import { Container } from "./styles";

export default function NotFound(): JSX.Element {
  const history = useHistory();
  function handleGoBack() {
    history.replace("/home");
  }
  return (
    <Container>
      <h1>TGL</h1>
      <p>You are not supposed to be here</p>
      <ArrowedButton
        text="Go back"
        arrowToRight={false}
        color="#B5C401"
        onClick={handleGoBack}
      />
    </Container>
  );
}
