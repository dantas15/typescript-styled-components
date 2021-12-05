import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body {
    font-family: ${({ theme }) => theme.font.primary};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.background};
    width: 100%;
  }
`;

export { GlobalStyles };
