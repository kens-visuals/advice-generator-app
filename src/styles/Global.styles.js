import { createGlobalStyle } from 'styled-components';
import color from 'styles/colors';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${color.secondary};
    background-color: ${color.primary};
    font-size: 1.6rem;
    font-weight: 800;
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
