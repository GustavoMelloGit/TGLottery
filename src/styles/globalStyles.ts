import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #F7F7F7;
        font-family: "Arimo";
    }
    html{
        font-size: 62.5%;
        @media(max-width: 700px){
            font-size: 50%;
        }
        @media(max-width: 600px){
            font-size: 30%;
        }
        @media(max-width: 320px){
            font-size: 20%;
        }
    }
`;

export default GlobalStyle;
