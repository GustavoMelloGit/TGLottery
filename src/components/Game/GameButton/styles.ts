import styled from "styled-components";

interface Props {
  color: string;
  buttonSelected: boolean;
}
export const Button = styled.button<Props>`
  cursor: pointer;
  height: 3.4rem;
  width: 11.2rem;

  font-size: 1.4em;

  background: ${(p) => (p.buttonSelected ? p.color : "#ffff")} no-repeat
    padding-box;
  border: 2px solid ${(p) => p.color};
  border-radius: 100px;
  opacity: 1;
  color: ${(p) => (p.buttonSelected ? "white" : p.color)};
  transition: 0.2s;
`;
