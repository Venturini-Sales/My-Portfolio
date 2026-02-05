import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
        font-family: 'Roboto',Arial, Helvetica, sans-serif;
        font-weight: 400;
        cursor: pointer;
    }

    html {
        font-size: 100%;
    }

    body{
        overflow: hidden;
        font-size: 1rem;
        background-color: ${({ theme }) => theme.colors.secondary};

        h1{
            font-weight: 900;
        }

        p{
            font-size: 1rem;
            line-height: 1.6;
        }
    }

    `;
