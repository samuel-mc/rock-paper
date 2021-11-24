import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #064274;
        --secondary-color: #055C95;
        --tertiary-color: #2a5c7d;
        --light-color: #CCF3FF;
    }
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--primary-color);
    }
`;

export default GlobalStyles;
