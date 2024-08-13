import React from "react";
import ReactDOM from "react-dom/client";
import CustomRouter from "./router/index.tsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <CustomRouter />
    </ThemeProvider>
  </React.StrictMode>
);
