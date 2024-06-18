import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        color: black;
    }

    a {
        text-decoration: none;
    }
`;
