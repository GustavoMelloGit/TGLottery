import styled from "styled-components";

export const CardContainer = styled.div`
  max-height: 38.8rem;
  max-width: 31.7rem;
  min-width: 23rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  opacity: 1;
  overflow: hidden;

  @media (max-width: 390px) {
    max-width: 100%;
    margin: 0;
  }
`;
