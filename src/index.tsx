// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Internationalization
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import en_BG from "./languages/en-GB.json";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// App
import App from "./App";
import reportWebVitals from "scripts/reportWebVitals";

// Material UI
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

// Theme
import theme from "styles/theme";
const appTheme = createTheme(theme);

// Styles
import "styles/global.css";

// Internationalization Configuration
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      app: en_BG
    }
  },
  returnNull: false
});

// Run MSW Browser on Local Env Mock
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { mswBrowser } = require("mocks/mswBrowser");
mswBrowser.start();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
