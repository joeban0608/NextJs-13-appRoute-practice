"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
