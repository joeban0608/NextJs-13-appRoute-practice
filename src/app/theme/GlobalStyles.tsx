"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  // your global styles
  body {
    background: ${({ theme }) => theme.background_1};
    color: ${({ theme }) => theme.text_1};
  }
`;

export default GlobalStyles;
