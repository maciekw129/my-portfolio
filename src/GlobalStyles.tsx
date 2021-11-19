import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        //ss
    }

    body {
        background-color: #430C15;
    }

    p {
        color: #8E8E8E;
        margin: 0.5rem 0;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #F1F3F8;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyles;