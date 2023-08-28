"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
