import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 7fr 1fr;
  grid-row-gap: 2rem;
  grid-template-areas:
    "header header header"
    ". section ."
    "footer footer footer";

  ul {
    text-decoration: none;
    list-style-type: none;
    padding: 0;
  }
`;
export const Content = styled.section`
  grid-area: section;
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 390px) {
    display: block;
  }
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

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  h1 {
    margin: 0;
    font-size: 2.4rem;
    color: #707070;
    font-style: italic;
    text-transform: uppercase;
  }
`;

export const CardContentInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #707070;
    font-style: italic;
    text-transform: uppercase;
  }
`;
export const GameList = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export const NumbersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-row-gap: 2rem;
  max-height: 22rem;
  margin: 2rem 0;
  overflow: scroll;
  overflow-x: hidden;
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
