import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 7fr 1fr;
  grid-row-gap: 5rem;
  grid-template-areas:
    "header header header"
    ".     content ."
    "footer footer footer";
`;

export const Content = styled.div`
  grid-area: content;
  h1 {
    margin: 0;
    font-size: 2.4rem;
    text-transform: uppercase;
    font-style: italic;
    color: #707070;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  .button {
    font-size: 2.4rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Filters = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.7rem;
    color: #868686;
    font-style: italic;
  }
  @media (max-width: 1024px) {
    margin: 2rem 0;
  }
`;
export const GamesListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  li:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;
