import React from "react";
import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./store/app-context";

import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
