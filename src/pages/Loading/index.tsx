import { LoadingContainer } from "./styles";

export function Loading(): JSX.Element {
  return (
    <LoadingContainer>
      <div className="loader"></div>
    </LoadingContainer>
  );
}
