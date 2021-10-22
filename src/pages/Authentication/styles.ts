import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-style: italic;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    color: #707070;
    font-size: 6.5rem;
  }
`;

export const SpanWrapper = styled.div`
  background-color: #b5c401;
  border-radius: 100px;
  width: 14.4rem;
  text-align: center;
  padding: 0.7rem;
  span {
    color: white;
    font-size: 2.2rem;
  }
`;

export const AuthenticationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #707070;
    font-size: 3.5rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  width: 35rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;
  opacity: 1;
  overflow: hidden;
`;

export const ForgotPassword = styled.button`
  font-size: 1.7rem;
  color: #c1c1c1;
  background-color: transparent;
  outline: none;
  border: none;
  font-style: italic;
  font-weight: 300;
  align-self: flex-end;
  margin: 3rem 2.7rem;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 6rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 1rem;
  margin-top: 2rem;
  box-sizing: border-box;

  outline: none;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-color: #ebebeb;

  color: "#9D9D9D";
  font-family: "Arimo";
  font-style: italic;
  font-size: 1.7rem;
`;
