import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";

const Providers = ({ children }) => {
  return (
    <Providers store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Providers>
  );
};

export default Providers;
