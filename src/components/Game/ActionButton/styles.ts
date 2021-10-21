import styled from "styled-components";

interface Props {
  color: string;
  filled: boolean;
}
export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  padding: 1.7rem 2.5rem;
  border-radius: 10px;

  font-size: 1.4em;
  cursor: pointer;

  border: thin ${(p) => p.color} solid;
  background-color: ${(p) => (p.filled ? p.color : "transparent")};
  color: ${(p) => (p.filled ? "white" : p.color)};
  .icon {
    height: 1.4em;
    width: 1.4em;
    margin-right: 1em;
  }
`;
