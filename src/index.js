import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { GlobalProvider } from "./context/GlobalContext";
import ScrollTop from "./components/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ScrollTop />
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
