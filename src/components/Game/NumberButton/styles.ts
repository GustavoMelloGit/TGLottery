import styled from "styled-components";

interface Props {
  selected: boolean;
  gameColor: string;
}
export const Number = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  background: ${(p) => (p.selected ? p.gameColor : "#758285")} 0% 0% no-repeat
    padding-box;
  opacity: 1;
  color: #fff;
  font-size: 1.4em;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
