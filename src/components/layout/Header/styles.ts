import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  color: #707070;
  grid-area: header;
`;

export const HeaderContent = styled.div`
  display: flex;
  padding: 1.5rem 10vw 0 10vw;
  justify-content: space-between;
  .link {
    text-decoration: none;
    color: #707070;
    font-family: "Arimo";
    font-style: italic;

    &.h1 {
      font-size: 4.4rem;
      font-weight: bold;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        height: 0.7rem;
        border-radius: 6px;
        bottom: -1rem;
        left: 0;
        width: 100%;
        background: #b5c401;
      }
    }
  }
`;

export const List = styled.ul`
  text-decoration: none;
  list-style-type: none;
  display: flex;
  align-items: center;
  .li {
    font-size: 2rem;
    margin-left: 5.7rem;
  }
`;
