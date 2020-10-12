import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  *:focus {
    outline: 2px dotted ${({ theme }) => theme.darkBlue};
  }
  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
    p {
    line-height: 1.7;
    color: ${({ theme }) => theme.darkGray};
    }
    @media (min-width: 768px) {
      p {
        font-size: 1.125rem;
      }
  }
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    line-height: 1.06;
  }
  h1 {
    font-size: ${({ theme }) => theme.typography.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4};}

  h5 {
    font-size: ${({ theme }) => theme.typography.h5};
  }
  small {
    font-size: ${({ theme }) => theme.typography.small};
  }
`
