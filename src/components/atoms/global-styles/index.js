import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    font-size: 18px;
    line-height: 1.5;
  }
  
  #app {
    padding: 15px;
  }
`
