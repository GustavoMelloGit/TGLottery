import styled from "styled-components";

export const GameList = styled.ul`
  display: flex;
  list-style: none;
  li:not(:last-child) {
    margin-right: 2.5rem;
  }
`;
