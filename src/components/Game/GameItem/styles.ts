import styled from "styled-components";

interface Props {
  color: string;
}
export const GameContainer = styled.div`
  height: 10rem;
  display: flex;
`;

export const VerticalLine = styled.div<Props>`
  width: 0.8rem;
  background-color: ${(p) => p.color};
  border-radius: 8px;
  min-height: 9.4rem;
  margin-right: 2rem;
`;

export const GameInfo = styled.div<Props>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #868686;
  h1 {
    margin: 0;
    font-size: 2rem;
    font-style: italic;
    &.type {
      text-transform: capitalize;
      color: ${(p) => p.color};
    }
  }
  span {
    font-size: 1.7rem;
  }
`;
