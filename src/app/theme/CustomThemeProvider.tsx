"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "./theme";
import { useAppSelector } from "../hook/hooks";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { selectTheme } = useAppSelector((state) => state.persistStores);
  return (
    <ThemeProvider theme={themeConfig(selectTheme)}>{children}</ThemeProvider>
  );
};

export default CustomThemeProvider;
