import styled from "styled-components";

export const CardContent = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  h1 {
    margin: 0;
    font-size: 2.4rem;
    color: #707070;
    font-style: italic;
    text-transform: uppercase;
  }
  h2 {
    color: #707070;
    font-style: italic;
    text-transform: uppercase;
  }
`;

export const SaveWrapper = styled.div`
  height: 20%;
  width: 100%;
  background-color: #f4f4f4;
  border: thin solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
