import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyles.js";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: "black" }}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
