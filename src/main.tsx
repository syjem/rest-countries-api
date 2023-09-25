import "./index.css";
import React from "react";
// import Routes from "./Routes.tsx";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
