import styled from "styled-components";

interface Props {
  color: string;
}
export const ItemContainer = styled.li`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem auto;
  .img {
    min-height: 2rem;
    min-width: 3rem;
    cursor: pointer;
  }
`;
export const GameInfo = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  border-left: 0.4rem solid ${(p) => p.color};
  border-radius: 0.5rem;
  p {
    margin: 0.6rem 0;
    font-size: 1.4rem;
    color: #868686;
    font-style: italic;
  }
  span {
    margin: 0;
    font-size: 1.6rem;
    font-style: italic;
    color: ${(p) => p.color};
    span {
      font-style: normal;
      color: #868686;
    }
  }
`;
