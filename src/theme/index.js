import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";
import React from "react";
import { MuiButton } from "./Button";

const Theme = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiButton,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
