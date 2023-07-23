import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./light-theme";

export const Theme = ({ children }: any) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
