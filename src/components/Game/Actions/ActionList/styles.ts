import styled from "styled-components";

export const ActionsListContainer = styled.ul`
  display: flex;
  li:not(:last-child) {
    margin-right: 2.5rem;
  }
  li:last-child {
    margin-left: auto;
  }
`;
