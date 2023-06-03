// React
import React, { PropsWithChildren } from "react";

// Testing Library
import { render, RenderOptions } from "@testing-library/react";

// Router
import { BrowserRouter } from "react-router-dom";

// Internationalization
import en_BG from "../languages/en-GB.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// MUI Theme
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "styles/theme";
const appTheme = createTheme(theme);

// Internationalization config
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // Language to use
  resources: {
    en: {
      app: en_BG
    }
  }
});

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  route?: string;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    route = "/",
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <I18nextProvider i18n={i18next}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={appTheme}>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </I18nextProvider>
    );
  };
  window.history.pushState({}, "Test page", route);

  // Return an object with the store and all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders };
