"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "./theme";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={themeConfig("")}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
