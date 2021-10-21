import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas: "header" "section" "footer";
  align-items: flex-start;

  ul {
    text-decoration: none;
    list-style-type: none;
    padding: 0;
  }
`;
export const Content = styled.section`
  grid-area: section;
  display: grid;
  grid-template-columns: 50vw 15vw;
  gap: 4.1rem;
  justify-content: center;
`;
export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    color: #707070;
    font-size: 2.4rem;
    span {
      font-weight: 400;
    }
  }
  h4 {
    color: #868686;
    font-size: 1.7rem;
    font-style: italic;
  }
`;

export const GameList = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const GameDescription = styled.span`
  font-size: 1.7rem;
  color: #868686;
`;
export const ActionsList = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 2.5rem;
  }
  li:last-child {
    margin-left: auto;
  }
`;
