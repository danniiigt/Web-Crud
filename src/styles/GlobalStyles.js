import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        min-height: 100vh;
        background-color: #f8f8f8;
    }


`

export default GlobalStyles