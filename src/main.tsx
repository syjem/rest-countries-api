import "./index.css";
import React from "react";
// import App from "./App.tsx";
import Routes from "./Routes.tsx";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
