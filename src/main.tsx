import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "AppRouter";
import "styles/global.css";
import "styles/normalize.css";

ReactDOM.createRoot(document.getElementById("_app") as HTMLElement).render(
  (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  ) as ReactNode
);
