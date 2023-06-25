import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React from "react";

const Theme = ({ children }) => {
  const theme = createTheme({});
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
