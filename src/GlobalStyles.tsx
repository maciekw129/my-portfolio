import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #430C15;
        border-top: none;
    }

    p {
        color: #8E8E8E;
        margin: 0.5rem 0;
    }

    h1, h2, h3, h4, h5, h6, input {
        color: #F1F3F8;
    }

    ul {
        list-style-type: none;
    }

    a {
        color: black;
    }
`;

export default GlobalStyles;