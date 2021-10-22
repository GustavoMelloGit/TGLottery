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
        @media(max-width: 800px){
            font-size: 50%;
        }
        @media(max-width: 650px){
            font-size: 30%;
        }
        @media(max-width: 390px){
            font-size: 25%;
        }
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #707070;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #b3afb3;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0px;
        box-shadow: inset 0px 0px 0px 0px #f0f0f0;
    }
`;

export default GlobalStyle;
