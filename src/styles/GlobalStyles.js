// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
  }
`;

export default GlobalStyles;
