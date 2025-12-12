"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

interface AppThemeProps extends React.ComponentProps<typeof ThemeProvider> {}

function AppTheme({ children, ...props }: AppThemeProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export { AppTheme };
