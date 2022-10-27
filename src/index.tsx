import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ContextProvider from "@/lib/states/ContextProvider";
import App from "./App";
import { GlobalStyle, theme } from "./lib/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />

          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
