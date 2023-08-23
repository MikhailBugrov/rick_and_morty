import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import store from "./store/configureStore";
import theme from "./styles/theme";

// I am using HashRouter instead of BrowserRouter due to the peculiarities of GitHub Pages hosting.

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Box>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
