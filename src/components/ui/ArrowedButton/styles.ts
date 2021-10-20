import styled from "styled-components";

interface Props {
  color?: string;
}
export const Button = styled.button<Props>`
  background: transparent;
  color: ${(p) => p.color};
  font-size: 3.5rem;
  font-weight: bold;
  font-style: italic;
  border: none;
  vertical-align: middle;
  cursor: pointer;
`;
