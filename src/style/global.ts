import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-gradient: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  }

  * {
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  html, body, [data-js="root"] {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Karla', sans-serif;
    color: #fff;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    user-select: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  [data-js="root"] {
    isolation: isolate;
  }
`

export default GlobalStyles
