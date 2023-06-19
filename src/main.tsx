import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "styles/normalize.css";
import "styles/global.css";
ReactDOM.createRoot(document.getElementById("_app") as HTMLElement).render(
  (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) as ReactNode
);
