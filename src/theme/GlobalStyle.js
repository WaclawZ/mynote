import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; // Setting rem to pixel ratio to 10px ( 1 rem === 10 px)
    }

    body {
        padding-left: 15rem; // move all content 15rem to the left (sidebar width)
        font-size: 1.6rem; // happy rems
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle;
