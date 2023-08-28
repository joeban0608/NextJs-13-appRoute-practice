"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* Your default theme - dark */
    --primary: #ff4655;
    --secondary: #181a29;
    --background_1: #111;
    --background_2: #131522;
    --background_3: #2a2e43;
    --background_4: #40445e;
    --background_5: #2a2e43;
    --text_1: #fff;
    --text_2: #cbcbcb;
    --text_3: #8a8f9c;
    --text_4: #5d5f69;
    --buttons: #fff;
    --dividing_1: #25262f;
    --dividing_2: #40445e;
    --dividing_3: #25262f;
    --dividing_4: #7d8190;
    --shareBackground: #0b0d15;
    --gameBackground: #000;
    --heart: #ff3142;
    --start: #ff9e4f;
    background: var(--background_1);
    color: var(--text_1);
  }

  [data-theme="light"] {
    --primary: #01b8b8;
    --secondary: #fff;
    --background_1: #fff;
    --background_2: #e0e0e0;
    --background_3: #fff;
    --background_4: #dadada;
    --background_5: #eee;
    --text_1: #231814;
    --text_2: #5b5b5b;
    --text_3: #acacac;
    --text_4: #5b5b5b;
    --buttons: #fff;
    --dividing_1: #e0e0e0;
    --dividing_2: #acacac;
    --dividing_3: #cbcbcb;
    --dividing_4: #cbcbcb;
    --shareBackground: #e1e1e1;
    --gameBackground: #000;
    --heart: #ff3142;
    --start: #ff9e4f;
    background: var(--background_1);
    color: var(--text_1);
  }
`;

export default GlobalStyles;
