import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import Theme from "../theme";
import { CssBaseline } from "@mui/material";

const Providers = ({ children }) => {
  return (
    <Providers store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <CssBaseline />
          {children}
        </Theme>
      </PersistGate>
    </Providers>
  );
};

export default Providers;
