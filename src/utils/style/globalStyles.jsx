import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: Montserrat, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle
