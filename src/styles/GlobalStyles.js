import { createGlobalStyle } from "styled-components";
import '@fontsource/akaya-telivigala'
import '@fontsource/sora'

const GlobalStyle = createGlobalStyle`

${'' /* * {
    outline: 1px solid red !important;
} */}

*,*::before,*::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
    background: #9FC9B3;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyle;