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
    }
    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyle
