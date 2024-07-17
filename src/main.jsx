import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MyContextProvider } from "./context/MyContext.jsx";
import "./i18n.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
