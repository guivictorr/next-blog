import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Inter, sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium}
  }
`;

export default Global;
