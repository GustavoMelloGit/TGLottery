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
  display: flex;
  align-items: center;
  cursor: pointer;
  .arrow {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
